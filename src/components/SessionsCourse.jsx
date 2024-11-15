import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { FaChevronDown, FaYoutube } from "react-icons/fa";
import { singleCourseDataContext } from "../contexts/getSingleCourseData";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function SessionsCourse() {
  const { data } = useContext(singleCourseDataContext);
  return (
    <>
      <>
        <Accordion className="mt-5">
          <AccordionSummary
            expandIcon={<FaChevronDown />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h1 className="font-IRANSans">جلسات دوره</h1>
          </AccordionSummary>
          {data?.sessions.map((session, index) =>
            session.free === 1 || data?.isUserRegisteredToThisCourse ? (
              <AccordionDetails
                key={session._id}
                className="flex justify-between items-center"
              >
                <div className="introduction__accordion-right flex items-center gap-x-2 md:gap-x-0">
                  <span className="size-5 md:size-10 border border-solid text-sm md:text-lg border-[#bfbfbf] text-[#656464] flex justify-center items-center rounded-full ">
                    {index + 1}
                  </span>
                  <FaYoutube className="mx-2 text-[#939aa3] md:block hidden text-xl" />
                  <Link
                    to="/"
                    className="introduction__accordion-link text-[#161616] md:text-lg text-sm"
                  >
                    {session.title}
                  </Link>
                </div>
                <div className="introduction__accordion-left">
                  <span className="text-[#7a7a7a] hidden md:block">
                    {session.time}
                  </span>
                </div>
              </AccordionDetails>
            ) : (
              <AccordionDetails
                key={session._id}
                className="flex justify-between items-center"
              >
                <div className="introduction__accordion-right flex items-center gap-x-2 md:gap-x-0">
                  <span className="size-5 md:size-10 border border-solid text-sm md:text-lg border-[#bfbfbf] text-[#656464] flex justify-center items-center rounded-full ">
                    {index + 1}
                  </span>
                  <FaYoutube className="mx-2 text-[#939aa3] md:block hidden text-xl" />
                  <span className="introduction__accordion-link text-[#161616] md:text-lg text-sm">
                    {session.title}
                  </span>
                </div>
                <div className="introduction__accordion-left">
                  <span className="text-[#7a7a7a] hidden md:block">
                    {session.time}
                  </span>
                  <i className="fa fa-lock" />
                </div>
              </AccordionDetails>
            )
          )}
        </Accordion>
      </>
    </>
  );
}
