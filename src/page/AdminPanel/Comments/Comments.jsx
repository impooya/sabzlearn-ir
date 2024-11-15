import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import DataTable from "../../../components/AdminPanel/DataTable";
import Swal from "sweetalert2";

function Comments() {
  const queryClient = useQueryClient();
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  const { data: comments } = useQuery({
    queryKey: ["admin-comments"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:4000/v1/comments");
      const data = await res.data;
      return data;
    },
  });
  const { mutate: removeComment } = useMutation({
    mutationKey: ["remove-comment"],
    mutationFn: async (commentId) => {
      const deleteRes = await axios.delete(
        `http://localhost:4000/v1/comments/${commentId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }
      );
      return deleteRes;
    },
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "حذف با موفقیت انجام شد",
        confirmButtonText: "اوکی",
      });
      queryClient.invalidateQueries({
        queryKey: ["admin-comments"],
      });
    },
    onError: (err) => {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "خطا",
        text: "حذف ناموفق بود. لطفا دوباره تلاش کنید.",
        confirmButtonText: "اوکی",
      });
    },
  });
  const { mutate: ban } = useMutation({
    mutationKey: ["ban-user"],
    mutationFn: async (userId) => {
      await axios.put(
        `http://localhost:4000/v1/users/ban/${userId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }
      );
    },
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "بن کاربر با موفقیت انجام شد",
        confirmButtonText: "اوکی",
      });
      queryClient.invalidateQueries({
        queryKey: ["users-table"],
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });
  function banUser(userId) {
    Swal.fire({
      title: "ایا برای بن کاربر مورد نظر مطمین هستید؟",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "خیر",
      confirmButtonText: "بله",
    }).then((resault) => {
      if (resault.isConfirmed) {
        ban(userId);
      } else {
        Swal.fire({
          title: "عملیات بن با موفقیت لفو شد",
          confirmButtonText: "اوکی",
          icon: "success",
        });
      }
    });
  }
  function removeCommentHandler(commentId) {
    Swal.fire({
      title: "ایا برای حذف کامنت مورد نظر مطمین هستید؟",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "خیر",
      confirmButtonText: "بله",
    }).then((resault) => {
      if (resault.isConfirmed) {
        removeComment(commentId);
      } else {
        Swal.fire({
          title: "عملیات حذف با موفقیت لفو شد",
          confirmButtonText: "اوکی",
          icon: "success",
        });
      }
    });
  }
  function showCommentBody(body) {
    Swal.fire({
      title: body,
      confirmButtonText: "اوکی",
    });
  }
  const { mutate: answerToUser } = useMutation({
    mutationKey: ["anwser-to-user"],
    mutationFn: async ({ answerInfo, userId }) => {
      return axios.post(
        `http://localhost:4000/v1/comments/answer/${userId}`,
        answerInfo,
        {
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }
      );
    },
    onSuccess: (res) => {
      console.log(res);
      Swal.fire({
        title: "پیام شما با موفقیت ارسال شد",
        icon: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["admin-comments"],
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });
  function sendAnwserToUser(userId) {
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
          body: resault.value,
        };
        answerToUser({ answerInfo, userId });
      }
    });
  }
  const { mutate: acceptComment } = useMutation({
    mutationKey: ["accept-comment"],
    mutationFn: (commentId) => {
      return axios.put(
        `http://localhost:4000/v1/comments/accept/${commentId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }
      );
    },
    onSuccess: () => {
      Swal.fire({
        title: "پیام با موفقیت تایید شد",
        icon: "success",
      });
      queryClient.invalidateQueries(["admin-comments"]);
    },
    onError: (err) => {
      console.error(err);
      Swal.fire({
        title: "خطا",
        text: "در تأیید نظر مشکلی پیش آمد. لطفاً دوباره تلاش کنید.",
        icon: "error",
      });
    },
  });

  const { mutate: rejectComment } = useMutation({
    mutationKey: ["reject-comment"],
    mutationFn: (commentId) => {
      return axios.put(
        `http://localhost:4000/v1/comments/reject/${commentId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }
      );
    },
    onSuccess: () => {
      Swal.fire({
        title: "نظر با موفقیت رد شد",
        text: "نظر شما با موفقیت رد شد.",
        icon: "success",
      });
      queryClient.invalidateQueries(["admin-comments"]);
    },
    onError: (err) => {
      console.error(err);
      Swal.fire({
        title: "خطا",
        text: "در رد نظر مشکلی پیش آمد. لطفاً دوباره تلاش کنید.",
        icon: "error",
      });
    },
  });

  function acceptCommentHandler(commentId) {
    Swal.fire({
      title: "تأیید نظر",
      text: "آیا مطمئن هستید که می‌خواهید این نظر را تأیید کنید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "بله",
      cancelButtonText: "خیر",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(commentId);
        acceptComment(commentId);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("نظر رد شد!", "نظر شما رد شد.", "info");
      }
    });
  }
  function rejectCommentHandler(commentId) {
    Swal.fire({
      title: "رد نظر",
      text: "آیا مطمئن هستید که می‌خواهید این نظر را رد کنید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "بله",
      cancelButtonText: "خیر",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(commentId);
        rejectComment(commentId);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("نظر تأیید شد!", "نظر شما تأیید نشد.", "info");
      }
    });
  }

  return (
    <>
      <DataTable title="کامنت‌ها">
        <table className="table">
          <thead>
            <tr>
              <th>شناسه</th>
              <th>کاربر</th>
              <th>دوره</th>
              <th>مشاهده</th>
              <th>پاسخ</th>
              <th>ویرایش</th>
              <th>تایید</th>
              <th>رد</th>
              <th>حذف</th>
              <th>بن</th>
            </tr>
          </thead>
          <tbody>
            {comments?.map((comment, index) => (
              <tr key={comment._id}>
                <td
                  style={
                    comment.answer === 1
                      ? { backgroundColor: "green" }
                      : { backgroundColor: "red" }
                  }
                >
                  {index + 1}
                </td>
                <td>{comment.creator?.name}</td>
                <td>{comment.course}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary edit-btn"
                    onClick={() => {
                      showCommentBody(comment.body);
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
                      sendAnwserToUser(comment._id);
                    }}
                  >
                    پاسخ
                  </button>
                </td>
                <td>
                  <button type="button" className="btn btn-primary edit-btn">
                    ویرایش
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary edit-btn"
                    onClick={() => {
                      acceptCommentHandler(comment._id);
                    }}
                  >
                    تایید
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger edit-btn"
                    onClick={() => {
                      rejectCommentHandler(comment._id);
                    }}
                  >
                    رد
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger delete-btn"
                    onClick={() => {
                      removeCommentHandler(comment._id);
                    }}
                  >
                    حذف
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger delete-btn"
                    onClick={() => {
                      banUser(comment.creator._id);
                    }}
                  >
                    بن
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

export default Comments;
