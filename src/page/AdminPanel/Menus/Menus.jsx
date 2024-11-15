import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import DataTable from "../../../components/AdminPanel/DataTable";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

function Menus() {
  const queryClient = useQueryClient();
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { data: menus } = useQuery({
    queryKey: ["admin-menus"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:4000/v1/menus/all");
      const data = await res.data;
      return data;
    },
  });
  const { mutate: removeMenus } = useMutation({
    mutationKey: ["remove-menu"],
    mutationFn: async (menuId) => {
      const deleteRes = await axios.delete(
        `http://localhost:4000/v1/menus/${menuId}`,
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
        queryKey: ["admin-menus"],
      });
    },
    onError: (err) => {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "خطا",
        text:
          err.response?.data?.message ||
          "حذف ناموفق بود. لطفا دوباره تلاش کنید.",
        confirmButtonText: "اوکی",
      });
    },
  });
  const { mutate: addNewMenu } = useMutation({
    mutationKey: ["add-new-menu"],
    mutationFn: (newMenu) => {
      return axios.post("http://localhost:4000/v1/menus/", newMenu, {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      });
    },
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "منوی جدید با موفقیت اضافه شد",
        confirmButtonText: "اوکی",
      });
      queryClient.invalidateQueries({
        queryKey: ["admin-menus"],
      });
    },
    onError: (err) => {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "خطا",
        text: "اضافه کردن منو ناموفق بود. لطفا دوباره تلاش کنید.",
        confirmButtonText: "اوکی",
      });
    },
  });

  function removeMenuHandler(menuId) {
    Swal.fire({
      title: "ایا برای حذف منو مورد نظر مطمین هستید؟",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "خیر",
      confirmButtonText: "بله",
    }).then((resault) => {
      if (resault.isConfirmed) {
        removeMenus(menuId);
      } else {
        Swal.fire({
          title: "عملیات حذف با موفقیت لفو شد",
          confirmButtonText: "اوکی",
          icon: "success",
        });
      }
    });
  }

  function onSubmit(data) {
    addNewMenu(data);
    reset();
  }
  return (
    <>
      <div className="container">
        <div className="home-title">
          <span>افزودن کاربر جدید</span>
        </div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="col-6">
            <div className="name input">
              <label className="input-title">عنوان</label>
              <input
                id="title"
                type="text"
                placeholder="لطفا عنوان را وارد کنید..."
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
            <div className="name input">
              <label className="input-title">لینک</label>
              <input
                id="href"
                type="text"
                placeholder="لطفا لینک را وارد کنید..."
                {...register("href", {
                  minLength: {
                    value: 8,
                    message: "حداقل 8 کاراکتر وارد شود", // Error message for minimum length
                  },
                  required: "نمیتواند این بخش خالی باشد",
                })}
              />
              {errors.href && (
                <span className="error-message text-danger">
                  {errors.href.message}
                </span>
              )}
            </div>
          </div>
          {/* <div className="col-6">
            <div className="name input">
              <label className="input-title">عنوان</label>
              <select
                className="select"
                onChange={(event) => setMenuParent(event.target.value)}
              >
                <option value="-1">منوی اصلی را انتخاب کنید</option>
                {menus.map((menu) => (
                  <>
                    {!Boolean(menu.parent) && (
                      <option value={menu._id}>{menu.title}</option>
                    )}
                  </>
                ))}
              </select>
              <span className="error-message text-danger"></span>
            </div>
          </div> */}
          <div className="col-12">
            <div className="bottom-form">
              <div className="submit-btn">
                <input type="submit" value="افزودن" />
              </div>
            </div>
          </div>
        </form>
      </div>
      <DataTable title="منوها">
        <table className="table">
          <thead>
            <tr>
              <th>شناسه</th>
              <th>عنوان</th>
              <th>مقصد</th>
              <th>فرزند ...</th>
              <th>ویرایش</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {menus?.map((menu, index) => (
              <tr key={menu._id}>
                <td>{index + 1}</td>
                <td>{menu.title}</td>
                <td>{menu.href}</td>
                <td>
                  {menu.parent ? (
                    menu.parent.title
                  ) : (
                    <i className="fa fa-check"></i>
                  )}
                </td>
                <td>
                  <button type="button" className="btn btn-primary edit-btn">
                    ویرایش
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger delete-btn"
                    onClick={() => {
                      removeMenuHandler(menu._id);
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

export default Menus;
