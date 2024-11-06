import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Contact.css";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import axios from "axios";

const schema = yup.object({
  fullName: yup
    .string()
    .required("نام و نام خانوادگی الزامی است")
    .max(20, "حداکثر 20 کاراکتر")
    .min(8, "حداقل 8 کاراکتر"),
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
  message: yup.string().required("پیام الزامی است"),
});

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const { mutate: contact } = useMutation({
    mutationKey: ["contact"],
    mutationFn: (formData) => {
      return axios.post("http://localhost:4000/v1/contact", formData);
    },
    onError: (err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "مشکلی پیش امد:(",
      });
      console.log(err);
    },
    onSuccess: () => {
      Swal.fire({
        title: "ممنون از نظر شما!",
        icon: "success",
        confirmButtonText: "بستن",
      });
      reset();
    },
  });

  const onSubmit = (data) => {
    contact({
      name: data["fullName"],
      email: data["email"],
      phone: data["phone"],
      body: data["message"],
    });
    console.log({
      name: data["fullName"],
      email: data["email"],
      phone: data["phone"],
      body: data["message"],
    });
  };

  return (
    <section className="login-register">
      <div className="login register-form">
        <span className="login__title">ارتباط با ما</span>
        <span className="login__subtitle">نظر یا انتقادتو بنویس برامون :)</span>
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <div className="login-form__username login-form__parent">
            <input
              {...register("fullName", { onChange: () => trigger("fullName") })}
              className={`login-form__username-input ${
                errors.fullName
                  ? "login-form__btn-error"
                  : "login-form__btn-success"
              }`}
              type="text"
              placeholder="نام و نام خانوادگی"
            />
            <i className="login-form__username-icon fa fa-user"></i>
            {errors.fullName && (
              <p className="error-message">{errors.fullName.message}</p>
            )}
          </div>
          <div className="login-form__password login-form__parent">
            <input
              {...register("email", { onChange: () => trigger("email") })}
              className={`login-form__password-input ${
                errors.email
                  ? "login-form__btn-error"
                  : "login-form__btn-success"
              }`}
              type="text"
              placeholder="آدرس ایمیل"
            />
            <i className="login-form__password-icon fa fa-envelope"></i>
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>
          <div className="login-form__phone-number login-form__parent">
            <input
              {...register("phone", { onChange: () => trigger("phone") })}
              className={`login-form__password-input ${
                errors.phone
                  ? "login-form__btn-error"
                  : "login-form__btn-success"
              }`}
              type="text"
              placeholder="شماره تماس"
            />
            <i className="login-form__password-icon fa fa-phone"></i>
            {errors.phone && (
              <p className="error-message">{errors.phone.message}</p>
            )}
          </div>
          <div className="login-form__text login-form__parent">
            <textarea
              {...register("message", { onChange: () => trigger("message") })}
              className={`login-form__text-input ${
                errors.message
                  ? "login-form__btn-error"
                  : "login-form__btn-success"
              }`}
              placeholder="متن خود را وارد کنید"
            />
            {errors.message && (
              <p className="error-message">{errors.message.message}</p>
            )}
          </div>
          <input
            type="submit"
            value="ارسال"
            className="login-form__btn-success login-form__btn-text"
          />
        </form>
      </div>
    </section>
  );
}

export default Contact;
