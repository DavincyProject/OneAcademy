import { FaFilter, FaSearch, FaUsers } from "react-icons/fa";
import { MdWorkspacePremium, MdClass } from "react-icons/md";

const DashboardAdmin = () => {
    const data = [
        {
            id: 1,
            userid: "Jhon Doe",
            category: "UI/UX Design",
            title: "Belajar web Designer dengan Figma",
            status: "SUDAH DIBAYAR",
            payment: "Credit Card",
            date: "21 Sep, 2023 at 2:00 AM",
        },
        {
            id: 2,
            userid: "ganjarprabono",
            category: "Web Development",
            title: "CSS dan HTML dalam seminggu",
            status: "BELUM DIBAYAR",
            payment: "-",
            date: "-",
        },
        {
            id: 3,
            userid: "akusiapa",
            category: "Data Science",
            title: "Data Cleaning untuk pemula",
            status: "BELUM DIBAYAR",
            payment: "-",
            date: "-",
        },
        {
            id: 4,
            userid: "akusepuh",
            category: "Web Development",
            title: "Membuat website menggunakan AI",
            status: "SUDAH DIBAYAR",
            payment: "Bank Transfer",
            date: "19 Sep, 2023 at 2:00 AM",
        },
    ];

    return (
        <div className="flex flex-col w-full">
            {/* Quick Information About class and users */}
            <div>
                <div className="container-fluid w-full flex justify-around flex-grow flex-wrap max-h-52 md:max-h-28 gap-2 md:gap-5 md:my-5">
                    <div className="flex-grow max-h-16 md:max-h-28 rounded-xl p-6 flex justify-center items-center gap-5 bg-[#489CFF]">
                        <FaUsers
                            size={50}
                            color="#6148FF"
                            className="bg-white rounded-2xl p-2"
                        />
                        <div className="flex flex-col text-white">
                            <h1>450</h1>
                            <h1 className="font-bold">Active Users</h1>
                        </div>
                    </div>
                    <div className="flex-grow max-h-16 md:max-h-28 rounded-xl p-6 flex justify-center items-center gap-5 bg-[#73CA5C]">
                        <MdClass
                            size={50}
                            color="#6148FF"
                            className="bg-white rounded-2xl p-2"
                        />
                        <div className="flex flex-col text-white">
                            <h1>25</h1>
                            <h1 className="font-bold">Active Class</h1>
                        </div>
                    </div>
                    <div className="flex-grow max-h-16 md:max-h-28 rounded-xl p-6 flex justify-center items-center gap-5 bg-[#6148FF]">
                        <MdWorkspacePremium
                            size={50}
                            color="#6148FF"
                            className="bg-white rounded-2xl p-2"
                        />
                        <div className="flex flex-col text-white">
                            <h1>20</h1>
                            <h1 className="font-bold">Premium Class</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {/* Table Of Information about course and payment */}
                <div className="container-fluid flex justify-between mt-2">
                    <h1 className="font-bold text-xl">Status Pembayaran</h1>
                    <div className="flex justify-center items-center gap-2 p">
                        <button className="badge p-4 text-[#6148FF] border-[#6148FF]">
                            <FaFilter
                                size={15}
                                color="#6148FF"
                                className="mr-2"
                            />
                            Filter
                        </button>
                        <FaSearch size={20} color="#6148FF" />
                    </div>
                </div>
                <div className="overflow-x-auto my-3 rounded-md">
                    <table className="table ">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#EBF3FC] text-black">
                                <th>ID</th>
                                <th>Kategori</th>
                                <th>Judul Kelas</th>
                                <th>Status</th>
                                <th>Metode Pembayaran</th>
                                <th>Tanggal Bayar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <th>{item.userid}</th>
                                    <td>{item.category}</td>
                                    <td>{item.title}</td>
                                    <td
                                        className={`font-bold text-xs ${
                                            item.status === "SUDAH DIBAYAR"
                                                ? "text-green-500"
                                                : "text-red-500"
                                        }`}
                                    >
                                        {item.status}
                                    </td>
                                    <td>{item.payment}</td>
                                    <td>{item.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DashboardAdmin;
