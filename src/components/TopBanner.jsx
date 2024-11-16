import { FaGraduationCap } from "react-icons/fa";
import { singleCourseDataContext } from "../contexts/getSingleCourseData";
import { useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import axios from "axios";
function TopBanner() {
  const getSingleCourseDataConfig = useContext(singleCourseDataContext);
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  const { mutate: registerNewCourse } = useMutation({
    mutationKey: ["register-to-course"],
    mutationFn: ({ courseId, price }) => {
      return axios.post(
        `http://localhost:4000/v1/courses/${courseId}/register`,
        { price },
        {
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }
      );
    },
    onSuccess: (res) => {
      getSingleCourseDataConfig.fetchSingleCourseData();
      console.log(res);
      Swal.fire({
        icon: "success",
        title: "موفقیت",
        text: "ثبت نام با موفقیت انجام شد!",
      });
    },
    onError: (err) => {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "خطا",
        text: "ثبت نام با خطا مواجه شد. لطفا دوباره تلاش کنید.",
      });
    },
  });
  const { mutate: addCode } = useMutation({
    mutationKey: ["add-cod-off"],
    mutationFn: ({ code, courseId }) => {
      return axios.post(
        `http://localhost:4000/v1/offs/${code}`,
        {
          course: courseId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }
      );
    },
    onError: (err) => {
      console.log(err);
      if (err.response.status === 404) {
        Swal.fire({
          title: "کد تخفیف معتبر نیست",
          icon: "error",
          confirmButtonText: "ای بابا",
        });
      } else if (err.response.status === 409) {
        Swal.fire({
          title: "کد تخفیف قبلا استفاده شده :/",
          icon: "error",
          confirmButtonText: "ای بابا",
        });
      }
    },
    onSuccess: (res) => {
      const price =
        getSingleCourseDataConfig.data?.price -
        (getSingleCourseDataConfig.data?.price * res.data?.percent) / 100;
      const courseId = getSingleCourseDataConfig.data?._id;

      registerNewCourse({
        courseId,
        price,
      });
    },
  });

  function registerNewCourseHandler(courseId) {
    const price = {
      price: getSingleCourseDataConfig.data?.price,
    };

    if (getSingleCourseDataConfig.data?.price === 0) {
      Swal.fire({
        title: "ثبت نام در دوره",
        text: "آیا مطمئن هستید که می‌خواهید در این دوره ثبت نام کنید؟",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "بله",
        cancelButtonText: "خیر",
      }).then((result) => {
        if (result.isConfirmed) {
          registerNewCourse({ courseId, price });
        }
      });
    } else {
      Swal.fire({
        title: "آیا از ثبت نام در دوره اطمینان دارید؟",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "نه",
        confirmButtonText: "بله",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "در صورت داشتن کد تخفیف وارد کنید:",
            inputAutoTrim: true,
            input: "text",
            showCancelButton: true,
            cancelButtonText: "ثبت نام بدون تخفیف",
            confirmButtonText: "اعمال کد تخفیف",
            inputValidator: (value) => {
              return !value && "لطفا کد تخفیف را وارد کنید";
            },
          }).then((resault) => {
            if (resault.isConfirmed) {
              const code = resault.value;
              addCode({ code, courseId });
            }
          });
        }
      });
    }
  }
  return (
    <>
      <div className="shadow-[0_0_13px_1px_rgba(70,72,77,0.08)] border  lg:mt-3  p-5 rounded-lg border-solid border-[#f2f2f2]">
        <div className="course-info__register text-center bg-[#1fbd50] py-2 lg:py-3 px-2 rounded-lg shadow-[0_2px_12px_rgba(31,189,80,36%)]">
          <span className="course-info__register-title text-sm lg:text-xl text-white font-IRANSansBold flex justify-center items-center gap-x-2">
            {getSingleCourseDataConfig.data?.isUserRegisteredToThisCourse ? (
              <>
                <FaGraduationCap className="text-sm lg:text-2xl" />
                دانشجوی دوره هستید
              </>
            ) : (
              <span
                onClick={() => {
                  registerNewCourseHandler(getSingleCourseDataConfig.data?._id);
                }}
              >
                ثبت نام در دوره
              </span>
            )}
          </span>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
