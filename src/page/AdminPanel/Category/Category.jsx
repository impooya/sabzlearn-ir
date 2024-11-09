import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import DataTable from "../../../components/AdminPanel/DataTable";
import "./Category.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
function Category() {
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  const queryClient = useQueryClient();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { data: categories } = useQuery({
    queryKey: ["category-panel"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:4000/v1/category");
      const data = await res.data;
      return data;
    },
  });

  const { mutate: addNewCategory } = useMutation({
    mutationKey: ["new-cat"],
    mutationFn: async (newCat) => {
      await axios.post("http://localhost:4000/v1/category", newCat, {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      });
    },
    onSuccess: () => {
      Swal.fire({
        title: "دسته بندی مورد نظر با موفقیت اضافه شد",
        icon: "success",
        confirmButtonText: "اوکی",
      });
      queryClient.invalidateQueries({
        queryKey: ["category-panel"],
      });
    },
    onError: () => {
      Swal.fire({
        title: "مشکلی پیش امد",
        icon: "error",
        confirmButtonText: "اوکی",
      });
    },
  });
  const { mutate: removeCategory } = useMutation({
    mutationKey: ["remove-category"],
    mutationFn: async (categoryId) => {
      await axios.delete(`http://localhost:4000/v1/category/${categoryId}`, {
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
        queryKey: ["category-panel"],
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });
  const { mutate: editCategory } = useMutation({
    mutationKey: ["edit-cat"],
    mutationFn: ({ categoryID, data }) => {
      return axios.put(
        `http://localhost:4000/v1/category/${categoryID}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }
      );
    },
    onSuccess: () => {
      Swal.fire({
        title: "ویرایش با موفقیت انجام شد",
        confirmButtonText: "اوکی",
      });
      queryClient.invalidateQueries({
        queryKey: ["category-panel"],
      });
    },
    onError: (err) => {
      console.log(err);
      Swal.fire({
        title: "خطا",
        text: "ویرایش ناموفق بود. لطفا دوباره تلاش کنید.",
        icon: "error",
        confirmButtonText: "اوکی",
      });
    },
  });
  function onSubmit(data) {
    addNewCategory(data);
  }
  function deleteCategoryPanel(categoryID) {
    removeCategory(categoryID);
  }

  function editCategoryHandler(categoryID) {
    Swal.fire({
      title: "عنوان و اسم دوره جدید را وارد کنید",
      html: `
        <input id="swal-input1" class="swal2-input" placeholder="عنوان" />
        <input id="swal-input2" class="swal2-input" placeholder="اسم دوره" />
      `,
      showCancelButton: true,
      confirmButtonText: "ادیت",
      cancelButtonText: "لغو",
      preConfirm: () => {
        const title = document.getElementById("swal-input1").value;
        const name = document.getElementById("swal-input2").value;
        if (!title || !name) {
          Swal.showValidationMessage("هر دو ورودی باید پر شوند");
        }
        return { title, name };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const { title, name } = result.value;
        editCategory({ categoryID, data: { title, name } }); // { title: '...', courseName: '...' }
        // Call your editCategory function here with the categoryID and the new values
        // editCategory(categoryID, result.value.title, result.value.courseName);
      }
    });
  }

  return (
    <>
      <div className="container-fluid" id="home-content">
        <div className="container">
          <div className="home-title">
            <span>افزودن دسته‌بندی جدید</span>
          </div>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-6">
              <div className="name input">
                <label className="input-title">عنوان</label>
                <input
                  placeholder="لطفا عنوان را وارد کنید..."
                  {...register("title", { required: "این فیلد الزامی است" })}
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
                <label className="input-title">اسم کوتاه</label>
                <input
                  {...register("name", {
                    required: "این فیلد الزامی است",
                    minLength: {
                      value: 10,
                      message: "حداکثر 10 کاراکتر مجاز است",
                    },
                  })}
                  placeholder="لطفا اسم کوتاه را وارد کنید..."
                />
                {errors.name && (
                  <span className="error-message text-danger">
                    {errors.name.message}
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
      </div>
      <DataTable title="دسته‌بندی‌ها">
        <table className="table">
          <thead>
            <tr>
              <th>شناسه</th>
              <th>عنوان</th>
              <th>ویرایش</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {categories?.map((category, index) => (
              <tr key={category._id}>
                <td>{index + 1}</td>
                <td>{category.title}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary edit-btn"
                    onClick={() => {
                      editCategoryHandler(category._id);
                    }}
                  >
                    ویرایش
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger delete-btn"
                    onClick={() => {
                      deleteCategoryPanel(category._id);
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

export default Category;
