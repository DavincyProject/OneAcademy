import { useState } from "react";
import DashboardAdmin from "../../components/Admin/DashboardAdmin";
import KelolaKelas from "../../components/Admin/KelolaKelas";
import { GiHamburgerMenu } from "react-icons/gi";

const AdminDashboard = () => {
    const [activeLink, setActiveLink] = useState("dashboard");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleClick = (link) => {
        setActiveLink(link);
    };

    const handleRenderContent = () => {
        switch (activeLink) {
            case "dashboard":
                return <DashboardAdmin />;
            case "kelolaKelas":
                return <KelolaKelas />;
            default:
                return null;
        }
    };

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div
                className={`${
                    isSidebarOpen ? "block" : "hidden"
                } sm:flex sm:flex-col bg-[#6148FF] max-w-[50%] md:max-w-[20%]  min-h-[100dvh] transition-all duration-300`}
            >
                <div className="flex items-center justify-center py-3">
                    <img
                        src="/testnew.svg"
                        alt="logo"
                        className="w-20 md:w-[134px]"
                    />
                </div>
                <div className="flex flex-col gap-2 text-[16px] px-3 font-bold ">
                    <button
                        onClick={() => handleClick("dashboard")}
                        className={`btn btn-ghost btn-info text-white w-[40dvw] md:w-[18dvw] font-bold text-xs md:text-base justify-start ${
                            activeLink === "dashboard"
                                ? "bg-[#489CFF]"
                                : "bg-none"
                        }`}
                    >
                        Dashboard
                    </button>
                    <button
                        onClick={() => handleClick("kelolaKelas")}
                        className={`btn btn-ghost  btn-info text-white font-bold text-xs md:text-base justify-start ${
                            activeLink === "kelolaKelas"
                                ? "bg-[#489CFF]"
                                : "bg-none"
                        }`}
                    >
                        Kelola Kelas
                    </button>
                    <button className="btn btn-ghost  text-white hover:text-red-700 font-bold text-xs md:text-base justify-start">
                        Keluar
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col w-full md:w-[80%]">
                <div className="navbar bg-[#EBF3FC] w-full">
                    {/* Hamburger Button */}
                    <button
                        className="sm:hidden px-4 py-2 text-[#6148FF] focus:outline-none"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        <GiHamburgerMenu />
                    </button>

                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl text-[#6148FF] font-bold">
                            Hi, Admin!
                        </a>
                    </div>

                    {/* Search Form */}
                    <form className="hidden sm:flex relative flex-row">
                        <input
                            type="search"
                            placeholder="Cari..."
                            className="sm:w-[25dvw] sm:h-[7dvh] outline-none focus:outline-none px-4 py-[6px] border-2 rounded-2xl border-[#6148FF]"
                        />
                        <button
                            type="submit"
                            className="absolute bottom-1/2 right-4 translate-y-1/2 rounded-lg bg-[#6148FF] p-1"
                        >
                            <img
                                src="/icon/search.svg"
                                className="w-7"
                                alt="search icon"
                            />
                        </button>
                    </form>
                </div>

                {/* Content */}
                <div className="flex flex-1 justify-start p-5">
                    {handleRenderContent()}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
