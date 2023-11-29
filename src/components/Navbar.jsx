import { useLocation } from "react-router-dom";
import user from "../../public/user.png";
import { useState } from "react";

const Navbar = () => {
  const [toggleAkun, setToggleAkun] = useState(false);
  const location = useLocation();
  const hidePath = ["/login", "/register", "/reset", "/validate"];

  const handleAkun = () => {
    setToggleAkun(true);
  };

  const isHidden = hidePath.includes(location.pathname);

  if (isHidden) {
    return null;
  }

  return (
    <div className=" bg-[#6148FF] w-full flex h-28">
      <div className="flex w-[80%] mx-auto">
        <div className=" flex-auto w-32">
          <div className="flex items-center h-full">
            <img src="/logo.png" />
            <div className=" ml-6">
              <input
                className="py-4 px-7 w-[526px] rounded-2xl"
                type="text"
                placeholder="Cari kursus terbaik.."
              />
            </div>
          </div>
        </div>

        <div className="px-3">
          <div
            className={`px-6 py-2 rounded-xl ${toggleAkun && "bg-[#489CFF]"} `}
          >
            <button
              className="flex text-white text-xl items-center"
              onClick={handleAkun}
            >
              <img src={user} className={`${toggleAkun && "pr-2"} pt-[2px]`} />
              {toggleAkun && "Akun"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
