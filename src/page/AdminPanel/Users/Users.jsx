import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import DataTable from "../../../components/AdminPanel/DataTable";
import axios from "axios";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup
    .string()
    .required("نام و نام خانوادگی الزامی است")
    .max(20, "حداکثر 20 کارکتر")
    .min(8, "حداقل 8 کارکتر"),

  username: yup
    .string()
    .required("یوزرنیم اجباری است")
    .max(20, "حداکثر 20 کارکتر")
    .min(8, "حداقل 8 کارکتر"),

  email: yup
    .string()
    .required("آدرس ایمیل الزامی است")
    .matches(
      /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
      "آدرس ایمیل معتبر نیست"
    ),

  phone: yup
    .string()
    .required("شماره تماس الزامی است")
    .matches(/^0(9[0-9])\d{8}$/, "شماره تماس معتبر نیست"),

  password: yup
    .string()
    .required("رمز الزامی است")
    .max(8, "رمز عبور باید حداقل 8 حرف باشد"),
});

function Users() {
  const queryClient = useQueryClient();
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      phone: "",
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const { mutate: registerNewUser } = useMutation({
    mutationKey: ["reguster-user-panel"],
    mutationFn: (userInfos) => {
      return axios.post("http://localhost:4000/v1/auth/register", userInfos);
    },
    onSuccess: () => {
      Swal.fire({
        title: "کاربر مورد نظر ثبت شد",
        icon: "success",
        confirmButtonText: "بستن",
      });
      queryClient.invalidateQueries({
        queryKey: ["users-table"],
      });
      reset();
    },
    onError: (err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "مشکلی پیش امد:(",
      });
      console.log(err);
    },
  });
  const onSubmit = (data) => {
    registerNewUser({ ...data, confirmPassword: data["password"] });
  };
  const { data: users } = useQuery({
    queryKey: ["users-table"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:4000/v1/users", {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      });
      const data = await res.data;
      return data;
    },
  });

  const { mutate: remove } = useMutation({
    mutationKey: ["remove-user"],
    mutationFn: async (userId) => {
      await axios.delete(`http://localhost:4000/v1/users/${userId}`, {
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
        queryKey: ["users-table"],
      });
    },
    onError: (err) => {
      console.log(err);
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

  function removeUser(userId) {
    Swal.fire({
      title: "ایا برای حذف کاربر مورد نظر مطمین هستید؟",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "خیر",
      confirmButtonText: "بله",
    }).then((resault) => {
      if (resault.isConfirmed) {
        remove(userId);
      } else {
        Swal.fire({
          title: "عملیات حذف با موفقیت لفو شد",
          confirmButtonText: "اوکی",
          icon: "success",
        });
      }
    });
  }
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

  return (
    <>
      <div className="home-content-edit">
        <div className="back-btn">
          <i className="fas fa-arrow-right"></i>
        </div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="col-6">
            <div className="name input">
              <label className="input-title">نام و نام خانوادگی</label>
              <input
                name="name"
                placeholder="لطفا نام و نام خانوادگی کاربر را وارد کنید..."
                {...register("name", { onChange: () => trigger("name") })}
              />
              {errors.name && (
                <span className="error-message text-danger">
                  {errors.name.message}
                </span>
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="family input">
              <label className="input-title">نام کاربری</label>
              <input
                {...register("username", {
                  onChange: () => trigger("username"),
                })}
                name="username"
                placeholder="لطفا نام کاربری را وارد کنید..."
              />

              {errors.username && (
                <span className="error-message text-danger">
                  {errors.username.message}
                </span>
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="email input">
              <label className="input-title">ایمیل</label>
              <input
                {...register("email", {
                  onChange: () => trigger("email"),
                })}
                name="email"
                placeholder="لطفا ایمیل کاربر را وارد کنید..."
              />

              {errors.email && (
                <span className="error-message text-danger">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="password input">
              <label className="input-title">رمز عبور</label>
              <input
                {...register("password", {
                  onChange: () => trigger("password"),
                })}
                name="password"
                placeholder="لطفا رمز عبور کاربر را وارد کنید..."
              />

              {errors.password && (
                <span className="error-message text-danger">
                  {errors.password.message}
                </span>
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="phone input">
              <label className="input-title">شماره تلفن</label>
              <input
                {...register("phone", {
                  onChange: () => trigger("phone"),
                })}
                name="phone"
                placeholder="لطفا شماره تلفن کاربر را وارد کنید..."
              />

              {errors.phone && (
                <span className="error-message text-danger">
                  {errors.phone.message}
                </span>
              )}
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
      <DataTable title="کاربران">
        <table className="table">
          <thead>
            <tr>
              <th>شناسه</th>

              <th>نام خانوادگی</th>
              <th>شماره</th>
              <th>ایمیل</th>
              <th>رمز عبور</th>
              <th>ویرایش</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {users?.map(
              (user, index) =>
                user.role !== "ADMIN" && (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary edit-btn"
                      >
                        ویرایش
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger delete-btn"
                        onClick={() => {
                          removeUser(user._id);
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
                          banUser(user._id);
                        }}
                      >
                        بن
                      </button>
                    </td>
                  </tr>
                )
            )}
            {/* <tr>
              <td>34223</td>
              <td>علی</td>
              <td>سعیدی</td>
              <td>09123443243</td>
              <td>ali@gmail.com</td>
              <td>ehsan1323</td>
              <td>
                <button type="button" className="btn btn-primary edit-btn">
                  ویرایش
                </button>
              </td>
              <td>
                <button type="button" className="btn btn-danger delete-btn">
                  حذف
                </button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </DataTable>
    </>
  );
}

export default Users;
