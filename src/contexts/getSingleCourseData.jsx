import { createContext, useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";

const singleCourseDataContext = createContext();

function GetSingleCourseDataProvider({ children }) {
  const [courseName, setCourseName] = useState("");
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [localIranTime, setLocalIranTime] = useState("");

  // Ref to keep track of the previous course name
  const prevCourseNameRef = useRef(courseName);

  const fetchSingleCourseData = useCallback(async () => {
    if (!courseName || courseName === prevCourseNameRef.current) return; // Don't fetch if courseName is empty or hasn't changed

    setLoading(true);
    setIsError(false);

    try {
      const localStorageData = JSON.parse(localStorage.getItem("user"));
      const res = await axios.get(
        `http://localhost:4000/v1/courses/${courseName}`,
        {
          headers: {
            Authorization: `Bearer ${
              localStorageData === null ? null : localStorageData.token
            }`,
          },
        }
      );
      setData(res.data);

      // Convert updatedAt to local Iran time
      const utcDate = new Date(res.data.updatedAt);
      const options = {
        timeZone: "Asia/Tehran",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const formattedTime = utcDate.toLocaleString("fa-IR", options);
      setLocalIranTime(formattedTime);
    } catch (error) {
      setIsError(true);
      console.error("Error fetching course data:", error);
    } finally {
      setLoading(false);
    }
  }, [courseName]);
  useEffect(() => {
    fetchSingleCourseData();
    prevCourseNameRef.current = courseName; // Update the ref to the current course name
  }, [courseName, fetchSingleCourseData]); // Dependency array includes courseName

  // Conditional rendering based on loading and error states
  if (loading) {
    return <div>Loading...</div>; // You can customize this loading indicator
  }

  if (isError) {
    return <div>Error fetching course data. Please try again.</div>; // Customize error message
  }

  // Render children only when data is successfully fetched
  return (
    <singleCourseDataContext.Provider
      value={{
        setCourseName,
        data,
        isError,
        localIranTime,
        fetchSingleCourseData,
      }}
    >
      {children}
    </singleCourseDataContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export { GetSingleCourseDataProvider, singleCourseDataContext };
