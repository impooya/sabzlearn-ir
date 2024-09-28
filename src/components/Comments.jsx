function Comments() {
  return (
    <>
      <div className="flex flex-col ">
        <span className="text-dark-primery text-lg">دیدگاهتان را بنویسید</span>
        <span className="my-5 mx-0 text-xl">
          <a
            href="#"
            className="hover:text-[#1e83f0] transition-all duration-300 delay-100 ease-in-out"
          >
            با عنوان محمدامین سعیدی راد وارد شده اید.
          </a>
          <a
            href="#"
            className="hover:text-[#1e83f0] transition-all duration-300 delay-100 ease-in-out"
          >
            خارج میشوید?
          </a>
          بخش های موردنیاز علامت گذاری شده اند *
        </span>
        <div className="flex flex-col">
          <span className="text-xl text-[#6c757d]">دیدگاه *</span>
          <textarea className="h-[18.5rem] rounded-lg border border-solid border-[#dcdcdc] shadow-shade-primery"></textarea>
        </div>
        <button
          type="submit"
          className="mt-8 max-w-[15rem] py-2 px-4 bg-green-primery text-white border-none rounded-lg text-xl mb-12"
        >
          فرستادن دیدگاه
        </button>
      </div>
    </>
  );
}

export default Comments;
