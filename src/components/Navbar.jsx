import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);

  const location = useLocation();
  const hidePath = ["/login", "/register", "/reset", "/validate"];

  const isHidden = hidePath.includes(location.pathname);

  if (isHidden) {
    return null;
  }

  return (
    <div className="navbar bg-[#6148FF]">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl text-white">
          OneAcademy
        </Link>
      </div>
      {token ? (
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            ></ul>
          </div>
        </div>
      ) : (
        <div>Login</div>
      )}
    </div>
  );
};

export default Navbar;
