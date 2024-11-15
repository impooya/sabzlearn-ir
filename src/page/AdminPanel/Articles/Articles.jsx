import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import DataTable from "../../../components/AdminPanel/DataTable";
import Swal from "sweetalert2";
import Editor from "../../../components/Editor";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Articles() {
  const queryClient = useQueryClient();
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  const [articleCategory, setArticleCategory] = useState("-1");
  const [articleBody, setArticleBody] = useState("");
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const { data: categories } = useQuery({
    queryKey: ["category-panel"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:4000/v1/category");
      const data = await res.data;
      return data;
    },
  });
  const { data: articles } = useQuery({
    queryKey: ["article-panel"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:4000/v1/articles");
      const data = await res.data;
      return data;
    },
  });

  const { mutate: removeArticle } = useMutation({
    mutationKey: ["remove-article"],
    mutationFn: async (articleId) => {
      await axios.delete(`http://localhost:4000/v1/articles/${articleId}`, {
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
        queryKey: ["article-panel"],
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const { mutate: addNewArticle } = useMutation({
    mutationKey: ["add-new-article"],
    mutationFn: (newArticle) => {
      const formData = new FormData();
      formData.append("cover", newArticle.cover);
      formData.append("title", newArticle.title);
      formData.append("description", newArticle.description);
      formData.append("body", newArticle.body);
      formData.append("shortName", newArticle.shortName);
      formData.append("categoryID", newArticle.categoryID);

      return axios.post("http://localhost:4000/v1/articles", formData, {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      });
    },

    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "اضافه شدن مقاله با موفقیت انجام شد",
        confirmButtonText: "اوکی",
      });
      queryClient.refetchQueries(["article-panel"]);
      reset();
    },

    onError: (err) => {
      console.log(err);
    },
  });

  function removeArticleHandler(articleId) {
    Swal.fire({
      title: "ایا برای حذف مقاله مورد نظر مطمین هستید؟",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "خیر",
      confirmButtonText: "بله",
    }).then((resault) => {
      if (resault.isConfirmed) {
        removeArticle(articleId);
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
    if (articleCategory === "-1") {
      Swal.fire({
        title: "لطفا دسته بندی مورد نظر خود را وارد کنید",
        icon: "error",
        confirmButtonText: "اوکی",
      });
    } else {
      addNewArticle({
        ...data,
        categoryID: articleCategory,
        body: articleBody,
        cover: data["cover"][0],
      });
    }
  }
  return (
    <>
      {/* <Editor /> */}
      <div className="container-fluid" id="home-content">
        <div className="container">
          <div className="home-title">
            <span>افزودن مقاله جدید</span>
          </div>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-6">
              <div className="name input">
                <label className="input-title" style={{ display: "block" }}>
                  عنوان
                </label>
                <input
                  type="text"
                  id="title"
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
                <label className="input-title" style={{ display: "block" }}>
                  لینک
                </label>
                <input
                  type="text"
                  id="shortName"
                  {...register("shortName", {
                    minLength: {
                      value: 8,
                      message: "حداقل 8 کاراکتر وارد شود", // Error message for minimum length
                    },
                    required: "نمیتواند این بخش خالی باشد",
                  })}
                />
                {errors.shortName && (
                  <span className="error-message text-danger">
                    {errors.shortName.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-12">
              <div className="name input">
                <label className="input-title" style={{ display: "block" }}>
                  چکیده
                </label>
                <textarea
                  style={{
                    width: "100%",
                    height: "200px",
                    backgroundColor: "#eee",
                  }}
                  {...register("description", {
                    minLength: {
                      value: 8,
                      message: "حداقل 8 کاراکتر وارد شود", // Error message for minimum length
                    },
                    required: "نمیتواند این بخش خالی باشد",
                  })}
                ></textarea>

                {errors.description && (
                  <span className="error-message text-danger">
                    {errors.description.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-12">
              <div className="name input">
                <label className="input-title" style={{ display: "block" }}>
                  متن مقاله
                </label>
                <Editor value={articleBody} setValue={setArticleBody} />
              </div>
            </div>
            <div className="col-6">
              <div className="name input">
                <label className="input-title" style={{ display: "block" }}>
                  کاور
                </label>
                <input
                  type="file"
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
            <div className="col-6">
              <div className="name input">
                <label className="input-title" style={{ display: "block" }}>
                  دسته بندی
                </label>
                <select
                  onChange={(event) => setArticleCategory(event.target.value)}
                >
                  <option value="-1">دسته بندی مقاله را انتخاب کنید،</option>
                  {categories?.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.title}
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
      <DataTable title="مقاله‌ها">
        <table className="table">
          <thead>
            <tr>
              <th>شناسه</th>
              <th>عنوان</th>
              <th>لینک</th>
              <th>نویسنده</th>
              <th>ویرایش</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {articles?.map((article, index) => (
              <tr key={article._id}>
                <td>{index + 1}</td>
                <td>{article.title}</td>
                <td>{article.shortName}</td>
                <td>{article.creator.name}</td>
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
                      removeArticleHandler(article._id);
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

export default Articles;
