import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Notification = () => {
    return (
        <div>
            <div className="bg-[#EBF3FC] h-[250px] relative">
                <div className="absolute flex justify-center w-full top-[9dvh] ">
                    <div className="flex flex-col justify-center">
                        <Link
                            to={"/"}
                            className="text-[#6148FF] text-[16px] font-bold flex gap-2 items-center mb-5"
                        >
                            <FaArrowLeft className="text-[#6148FF]" />
                            Kembali Ke Beranda
                        </Link>
                        <div className="card card-compact w-[80dvw] bg-base-100 shadow-xl mb-5">
                            <div className="p-2 bg-[#6148FF] rounded-t-md text-center">
                                <h1 className="text-xl text-white font-bold">
                                    Notifikasi
                                </h1>
                            </div>

                            <div className="card-body min-h-[50dvh] flex flex-col ">
                                {/* start fetch data from here */}
                                <div className="flex gap-3 w-full px-2 py-1 border rounded-md mb-[4rem]">
                                    <img
                                        src="/icon/notification.svg"
                                        alt="notif icon"
                                        className="w-5"
                                    />
                                    <div className="w-full">
                                        <div className="flex justify-between items-center gap-2 mb-2">
                                            <h1 className="text-[14px] text-[#6148FF] font-bold">
                                                Promosi
                                            </h1>
                                            <div className="flex gap-2 items-center">
                                                <h1 className="text-xs font-semibold text-[#8A8A8A]">
                                                    2 Maret, 12:00
                                                </h1>
                                                <img
                                                    src="/icon/ellipse_green.svg"
                                                    alt="notif icon"
                                                    className="w-3"
                                                />
                                            </div>
                                        </div>
                                        <h1 className="font-semibold">
                                            Dapatkan Potongan 50% selama Bulan
                                            Maret!
                                        </h1>
                                        <p className="font-medium">
                                            Syarat dan Ketentuan berlaku!
                                        </p>
                                    </div>
                                </div>
                                {/* end fetch data here */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notification;
