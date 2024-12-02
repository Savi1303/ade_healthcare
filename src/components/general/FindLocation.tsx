import { BiPlusCircle } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";

const FindLocation = () => {
  return (
    // Location Section
    <div className="flex items-center bg-white space-x-5 px-4 sm:px-6 md:px-8 py-2 border rounded-tr-full rounded-br-full max-w-xs sm:max-w-md lg:max-w-lg">
      <BiPlusCircle size={40} className="hidden md:flex bg-[#2e1635] rounded-full border font-2xl p-2" />

      <div>
        <span className="font-extrabold text-xs sm:text-sm md:text-base text-gray-800">
          FIND A LOCATION NEARBY
        </span>

        <p className="text-xs sm:text-sm font-thin md:text-base max-w-xs text-gray-600 line-clamp-1 md:line-clamp-2">
          Hospa medical center operates more than 120 locations. Find the nearest...
        </p>
      </div>

      <a
        href="#"
        className="text-white p-3 flex items-center border rounded-full bg-[#8cabe4] hover:bg-[#273c61] transition duration-300 ease-in-out"
      >
        <FaArrowRight />
      </a>
    </div>
  );
};

export default FindLocation;
