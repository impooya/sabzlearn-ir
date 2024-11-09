import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import DataTable from "../../../components/AdminPanel/DataTable";
import axios from "axios";
import Swal from "sweetalert2";
import "./Courses.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
function Courses() {
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  const queryClient = useQueryClient();
  const [courseCategory, setCourseCategory] = useState("");
  const [courseStatus, setCourseStatus] = useState("start");

  const {
    handleSubmit,
    register,
    formState: { errors },
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
  const { data: categories } = useQuery({
    queryKey: ["category-panel"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:4000/v1/category");
      const data = await res.data;
      return data;
    },
  });

  const selectCategory = (event) => {
    setCourseCategory(event.target.value);
  };

  const { mutate: removeCourses } = useMutation({
    mutationKey: ["remove-course"],
    mutationFn: async (courseId) => {
      await axios.delete(`http://localhost:4000/v1/courses/${courseId}`, {
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
        queryKey: ["courses-padmin"],
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const { mutate: addNewCourse } = useMutation({
    mutationKey: ["new-course"],
    mutationFn: (newCourse) => {
      const formData = new FormData();
      formData.append("name", newCourse.name);
      formData.append("description", newCourse.description);
      formData.append("shortName", newCourse.shortName);
      formData.append("price", newCourse.price);
      formData.append("categoryID", newCourse.categoryID);
      formData.append("status", newCourse.status);
      formData.append("cover", newCourse.cover); // Attach the file itself

      return axios.post("http://localhost:4000/v1/courses", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Ensure correct content type for file upload
          Authorization: `Bearer ${localStorageData.token}`,
        },
      });
    },
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "اضافه شدن دوره با موفقیت انجام شد",
        confirmButtonText: "اوکی",
      });
      queryClient.invalidateQueries({
        queryKey: ["courses-padmin"],
      });
    },

    onError: (err) => {
      console.log(err);
    },
  });
  function onSubmit(data) {
    addNewCourse({
      ...data,
      cover: data["cover"][0],
      categoryID: courseCategory,
      status: courseStatus,
    });
    // addNewCourse({...data, data[]})
  }

  function removeCoursesHandler(courseId) {
    Swal.fire({
      title: "ایا برای حذف دوره مورد نظر مطمین هستید؟",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "خیر",
      confirmButtonText: "بله",
    }).then((resault) => {
      if (resault.isConfirmed) {
        removeCourses(courseId);
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
            <span>افزودن محصول جدید</span>
          </div>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-6">
              <div className="name input">
                <label className="input-title">نام دوره</label>
                <input
                  {...register("name", {
                    minLength: {
                      value: 8,
                      message: "حداقل 8 کاراکتر وارد شود", // Error message for minimum length
                    },
                    required: "نمیتواند این بخش خالی باشد",
                  })}
                  type="text"
                  placeholder="لطفا نام دوره را وارد کنید..." // Placeholder text
                />
                {errors.name && (
                  <span className="error-message text-danger">
                    {errors.name.message}
                  </span>
                )}
              </div>
            </div>

            <div className="col-6">
              <div className="name input">
                <label className="input-title">توضیحات دوره</label>
                <input
                  type="text"
                  {...register("description", {
                    minLength: {
                      value: 8,
                      message: "حداقل 8 کاراکتر وارد شود", // Error message for minimum length
                    },
                    required: "نمیتواند این بخش خالی باشد",
                  })}
                  placeholder="لطفا توضیحات دوره را وارد کنید..."
                />
                {errors.description && (
                  <span className="error-message text-danger">
                    {errors.description.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="name input">
                <label className="input-title">URL دوره</label>
                <input
                  {...register("shortName", {
                    minLength: {
                      value: 8,
                      message: "حداقل 8 کاراکتر وارد شود", // Error message for minimum length
                    },
                    required: "نمیتواند این بخش خالی باشد",
                  })}
                  type="text"
                  placeholder="لطفا Url دوره را وارد کنید..."
                />
                {errors.shortName && (
                  <span className="error-message text-danger">
                    {errors.shortName.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="price input">
                <label className="input-title">قیمت دوره</label>
                <input
                  type="text"
                  {...register("price", {
                    valueAsNumber: true,
                    minLength: {
                      value: 8,
                      message: "حداقل 8 کاراکتر وارد شود", // Error message for minimum length
                    },
                    required: "نمیتواند این بخش خالی باشد",
                  })}
                  placeholder="لطفا قیمت دوره را وارد کنید..."
                />
                {errors.price && (
                  <span className="error-message text-danger">
                    {errors.price.message}
                  </span>
                )}
              </div>
            </div>

            <div className="col-6">
              <div className="number input">
                <label className="input-title">دسته‌بندی دوره</label>
                <select onChange={selectCategory}>
                  {categories?.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-6">
              <div className="file">
                <label className="input-title">عکس محصول</label>
                <input
                  type="file"
                  id="file"
                  {...register("cover", {
                    required: "وارد کردن  عکس الزامیست",
                  })}
                />
                {errors.cover && (
                  <span className="error-message text-danger">
                    {errors.cover.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-12">
              <div className="bottom-form">
                <div className="col-6">
                  <div className="presell">
                    <label className="input-title">وضعیت دوره</label>
                    <div className="radios">
                      <div className="presell-true">
                        <label>
                          <span>پیش فروش</span>
                          <input
                            type="radio"
                            value="start"
                            name="start"
                            onChange={(event) => {
                              setCourseStatus(event.target.value);
                            }}
                            checked={courseStatus === "start"}
                          />
                        </label>
                      </div>
                      <div className="presell-false">
                        <label>
                          <span>در حال برگزاری</span>
                          <input
                            type="radio"
                            value="presell"
                            name="presell"
                            onChange={(event) => {
                              setCourseStatus(event.target.value);
                            }}
                            checked={courseStatus === "presell"}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submit-btn">
                  <input type="submit" value="افزودن" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <DataTable title={"دوره ها"}>
        <table className="table">
          <thead>
            <tr>
              <th>شناسه</th>
              <th>عنوان</th>
              <th>مبلغ</th>
              <th>وضعیت</th>
              <th>لینک</th>
              <th>مدرس</th>
              <th>دسته بندی</th>
              <th>ویرایش</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {courses?.map((course, index) => (
              <tr key={course._id}>
                <td>{index + 1}</td>
                <td>{course.name}</td>
                <td>
                  {course.price === 0
                    ? "رایگان"
                    : course.price.toLocaleString()}
                </td>
                <td>
                  {course.isComplete === 0 ? "در حال برگزاری" : "تکمیل شده"}
                </td>
                <td>{course.shortName}</td>
                <td>{course.creator}</td>
                <td>{course.categoryID.title}</td>
                <td>
                  <button type="button" className="btn btn-primary edit-btn">
                    ویرایش
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger delete-btn"
                    onClick={() => removeCoursesHandler(course._id)}
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

export default Courses;
