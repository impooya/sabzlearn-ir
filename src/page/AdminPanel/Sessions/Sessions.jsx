import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import DataTable from "../../../components/AdminPanel/DataTable";

function Sessions() {
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  const queryClient = useQueryClient();
  const [sessionCourse, setSessionCourse] = useState("-1");
  const [isSessionFree, setIsSessionFree] = useState(0);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const { data: courses } = useQuery({
    queryKey: ["courses-padmin"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:4000/v1/courses");
      const data = await res.data;
      return data;
    },
  });
  const { data: sessions } = useQuery({
    queryKey: ["sessions-padmin"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:4000/v1/courses/sessions");
      const data = await res.data;
      return data;
    },
  });
  const { mutate: addNewSession } = useMutation({
    mutationKey: ["add-new-session"],
    mutationFn: (newSession) => {
      const formData = new FormData();
      formData.append("video", newSession.video);
      formData.append("title", newSession.title);
      formData.append("time", Number(newSession.time));
      formData.append("free", newSession.free);

      return axios.post(
        `http://localhost:4000/v1/courses/${sessionCourse}/sessions`,
        formData,
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
        title: "اضافه شدن مقاله با موفقیت انجام شد",
        confirmButtonText: "اوکی",
      });
      queryClient.refetchQueries(["sessions-padmin"]);
      reset();
    },

    onError: () => {
      Swal.fire({
        icon: "error",
        title: "خطا",
        text: "متاسفانه، خطایی در افزودن جلسه رخ داده است. لطفا دوباره تلاش کنید.",
        confirmButtonText: "اوکی",
      });
    },
  });
  const { mutate: removeSession } = useMutation({
    mutationKey: ["remove-session"],
    mutationFn: (sessionId) => {
      return axios.delete(
        `http://localhost:4000/v1/courses/sessions/${sessionId}`,
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
        title: "جلسه با موفقیت حذف شد",
        confirmButtonText: "اوکی",
      });
      queryClient.refetchQueries(["sessions-padmin"]);
    },

    onError: (err) => {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "خطا",
        text: "متاسفانه، خطایی در حذف جلسه رخ داده است. لطفا دوباره تلاش کنید.",
        confirmButtonText: "اوکی",
      });
    },
  });

  function onSubmit(data) {
    console.log(data);
    if (sessionCourse === "-1") {
      Swal.fire({
        title: "لطفا دسته بندی مورد نظر خود را وارد کنید",
        icon: "error",
        confirmButtonText: "اوکی",
      });
    } else {
      addNewSession({
        ...data,
        video: data["video"][0],
        free: isSessionFree,
      });
    }
  }

  const removeSessionHandler = (sessionId) => {
    Swal.fire({
      title: "آیا مطمئن هستید؟",
      text: "این عمل غیرقابل بازگشت است!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "بله، حذف کن!",
      cancelButtonText: "خیر، انصراف",
    }).then((result) => {
      if (result.isConfirmed) {
        removeSession(sessionId);
      }
    });
  };

  return (
    <>
      <div className="container-fluid" id="home-content">
        <div className="container">
          <div className="home-title">
            <span>افزودن جلسه جدید</span>
          </div>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-6">
              <div className="name input">
                <label className="input-title">عنوان جلسه</label>
                <input
                  type="text"
                  id="title"
                  placeholder="لطفا نام جلسه را وارد کنید..."
                  {...register("title", {
                    minLength: {
                      value: 8,
                      message: "حداقل 8 کاراکتر وارد شود", // Error message for minimum length
                    },
                    required: "نمیتواند این بخش خالی باشد",
                  })}
                />
                {errors.title && (
                  <span className="error-message text-danger">
                    {errors.title.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="price input">
                <label className="input-title">مدت زمان جلسه</label>
                <input
                  type="text"
                  id="time"
                  placeholder="لطفا مدت زمان جلسه را وارد کنید..."
                  {...register("time", {
                    required: "نمیتواند این بخش خالی باشد",
                  })}
                />
                {errors.time && (
                  <span className="error-message text-danger">
                    {errors.time.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="price input">
                <label className="input-title" style={{ display: "block" }}>
                  دوره
                </label>
                <select
                  className="select"
                  onChange={(event) => setSessionCourse(event.target.value)}
                >
                  <option value="-1">دوره مدنظر را انتخاب کنید</option>
                  {courses?.map((course) => (
                    <option value={course._id} key={course._id}>
                      {course.name}
                    </option>
                  ))}
                </select>
                <span className="error-message text-danger"></span>
              </div>
            </div>
            <div className="col-6">
              <div className="name input">
                <label className="input-title">عنوان جلسه</label>
                <input
                  type="file"
                  {...register("video", {
                    required: "وارد کردن  ویدیو الزامیست",
                  })}
                />
                {errors.video && (
                  <span className="error-message text-danger">
                    {errors.video.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-12">
              <div className="bottom-form">
                <div className="condition">
                  <label className="input-title">وضعیت دوره</label>
                  <div className="radios">
                    <div className="available">
                      <label>
                        <span>غیر رایگان</span>
                        <input
                          type="radio"
                          value="0"
                          name="condition"
                          checked
                          onChange={(event) =>
                            setIsSessionFree(event.target.value)
                          }
                        />
                      </label>
                    </div>
                    <div className="unavailable">
                      <label>
                        <span>رایگان</span>
                        <input
                          type="radio"
                          value="1"
                          name="condition"
                          onChange={(event) =>
                            setIsSessionFree(event.target.value)
                          }
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="bottom-form">
                <div className="submit-btn">
                  <input type="submit" value="افزودن" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <DataTable title="جلسات">
        <table className="table">
          <thead>
            <tr>
              <th>شناسه</th>
              <th>عنوان</th>
              <th>تایم</th>
              <th>دوره</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {sessions?.map((session, index) => (
              <tr key={session._id}>
                <td>{index + 1}</td>
                <td>{session.title}</td>
                <td>{session.time}</td>
                <td>{session.course?.name}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger delete-btn"
                    onClick={() => {
                      removeSessionHandler(session._id);
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

export default Sessions;
