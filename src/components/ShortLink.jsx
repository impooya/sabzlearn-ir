import { FaLink } from "react-icons/fa";
function ShortLink() {
  return (
    <>
      <div className="shadow-[0_0_13px_1px_rgba(70,72,77,0.08)] border mt-3 lg:mt-3  p-5 rounded-lg border-solid border-[#f2f2f2]">
        <div className=" flex items-center text-[#7b868a]">
          <FaLink className="text-sm lg:text-xl" />
          <span className="text-sm lg:text-lg mr-1">لینک کوتاه</span>
        </div>
        <span className="block my-3 border border-solid border-[#dcdcdc] text-[#a7a7a7] rounded-lg py-2 px-3 lg:text-xl">
          https://sabzlearn.ir/?p=117472
        </span>
      </div>
    </>
  );
}

export default ShortLink;
