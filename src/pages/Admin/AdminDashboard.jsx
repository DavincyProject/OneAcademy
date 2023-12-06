const AdminDashboard = () => {
    return (
        <div className="flex min-h-screen">
            <div className="flex flex-col bg-[#6148FF] w-[20%] min-h-[100dvh]">
                <div className="flex items-center justify-center ">
                    <img src="/logo.png" alt="logo" className="w-[134.13px]" />
                </div>
                <div className="flex flex-col gap-2 text-[16px] px-3 font-bold">
                    <button className="btn btn-wide btn-info text-white">
                        Dashboard
                    </button>
                    <button className="btn btn-wide">Kelola Kelas</button>
                    <button className="btn btn-wide danger">Keluar</button>
                </div>
            </div>

            <div className="flex flex-col w-[80%]">
                <div>
                    <div className="navbar bg-[#EBF3FC] w-full">
                        <div className="flex-1">
                            <a className="btn btn-ghost text-xl">OneAcademy</a>
                        </div>
                        <div className="flex-none gap-2">
                            <div className="form-control">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="input input-bordered w-24 md:w-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-5">test content</div>
            </div>
        </div>
    );
};

export default AdminDashboard;
