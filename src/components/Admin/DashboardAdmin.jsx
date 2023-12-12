import { FaFilter, FaSearch } from "react-icons/fa";
import QuickInformation from "./QuickInformation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTransactionData } from "../../redux/actions/adminActions";

const DashboardAdmin = () => {
    const dispatch = useDispatch();
    const { paymentStatus } = useSelector((state) => state.admin);

    useEffect(() => {
        dispatch(getTransactionData());
    }, [dispatch]);

    return (
        <div className="flex flex-col w-full">
            {/* Quick Information About class and users */}
            <QuickInformation />

            <div>
                {/* Table Of Information about course and payment */}
                <div className="container-fluid flex justify-between mt-2">
                    <h1 className="font-bold text-xl">Status Pembayaran</h1>
                    <div className="flex justify-center items-center gap-2 p">
                        <button className="badge p-4 text-darkblue border-darkblue">
                            <FaFilter
                                size={15}
                                color="darkblue"
                                className="mr-2"
                            />
                            Filter
                        </button>
                        <FaSearch size={20} color="darkblue" />
                    </div>
                </div>
                <div className="overflow-x-auto my-3 rounded-md">
                    <table className="table ">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#EBF3FC] text-black">
                                <th>User Name</th>
                                <th>Kategori</th>
                                <th>Judul Kelas</th>
                                <th>Status</th>
                                <th>Metode Pembayaran</th>
                                <th>Tanggal Bayar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paymentStatus.map((item) => (
                                <tr key={item.id}>
                                    <th>{item?.user?.profile?.name}</th>
                                    <td>{item?.course?.category?.name}</td>
                                    <td>{item?.course?.title}</td>
                                    <td
                                        className={`font-bold text-xs ${
                                            item.status === "SUDAH DIBAYAR"
                                                ? "text-green-500"
                                                : "text-red-500"
                                        }`}
                                    >
                                        {item.status}
                                    </td>
                                    <td>{item.paymentMethod}</td>
                                    <td>{item.paymentDate}</td>
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
