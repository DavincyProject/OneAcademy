import QuickInformation from "./QuickInformation";
import { FaFilter, FaSearch } from "react-icons/fa";
import AddClass from "./AddClass";

const KelolaKelas = () => {
    const data = [
        {
            id: 1,
            classid: "UIUX0123",
            category: "UI/UX Design",
            title: "Belajar web Designer dengan Figma",
            type: "GRATIS",
            level: "Beginner",
            price: 0,
        },
        {
            id: 2,
            classid: "WD1123",
            category: "Web Development",
            title: "CSS dan HTML dalam seminggu",
            type: "PREMIUM",
            level: "Intermediate",
            price: 999999999,
        },
        {
            id: 3,
            classid: "DS0323",
            category: "Data Science",
            title: "Data Cleaning untuk pemula",
            type: "PREMIUM",
            level: "Beginner",
            price: 123000,
        },
        {
            id: 4,
            classid: "WD0153",
            category: "Web Development",
            title: "Membuat website menggunakan AI",
            type: "GRATIS",
            level: "Advanced",
            price: 0,
        },
    ];

    const formatPrice = (price) => {
        // Assuming price is a number
        return price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
        });
    };

    return (
        <div className="flex flex-col w-full">
            {/* Quick Information About class and classs */}
            <QuickInformation />

            <div>
                {/* Table Of Information about course and level */}
                <div className="container-fluid flex justify-between mt-2">
                    <h1 className="font-bold text-xl">type Pembayaran</h1>
                    <div className="flex justify-center items-center gap-2 p">
                        <AddClass />
                        <button className="badge p-4 text-darkblue border-darkblue">
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
                                <th>Kode Kelas</th>
                                <th>Kategori</th>
                                <th>Nama Kelas</th>
                                <th>Tipe Kelas</th>
                                <th>level</th>
                                <th>Harga Kelas</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <th>{item.classid}</th>
                                    <td>{item.category}</td>
                                    <td>{item.title}</td>
                                    <td
                                        className={`font-bold text-xs ${
                                            item.type === "GRATIS"
                                                ? "text-green-500"
                                                : "text-darkblue"
                                        }`}
                                    >
                                        {item.type}
                                    </td>
                                    <td>{item.level}</td>
                                    <td>{formatPrice(item?.price)}</td>
                                    <td className="flex gap-2">
                                        <button className="badge-darkblue p-1 rounded-md">
                                            Ubah
                                        </button>
                                        <button className="badge-red p-1 rounded-md">
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default KelolaKelas;
