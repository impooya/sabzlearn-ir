import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
function RelatedCourses() {
  const { courseName } = useParams();
  const { data: relatedCourses } = useQuery({
    queryKey: ["related-courses"],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:4000/v1/courses/related/${courseName}`
      );
      const data = await res.data;
      return data;
    },
  });
  return (
    <>
      <div className="shadow-[0_0_13px_1px_rgba(70,72,77,0.08)] border mt-3 lg:mt-3  p-5 rounded-lg border-solid border-[#f2f2f2]">
        <span className="text-sm lg:text-xl block text-dark-primery mb-5">
          دوره های مرتبط
        </span>
        <ul className="flex flex-col justify-center items-start">
          {relatedCourses?.length !== 0 &&
            relatedCourses?.map((course) => (
              <li className="mb-4 lg:mb-6" key={course._id}>
                <Link
                  to={`/course-info/${course.shortName}`}
                  className="flex items-center"
                >
                  <img
                    src={`http://localhost:4000/courses/covers/${course.cover}`}
                    alt="Course Cover"
                    className="w-16 lg:w-20 rounded-lg"
                  />
                  <span className="text-xs lg:text-sm mr-2 lg:mr-4 text-[#8d8d8d] font-IRANSansBold">
                    {course.name}
                  </span>
                </Link>
              </li>
            ))}

          {/* <li className="mb-4 lg:mb-6">
            <a href="#" className="flex items-center">
              <img
                src="/images/courses/fareelancer.png"
                alt="Course Cover"
                className="w-16 lg:w-20 rounded-lg"
              />
              <span className="text-xs lg:text-sm mr-2 lg:mr-4 text-[#8d8d8d] font-IRANSansBold">
                تعیین قیمت پروژه های فریلنسری
              </span>
            </a>
          </li>
          <li className="mb-4 lg:mb-6">
            <a href="#" className="flex items-center">
              <img
                src="/images/courses/nodejs.png"
                alt="Course Cover"
                className="w-16 lg:w-20 rounded-lg"
              />
              <span className="text-xs lg:text-sm mr-2 lg:mr-4 text-[#8d8d8d] font-IRANSansBold">
                دوره Api نویسی
              </span>
            </a>
          </li>
          <li className="mb-4 lg:mb-6">
            <a href="#" className="flex items-center">
              <img
                src="/images/courses/jango.png"
                alt="Course Cover"
                className="w-16 lg:w-20 rounded-lg"
              />
              <span className="text-xs lg:text-sm mr-2 lg:mr-4 text-[#8d8d8d] font-IRANSansBold">
                متخصص جنگو
              </span>
            </a>
          </li> */}
        </ul>
      </div>
    </>
  );
}

export default RelatedCourses;
