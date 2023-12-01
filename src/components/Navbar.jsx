import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { FaRegBell, FaRegUser, FaListUl } from "react-icons/fa";
import { logout } from "../redux/actions/authActions";
import { CiLogout } from "react-icons/ci";
// import { useEffect } from "react";
// import { getProfileData } from "../redux/actions/profileActions";
const Navbar = () => {
  const { token } =
    useSelector((state) => state.auth) || localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const location = useLocation();
  const hidePath = ["/login", "/register", "/reset", "/validate"];

  const isHidden = hidePath.includes(location.pathname);

  // useEffect(() => {
  //     dispatch(getProfileData(token));
  // }, [dispatch, token]);

  if (isHidden) {
    return null;
  }

  const onLogout = () => {
    dispatch(logout(navigate));
  };

  return (
    <div className="navbar bg-[#6148FF] md:px-[65px]">
      <div className="flex-1">
        <Link
          to={"/"}
          className="btn btn-ghost text-md md:text-xl text-white mr-2"
        >
          OneAcademy
        </Link>

        {token ? (
          <form className="hidden sm:flex relative flex-row">
            <input
              type="search"
              placeholder="Cari Kursus Terbaik..."
              className="sm:w-[35dvw] sm:h-[7dvh] outline-none focus:outline-none px-4 py-[6px] border-2 rounded-2xl border-[#6148FF]"
            />
            <button
              type="submit"
              className="absolute bottom-1/2 right-4 translate-y-1/2 rounded-lg bg-[#6148FF] p-1"
            >
              <img src="/icon/search.svg" className="w-7" />
            </button>
          </form>
        ) : (
          <></>
        )}
      </div>

      {token ? (
        <>
          <form className="flex items-center sm:hidden relative flex-row">
            <input
              type="search"
              placeholder="Cari Kursus Terbaik..."
              className="placeholder:text-xs w-[47dvw] md:w-[35dvw] md:h-[5dvh] outline-none focus:outline-none px-4 py-[6px] border-2 rounded-2xl border-[#6148FF]"
            />
            <button
              type="submit"
              className="absolute bottom-1/2 right-2 translate-y-1/2 rounded-lg bg-[#6148FF] p-1"
            >
              <img src="/icon/search.svg" />
            </button>
          </form>
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src="/profile.jpg" />
                </div>
              </label>
              <ul className="mt-3 z-[1] p-2 text-[#6148FF] shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li className="my-2 hover:bg-slate-200 rounded-md">
                  <Link to={"/classme"}>
                    <div className="flex items-center gap-2 text-[16px] font-bold ">
                      <FaListUl />
                      <h1>Kelas</h1>
                    </div>
                  </Link>
                </li>
                <li className="my-2 hover:bg-slate-200 rounded-md">
                  <Link to={"/notification"}>
                    <div className="flex items-center gap-2 text-[16px]  font-bold">
                      <FaRegBell />
                      <h1>Notifikasi</h1>
                    </div>
                  </Link>
                </li>
                <li className="my-2 hover:bg-slate-200 rounded-md">
                  <Link to={"/account"}>
                    <div className="flex items-center gap-2 text-[16px] font-bold">
                      <FaRegUser />
                      <h1>Akun</h1>
                    </div>
                  </Link>
                </li>
                <li className="my-2 hover:bg-red-200 rounded-md">
                  <button onClick={onLogout}>
                    <div className="flex items-center gap-2 text-[16px] text-red-600 font-bold">
                      <CiLogout />
                      <h1>Logout</h1>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <Link to={"/login"}>
          <div className="flex gap-2 btn btn-ghost">
            <img src="/icon/fi_log-in.svg" alt="time icon"></img>
            <button className="text-white font-bold text-[16px]">Masuk</button>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
