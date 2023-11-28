const Navbar = () => {
    return (
        <div className="navbar bg-[#6148FF]">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl text-white">daisyUI</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered w-24 md:w-auto"
                    />
                </div>
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                    >
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
        </div>
    );
};

export default Navbar;
