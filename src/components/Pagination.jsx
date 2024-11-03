/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";

function Pagination({ items, itemsCount, pathname, setShownCourses }) {
  const [pageCount, setPageCount] = useState(1);
  const { page } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const currentPage = Number(page) || 1;
    const endIndex = itemsCount * currentPage;
    const startIndex = endIndex - itemsCount;

    if (items) {
      const paginatedItems = items.slice(startIndex, endIndex);
      setShownCourses(paginatedItems);
    }

    setPageCount(Math.ceil(items.length / itemsCount));
  }, [page, items, itemsCount, setShownCourses]);

  useEffect(() => {
    if (Number(page) > pageCount) {
      navigate("/courses/1");
    }
  }, [page, pageCount, navigate]);

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [page]);

  const nextPage = () => Number(page) < pageCount;
  const prevPage = () => Number(page) > 1;

  const pageNumbers = Array.from({ length: pageCount }, (_, index) => ({
    id: index,
    page: index + 1,
  }));

  return (
    <div className="my-12">
      <ul className="flex items-center justify-center">
        <li className="courses__pagination-item">
          {prevPage() && (
            <Link
              to={`/courses/${Number(page) - 1}`}
              className="rounded-lg w-7 h-7 md:w-16 md:h-16 flex justify-center items-center text-md md:text-2xl bg-[#f0f0f1] mx-2 hover:bg-green-primery hover:text-white transition-all"
            >
              <FaLongArrowAltRight />
            </Link>
          )}
        </li>

        {pageNumbers.map((count) => (
          <li className="courses__pagination-item" key={count.id}>
            <Link
              to={`/courses/${count.page}`}
              className={`rounded-lg w-7 h-7 md:w-16 md:h-16 flex justify-center items-center text-md md:text-2xl bg-[#f0f0f1] mx-2 hover:bg-green-primery hover:text-white transition-all ${
                Number(page) === count.page ? "bg-green-primery text-white" : ""
              }`}
            >
              {count.page}
            </Link>
          </li>
        ))}

        <li className="courses__pagination-item">
          {nextPage() && (
            <Link
              to={`/courses/${Number(page) + 1}`}
              className="rounded-lg w-7 h-7 md:w-16 md:h-16 flex justify-center items-center text-md md:text-2xl bg-[#f0f0f1] mx-2 hover:bg-green-primery hover:text-white transition-all"
            >
              <FaLongArrowAltLeft />
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
