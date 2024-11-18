import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import DataTable from "../../../components/AdminPanel/DataTable";
import Swal from "sweetalert2";

function Tickets() {
  const queryClient = useQueryClient();
  const { data: tickets } = useQuery({
    queryKey: ["get-all-ticket-padmin"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:4000/v1/tickets", {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).token
          } `,
        },
      });
      return res.data;
    },
  });
  const { mutate: answerToTicket } = useMutation({
    mutationKey: ["anwser-to-Ticket"],
    mutationFn: async (data) => {
      return axios.post("http://localhost:4000/v1/tickets/answer", data, {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).token
          }`,
        },
      });
    },
    onSuccess: () => {
      Swal.fire({
        title: "پیام شما با موفقیت ارسال شد",
        icon: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["get-all-ticket-padmin"],
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  function showTicketBody(body) {
    Swal.fire({
      title: body,
      confirmButtonText: "اوکی",
    });
  }
  function sendAnwserToTicket(ticketId) {
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
          ticketID: ticketId,
          body: resault.value,
        };
        answerToTicket(answerInfo);
      }
    });
  }

  return (
    <>
      <DataTable title="تیکت‌ها">
        <table className="table">
          <thead>
            <tr>
              <th>شناسه</th>
              <th>کاربر</th>
              <th>عنوان</th>
              <th>نوع تیکت</th>
              <th>دوره</th>
              <th>اولویت</th>
              <th>مشاهده</th>
              <th>پاسخ</th>
            </tr>
          </thead>
          <tbody>
            {tickets?.map((ticket, index) => (
              <tr key={ticket._id}>
                <td>{index + 1}</td>
                <td>{ticket.user}</td>
                <td>{ticket.title}</td>
                <td>{ticket.departmentSubID}</td>
                <td>{ticket.course ? ticket.course : "---"}</td>
                <td>
                  {ticket.priority === 1 && "بالا"}
                  {ticket.priority === 2 && "متوسط"}
                  {ticket.priority === 3 && "کم"}
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary edit-btn"
                    onClick={() => {
                      showTicketBody(ticket.body);
                    }}
                  >
                    مشاهده
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary edit-btn"
                    onClick={() => {
                      sendAnwserToTicket(ticket._id);
                    }}
                  >
                    پاسخ
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

export default Tickets;
