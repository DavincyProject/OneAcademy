import { FaShoppingCart } from "react-icons/fa";
import PropTypes from "prop-types";
const BuyCourseButton = ({ id }) => {
    return (
        <div>
            {/* need to add logic to send id course into transaction pages */}
            <div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button
                    className="h-[34px] w-[269px] bg-[#6148FF] mt-3 text-white rounded-[25px]"
                    onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                    }
                >
                    <span className="flex justify-center items-center">
                        Beli Kelas
                        <FaShoppingCart className="ml-2" />
                    </span>
                </button>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </button>
                        </form>
                        <div className="text-center">
                            <h3 className="font-bold text-[24px]">
                                Selangkah lagi menuju
                            </h3>
                            <h3 className="text-[#6148FF] font-bold text-[24px]">
                                Kelas Premium
                            </h3>
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="card card-compact flex-grow w-full mt-3 max-w-[430px] bg-base-100 shadow-xl">
                                <figure>
                                    <img
                                        className="w-full object-cover"
                                        src="/testing_course.png"
                                        alt="card image"
                                    />
                                </figure>
                                <div className="card-body flex flex-col">
                                    <div className="text-[12px] flex flex-row justify-between font-Montserrat font-bold">
                                        <h3 className="font-bold text-[#6148FF] text-sm">
                                            UI/UX Design
                                        </h3>
                                        <div className="flex gap-1">
                                            <img
                                                src="/icon/ic_round-star.svg"
                                                alt="star icon"
                                            ></img>
                                            <p>4.5</p>
                                        </div>
                                    </div>
                                    <div className="text-[#202244] font-bold">
                                        Belajar Web Designer dengan Figma
                                        <br />
                                        <span className="font-normal">
                                            by Angeloa Doe
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center ">
                                        <div className="text-[12px] flex flex-row justify-between font-Montserrat font-bold">
                                            <div className="flex gap-1">
                                                <img
                                                    src="/icon/mdi_badge-outline.svg"
                                                    alt="badge icon"
                                                ></img>
                                                <h1 className="text-[12px] text-[#6148FF] font-semibold font-Poppins">
                                                    Intermediate Level
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="text-[12px] flex flex-row justify-between font-Montserrat font-bold">
                                            <div className="flex gap-1">
                                                <img
                                                    src="/icon/clarity_book-line.svg"
                                                    alt="book icon"
                                                ></img>
                                                <h1 className="text-[12px] font-normal font-Poppins">
                                                    10 Modul
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="text-[12px] flex flex-row justify-between font-Montserrat font-bold">
                                            <div className="flex gap-1">
                                                <img
                                                    src="/icon/ri_time-fill.svg"
                                                    alt="time icon"
                                                ></img>
                                                <h1 className="text-[12px] font-normal font-Poppins">
                                                    120 Menit
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="badge badge-blue p-3 mt-2">
                                        <div className="flex gap-1 items-center">
                                            <img
                                                src="/icon/Diamond.svg"
                                                alt="diamond icon"
                                            ></img>
                                            <p className="font-bold text-xs mr-3">
                                                Beli
                                            </p>
                                            <span className="font-bold text-xs">
                                                Rp{""} 250.000
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-action flex justify-center">
                            <form action="/login">
                                <button className="mt-3 w-[320px] h-[48px] bg-[#6148FF] text-white rounded-[25px]">
                                    <span className="flex justify-center items-center">
                                        Beli Sekarang
                                        <img
                                            src="/icon/buy-now.svg"
                                            alt="buy icon"
                                        ></img>
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default BuyCourseButton;
BuyCourseButton.propTypes = {
    id: PropTypes.string,
};
