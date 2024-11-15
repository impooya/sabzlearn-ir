import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import DataTable from "../../../components/AdminPanel/DataTable";
import Swal from "sweetalert2";

function Contact() {
  const queryClient = useQueryClient();
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  const { data: contacts } = useQuery({
    queryKey: ["contact-admin"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:4000/v1/contact");
      const data = await res.data;
      return data;
    },
  });
  const { mutate: removeContact } = useMutation({
    mutationKey: ["remove-contact"],
    mutationFn: async (contactId) => {
      await axios.delete(`http://localhost:4000/v1/contact/${contactId}`, {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      });
    },
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "حذف با موفقیت انجام شد",
        confirmButtonText: "اوکی",
      });
      queryClient.invalidateQueries({
        queryKey: ["contact-admin"],
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });
  const { mutate: answerToUser, isPending } = useMutation({
    mutationKey: ["anwser-to-user"],
    mutationFn: async (data) => {
      return axios.post("http://localhost:4000/v1/contact/answer", data, {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      });
    },
    onSuccess: () => {
      Swal.fire({
        title: "پیام شما با موفقیت ارسال شد",
        icon: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["contact-admin"],
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });
  function showContactBody(body) {
    Swal.fire({
      title: body,
      confirmButtonText: "اوکی",
    });
  }
  function removeContactHandler(contactId) {
    Swal.fire({
      title: "ایا برای حذف پیغام مورد نظر مطمین هستید؟",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "خیر",
      confirmButtonText: "بله",
    }).then((resault) => {
      if (resault.isConfirmed) {
        removeContact(contactId);
      } else {
        Swal.fire({
          title: "عملیات حذف با موفقیت لفو شد",
          confirmButtonText: "اوکی",
          icon: "success",
        });
      }
    });
  }

  function sendAnwserToUser(contactEmail) {
    Swal.fire({
      inputAutoTrim: true,
      inputPlaceholder: "پاسخ را وارد کنید",
      title: "متن پاسخ را وارد کنید",
      input: "text",
      showCancelButton: true,
      cancelButtonText: "لغو",
      confirmButtonText: "تایید",
      inputValidator: (value) => {
        if (!value) {
          return "نمیتواند این کادر خالی باشد";
        }
      },
    }).then((resault) => {
      if (resault.isConfirmed) {
        const answerInfo = {
          email: contactEmail,
          answer: resault.value,
        };
        answerToUser(answerInfo);
      }
    });
  }
  if (isPending) {
    return (
      <div className="w-full h-full  bg-white inset-0 absolute blur-md">
        در حال ارسال
      </div>
    );
  } else {
    return (
      <>
        <DataTable title="پیغام‌ها">
          <table className="table">
            <thead>
              <tr>
                <th>شناسه</th>
                <th>نام و نام خانوادگی</th>
                <th>ایمیل</th>
                <th>شماره تماس</th>
                <th>مشاهده</th>
                <th>پاسخ</th>
                <th>حذف</th>
              </tr>
            </thead>
            <tbody>
              {contacts?.map((contact, index) => (
                <tr key={contact._id}>
                  <td
                    style={
                      contact.answer === 1
                        ? { backgroundColor: "green" }
                        : { backgroundColor: "red" }
                    }
                  >
                    {index + 1}
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary edit-btn"
                      onClick={() => {
                        showContactBody(contact.body);
                      }}
                    >
                      مشاهده پیغام
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary edit-btn"
                      onClick={() => sendAnwserToUser(contact.email)}
                    >
                      پاسخ
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger delete-btn"
                      onClick={() => {
                        removeContactHandler(contact._id);
                      }}
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </DataTable>
      </>
    );
  }
}

export default Contact;
