import { FaAngleDown, FaComment, FaLongArrowAltRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { singleCourseDataContext } from "../contexts/getSingleCourseData";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";

function CommentsTextArea() {
  const { data } = useContext(singleCourseDataContext);
  const authConfig = useContext(AuthContext);
  const { courseName } = useParams();
  const [newComment, setNewComment] = useState("");
  function onNewCommentHandler(event) {
    setNewComment(event.target.value);
  }
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  const { mutate: addComment } = useMutation({
    mutationKey: ["add-new-comment"],
    mutationFn: (newComment) => {
      return axios.post("http://localhost:4000/v1/comments", newComment, {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
    },
    onError: (err) => {
      console.log(err);
    },
    onSuccess: (res) => {
      console.log(res);
      Swal.fire({
        title: "ممنون از نظر شما!",
        text: "کامنت شما ثبت شد",
        icon: "success",
      });
    },
  });
  function addNewCommentHandler() {
    addComment({
      courseShortName: courseName,
      body: newComment,
      score: 5,
    });
  }

  // console.log(courseName);
  // // console.log(authConfig);
  console.log(data);

  return (
    <>
      <div className="comments mt-8 rounded-lg shadow-shade-primery py-8 px-10">
        <div className="comments__header flex items-center mb-8">
          <div className="comments__header-icon-content bg-green-primery text-white size-16 flex justify-center items-center rounded-2xl">
            <FaComment className="text-4xl" />
          </div>
          <span className="comments__header-title mr-4">نظرات</span>
        </div>
        <div className="comments__content">
          {data?.comments.length === 0 ? (
            <div
              className="flex items-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800"
              role="alert"
            >
              <svg
                className="flex-shrink-0 inline w-4 h-4 me-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="sr-only">Info</span>
              <div>کامنتی برای دوره پیدا نشد</div>
            </div>
          ) : (
            <>
              {data?.comments.map((comment, index) => (
                <div
                  key={index}
                  className="comments__item bg-[#f9fafd] rounded-2xl border border-dashed border-[#ccc] p-12 mb-12"
                >
                  <div className="comments__question">
                    <div className="comments__question-header flex justify-between">
                      <div className="comments__question-header-right flex items-center">
                        <span className="comments__question-name comment-name text-2xl font-IRANSansBold text-dark-primery">
                          {comment.creator.name}
                        </span>
                        <span className="comments__question-status comment-status flex items-center bg-green-primery text-white text-sm font-IRANSansBold py-[0.3rem] px-[0.7rem] rounded-lg my-0 mx-4">
                          {comment.creator.role === "ADMIN" ? "مدیر" : "کاربر"}
                        </span>
                        <span className="comments__question-date comment-date text-xl text-[#adb5bd]">
                          {/* {comment.createdAt.slice(0, 10)} */}
                          {comment.createdAt.slice(0, 10)}
                        </span>
                      </div>
                      <div className="comments__question-header-left">
                        <a
                          className="comments__question-header-link comment-link text-xl text-[#b1bbbf] border border-solid border-[#b1bbbf] py-1 px-3 rounded-xl bg-[#fff]"
                          href="#"
                        >
                          پاسخ
                        </a>
                      </div>
                    </div>
                    <div className="comments__question-text mt-2 ">
                      <p className="comments__question-paragraph comment-paragraph text-[1.3rem] text-[#7d7e7f]">
                        {comment.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="comments__pagantion">
                <ul className="comments__pagantion-list flex items-center justify-center">
                  <li className="comments__pagantion-item">
                    <a
                      href="#"
                      className="comments__pagantion-link rounded-lg w-7 h-7 md:w-16 md:h-16 flex justify-center items-center text-md md:text-2xl bg-[#f0f0f1] mx-2 hover:bg-white"
                    >
                      <FaLongArrowAltRight />
                    </a>
                  </li>
                  <li className="comments__pagantion-item">
                    <a
                      href="#"
                      className="comments__pagantion-link rounded-lg w-7 h-7 md:w-16 md:h-16 flex justify-center items-center text-md md:text-2xl bg-[#f0f0f1] mx-2 hover:bg-white"
                    >
                      1
                    </a>
                  </li>
                  <li className="comments__pagantion-item">
                    <a
                      href="#"
                      className="comments__pagantion-link rounded-lg w-7 h-7 md:w-16 md:h-16 flex justify-center items-center text-md md:text-2xl bg-[#f0f0f1] mx-2 hover:bg-white"
                    >
                      2
                    </a>
                  </li>
                  <li className="comments__pagantion-item rounded-lg w-7 h-7 md:w-16 md:h-16 flex justify-center items-center text-md md:text-2xl bg-[#f0f0f1] mx-2 hover:bg-white">
                    <a
                      href="#"
                      className="comments__pagantion-link comments__pagantion-link--active"
                    >
                      3
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
        {authConfig.isLoggedIn ? (
          <>
            <div className="comments__rules flex flex-col mt-14">
              <span className="comments__rules-title text-xl font-IRANSansBold text-dark-primery mb-4 ">
                قوانین ثبت دیدگاه
              </span>
              <span className="comments__rules-item flex items-start text-sm text-[#7b868a] mb-2">
                <FaCheck className="text-[#15cc79] ml-1" />
                اگر نیاز به پشتیبانی دوره دارید از قسمت پرسش سوال در قسمت نمایش
                انلاین استفاده نمایید و سوالات مربوط به رفع اشکال تایید نخواهند
                شد
              </span>
              <span className="comments__rules-item flex items-start text-sm text-[#7b868a] mb-2">
                <FaCheck className="text-[#15cc79] ml-1" />
                دیدگاه های نامرتبط به دوره تایید نخواهد شد.
              </span>
              <span className="comments__rules-item flex items-start text-sm text-[#7b868a] mb-2">
                <FaCheck className="text-[#15cc79] ml-1" />
                سوالات مرتبط با رفع اشکال در این بخش تایید نخواهد شد.
              </span>
              <span className="comments__rules-item flex items-start text-sm text-[#7b868a] mb-2">
                <FaCheck className="text-[#15cc79] ml-1" />
                از درج دیدگاه های تکراری پرهیز نمایید.
              </span>
            </div>
            <div className="comments__respond bg-[#f0f2f7] rounded-lg p-8 ">
              <div className="comments__score">
                <span className="comments__score-title text-xl text-[#6c757d]">
                  امتیاز شما
                </span>
                <div className="comments__score-input flex justify-between items-center bg-white pt-[0.6rem] pr-[0.8rem] pb-[0.6rem] pl-[2rem] my-2 mx-0 border border-solid border-[#e5e5e5] cursor-pointer text-[#7d7e7f] transition-all hover:bg-[#1e83f0] hover:text-white">
                  <span className="comments__score-input-text">
                    امتیاز خود را انتخاب کنید
                  </span>
                  <FaAngleDown />
                </div>
              </div>
              <div className="comments__respond-content">
                <div className="comments__respond-title text-[1.5rem] text-[#6c757d] mb-1">
                  دیدگاه شما *
                </div>
                <textarea
                  className="comments__score-input-respond w-full h-80 outline-none border border-solid border-[#e5e5e5] rounded-lg"
                  onChange={onNewCommentHandler}
                  value={newComment}
                ></textarea>
              </div>
              <button
                type="submit"
                onClick={addNewCommentHandler}
                className="comments__respond-btn bg-green-primery text-white text-xl border-none rounded-md py-2 px-7 mt-5"
              >
                ارسال
              </button>
            </div>
          </>
        ) : (
          <>
            <div
              className="flex items-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800"
              role="alert"
            >
              <svg
                className="flex-shrink-0 inline w-4 h-4 me-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="sr-only">Info</span>
              <div>برای دسترسی به کامنت ها باید وارد سایت شوید</div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CommentsTextArea;
