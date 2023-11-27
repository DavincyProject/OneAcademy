import user from "../../public/user.png";
import { useState } from "react";

const Navbar = () => {
  const [toggleAkun, setToggleAkun] = useState(false);
  const handleAkun = () => {
    setToggleAkun(true);
  };
  return (
    <>
      <div className=" bg-[#6148FF] w-full flex h-28">
        <div className="flex w-[80%] mx-auto">
          <div className=" flex-auto w-64">
            <div className="flex items-center h-full">
              <div className=" ">
                <img src="/logo.png" className="w-full lg:w-full " />
              </div>
              <div className=" ml-6">
                <input
                  className="py-4 px-7 w-[526px] rounded-2xl"
                  type="text"
                  placeholder="Cari kursus terbaik.."
                />
              </div>
            </div>
          </div>
          <div className="flex-auto">
            <div className="flex justify-end items-center h-full">
              <div className="px-3"></div>
              <div
                className={`px-6 py-2 rounded-xl ${
                  toggleAkun && "bg-[#489CFF]"
                } `}
              >
                <button
                  className="flex text-white text-xl items-center"
                  onClick={handleAkun}
                >
                  <img
                    src={user}
                    className={`${toggleAkun && "pr-2"} pt-[2px]`}
                  />
                  {toggleAkun && "Akun"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
