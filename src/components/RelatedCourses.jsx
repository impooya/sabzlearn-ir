function RelatedCourses() {
  return (
    <>
      <div className="shadow-[0_0_13px_1px_rgba(70,72,77,0.08)] border mt-3 p-5 rounded-lg border-solid border-[#f2f2f2]">
        <span className="text-xl block text-dark-primery mb-5">
          دوره های مرتبط
        </span>
        <ul className="flex flex-col justify-center items-start">
          <li className="mb-6">
            <a href="#" className="flex items-center">
              <img
                src="/images/courses/js_project.png"
                alt="Course Cover"
                className="w-20 rounded-lg"
              />
              <span className="text-sm mr-4 text-[#8d8d8d] font-IRANSansBold">
                پروژه های تخصصی با جاوا اسکریپت
              </span>
            </a>
          </li>
          <li className="mb-6">
            <a href="#" className="flex items-center">
              <img
                src="/images/courses/fareelancer.png"
                alt="Course Cover"
                className="w-20 rounded-lg"
              />
              <span className="text-sm mr-4 text-[#8d8d8d] font-IRANSansBold">
                تعیین قیمت پروژه های فریلنسری
              </span>
            </a>
          </li>
          <li className="mb-6">
            <a href="#" className="flex items-center">
              <img
                src="/images/courses/nodejs.png"
                alt="Course Cover"
                className="w-20 rounded-lg"
              />
              <span className="text-sm mr-4 text-[#8d8d8d] font-IRANSansBold">
                دوره Api نویسی
              </span>
            </a>
          </li>
          <li className="mb-6">
            <a href="#" className="flex items-center">
              <img
                src="/images/courses/jango.png"
                alt="Course Cover"
                className="w-20 rounded-lg"
              />
              <span className="text-sm mr-4 text-[#8d8d8d] font-IRANSansBold">
                متخصص جنگو
              </span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default RelatedCourses;
