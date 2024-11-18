import { useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/authContext";
import "./EditAccount.css";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";

export default function EditAccount() {
  const authContext = useContext(AuthContext);
  const { mutate: editUserFromUPanel } = useMutation({
    mutationKey: ["edit-user-panel"],
    mutationFn: (newInfo) => {
      return axios.put("http://localhost:4000/v1/users", newInfo, {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).token
          }`,
        },
      });
    },
    onError: () => {
      Swal.fire({
        icon: "error",
        title: "خطا",
        text: "خطایی رخ داد. لطفاً دوباره امتحان کنید.",
        confirmButtonText: "باشه",
      });
    },
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "موفقیت‌آمیز!",
        text: "اطلاعات با موفقیت ذخیره شد.",
        confirmButtonText: "باشه",
      });
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  useEffect(() => {
    if (authContext.userInfos) {
      reset({
        name: authContext.userInfos?.name,
        phone: authContext.userInfos?.phone,
        username: authContext.userInfos?.username,
        email: authContext.userInfos?.email,
      });
    }
  }, [authContext.userInfos, reset]);

  function onSubmit(data) {
    editUserFromUPanel(data);
  }

  return (
    <>
      <div className="col-9">
        <div className="edit">
          <form
            className="edit__form"
            action="#"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="edit__personal">
              <div className="row">
                <div className="col-12">
                  <label className="edit__label">شماره موبایل *</label>
                  <input
                    className="edit__input"
                    type="text"
                    placeholder="لطفا شماره موبایل خود را وارد کنید"
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "این فیلد نمیتواند خالی باشد",
                      },
                      pattern: {
                        value: /^09\d{9}$/,
                        message: "لطفاً یک شماره موبایل معتبر وارد کنید",
                      },
                      minLength: {
                        value: 11,
                        message: "شماره موبایل باید 11 رقم باشد",
                      },
                      maxLength: {
                        value: 11,
                        message: "شماره موبایل باید 11 رقم باشد",
                      },
                    })}
                  />
                  {errors.phone && (
                    <span className="text-danger">{errors.phone.message}</span>
                  )}
                </div>

                <div className="col-12">
                  <label className="edit__label">نام و نام خانوادگی *</label>
                  <input
                    className="edit__input"
                    type="text"
                    placeholder="لطفا نام نمایشی خود را وارد کنید"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "این فیلد نمیتواند خالی باشد",
                      },
                      minLength: {
                        value: 5,
                        message: "متن نباید کمتر از 5 کارکتر باشد",
                      },
                    })}
                  />
                  {errors.name && (
                    <span className="text-danger">{errors.name.message}</span>
                  )}
                </div>
                <div className="col-12">
                  <label className="edit__label">نام کاربری (نمایشی) *</label>
                  <input
                    className="edit__input"
                    type="text"
                    placeholder="لطفا نام نمایشی خود را وارد کنید"
                    {...register("username", {
                      required: {
                        value: true,
                        message: "این فیلد نمیتواند خالی باشد",
                      },
                      minLength: {
                        value: 5,
                        message: "متن نباید کمتر از 5 کارکتر باشد",
                      },
                    })}
                  />
                  {errors.username && (
                    <span className="text-danger">
                      {errors.username.message}
                    </span>
                  )}
                  <span className="edit__help">
                    اسم شما به این صورت در حساب کاربری و نظرات دیده خواهد شد.
                  </span>
                </div>
                <div className="col-12">
                  <label className="edit__label">آدرس ایمیل *</label>
                  <input
                    className="edit__input"
                    type="text"
                    placeholder="لطفا نام نمایشی خود را وارد کنید"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "این فیلد نمیتواند خالی باشد",
                      },
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "لطفا یک آدرس ایمیل معتبر وارد کنید",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-danger">{errors.email.message}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="edit__password">
              <span className="edit__password-title">تغییر گذرواژه</span>
              <div className="row">
                <div className="col-12">
                  <label className="edit__label">تکرار گذرواژه جدید</label>
                  <input
                    className="edit__input"
                    type="text"
                    placeholder="تکرار گذرواژه جدید"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "این فیلد نمیتواند خالی باشد",
                      },
                      minLength: {
                        value: 6,
                        message: "گذرواژه باید حداقل 6 کاراکتر باشد",
                      },
                    })}
                  />
                  {errors.password && (
                    <span className="text-danger">
                      {errors.password.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <button className="edit__btn" type="submit">
              ذخیره تغییرات
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
