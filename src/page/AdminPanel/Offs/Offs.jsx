import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import DataTable from "../../../components/AdminPanel/DataTable";

function Offs() {
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  const queryClient = useQueryClient();
  const [offCourse, setOffCourse] = useState("-1");
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { data: courses } = useQuery({
    queryKey: ["courses-padmin"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:4000/v1/courses", {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      });
      const data = await res.data;
      return data;
    },
  });
  const { data: offs } = useQuery({
    queryKey: ["offs-padmin"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:4000/v1/offs", {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      });
      const data = await res.data;
      return data;
    },
  });
  const { mutate: addNewOff } = useMutation({
    mutationKey: ["create-offs"],
    mutationFn: (offData) => {
      return axios.post("http://localhost:4000/v1/offs", offData, {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      });
    },
    onSuccess: () => {
      Swal.fire({
        title: "پیشنهاد جدید با موفقیت ایجاد شد",
        text: "پیشنهاد شما با موفقیت ثبت شد.",
        icon: "success",
      });

      queryClient.invalidateQueries(["offs-padmin"]); // Adjust the query key as needed
    },
    onError: (err) => {
      console.error(err);
      Swal.fire({
        title: "خطا",
        text: "در ایجاد پیشنهاد مشکلی پیش آمد. لطفاً دوباره تلاش کنید.",
        icon: "error",
      });
    },
  });
  const { mutate: removeOff } = useMutation({
    mutationKey: ["remove-off"],
    mutationFn: async (courseId) => {
      await axios.delete(`http://localhost:4000/v1/offs/${courseId}`, {
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
      queryClient.invalidateQueries(["offs-padmin"]);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  function onSubmit(data) {
    if (offCourse === "-1") {
      Swal.fire({
        title: "لطفا دسته بندی مورد نظر خود را وارد کنید",
        icon: "error",
        confirmButtonText: "اوکی",
      });
    } else {
      Swal.fire({
        title: "ایجاد پیشنهاد جدید",
        text: "آیا مطمئن هستید که می‌خواهید این پیشنهاد جدید را ایجاد کنید؟",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "بله",
        cancelButtonText: "خیر",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          addNewOff({
            ...data,
            course: offCourse,
          }); // Call the addNewOff mutation
          Swal.fire({
            title: "پیشنهاد در حال ایجاد است...",
            text: "لطفاً صبر کنید.",
            icon: "info",
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading();
            },
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("عملیات لغو شد", "پیشنهاد جدید ایجاد نشد.", "info");
        }
      });
    }
  }
  function removeOffsHandler(courseId) {
    Swal.fire({
      title: "ایا برای حذف کد تخفیف مورد نظر مطمین هستید؟",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "خیر",
      confirmButtonText: "بله",
    }).then((resault) => {
      if (resault.isConfirmed) {
        removeOff(courseId);
      } else {
        Swal.fire({
          title: "عملیات حذف با موفقیت لفو شد",
          confirmButtonText: "اوکی",
          icon: "success",
        });
      }
    });
  }
  return (
    <>
      <div className="container-fluid" id="home-content">
        <div className="container">
          <div className="home-title">
            <span>افزودن جلسه جدید</span>
          </div>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-6">
              <div className="price input">
                <label className="input-title">کد تخفیف</label>
                <input
                  type="text"
                  id="code"
                  placeholder="لطفا کد تخفیف را وارد نمایید"
                  {...register("code", {
                    minLength: {
                      value: 5,
                      message: "حداقل 5 کاراکتر وارد شود", // Error message for minimum length
                    },
                    required: "نمیتواند این بخش خالی باشد",
                  })}
                />
                {errors.code && (
                  <span className="error-message text-danger">
                    {errors.code.message}
                  </span>
                )}
              </div>
            </div>

            <div className="col-6">
              <div className="price input">
                <label className="input-title">درصد تخفیف</label>
                <input
                  type="text"
                  id="percent"
                  placeholder="لطفا درصد تخفیف را وارد نمایید"
                  {...register("percent", {
                    required: "نمیتواند این بخش خالی باشد",
                  })}
                />
                {errors.percent && (
                  <span className="error-message text-danger">
                    {errors.percent.message}
                  </span>
                )}
              </div>
            </div>

            <div className="col-6">
              <div className="name input">
                <label className="input-title">حداکثر استفاده</label>
                <input
                  type="text"
                  id="max"
                  placeholder="حداکثر استفاده از کد تخفیف"
                  {...register("max", {
                    required: "نمیتواند این بخش خالی باشد",
                  })}
                />
                {errors.max && (
                  <span className="error-message text-danger">
                    {errors.max.message}
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
                  onChange={(event) => setOffCourse(event.target.value)}
                >
                  <option value="-1">دوره مدنظر را انتخاب کنید</option>
                  {courses?.map((course) => (
                    <option key={course._id} value={course._id}>
                      {course.name}
                    </option>
                  ))}
                </select>
                <span className="error-message text-danger"></span>
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
      <DataTable title="کد های تخفیف">
        <table className="table">
          <thead>
            <tr>
              <th>شناسه</th>
              <th>کد</th>
              <th>درصد</th>
              <th>حداکثر استفاده</th>
              <th>دفعات استفاده</th>
              <th>سازنده</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {offs?.map((off, index) => (
              <tr key={off._id}>
                <td>{index + 1}</td>
                <td>{off.code}</td>
                <td>{off.percent}</td>
                <td>{off.max}</td>
                <td>{off.uses}</td>
                <td>{off.creator}</td>

                <td>
                  <button
                    type="button"
                    className="btn btn-danger delete-btn"
                    onClick={() => removeOffsHandler(off._id)}
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

export default Offs;
