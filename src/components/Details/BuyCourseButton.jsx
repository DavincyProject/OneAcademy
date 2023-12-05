import { FaShoppingCart } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const BuyCourseButton = ({ id }) => {
    return (
        <div key={id}>
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
                        <button className="text-[#6148FF] btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            <img
                                src="/icon/close.svg"
                                className="w-10"
                                alt="close button"
                            />
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

                    <div className="flex items-center justify-center mt-5">
                        <div
                            key={id}
                            className="shadow-md bg-white flex flex-col flex-grow sm:flex-none items-stretch pb-2.5 rounded-2xl max-w-[400px]"
                        >
                            <img
                                loading="lazy"
                                src="/testing_course.png"
                                alt="image course"
                                className="aspect-[4.04] w-full overflow-hidden h-[85px] object-cover rounded-t-2xl"
                            />
                            <div className="flex w-full flex-col mt-1.5 px-2.5">
                                <div className="items-stretch self-stretch flex w-full justify-between gap-5">
                                    <div className="text-indigo-600 text-xs font-bold leading-4 flex-1">
                                        UI/UX Design
                                    </div>
                                    <div className="justify-between items-stretch flex gap-0 pl-20 max-md:pl-5">
                                        <img
                                            loading="lazy"
                                            src="/icon/ic_round-star.svg"
                                            alt="star icon"
                                        />
                                        <div className="text-indigo-950 text-xs font-semibold leading-4 grow whitespace-nowrap">
                                            4.5
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch text-black text-xs font-bold leading-4">
                                    <span className="font-bold text-indigo-950">
                                        Belajar Web Designer dengan Figma
                                        <br />
                                    </span>
                                    <span className=" text-black">
                                        by Angela Doe
                                    </span>
                                </div>
                                <div className="items-stretch self-stretch flex justify-between gap-0">
                                    <div className="flex gap-1 items-center">
                                        <img
                                            loading="lazy"
                                            src="/icon/mdi_badge-outline.svg"
                                            alt="badge icon"
                                            className="aspect-square object-contain object-center w-3 overflow-hidden shrink-0 max-w-full"
                                        />
                                        <div className="text-indigo-600 text-xs font-semibold leading-4 self-stretch">
                                            Intermediate Level
                                        </div>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <img
                                            loading="lazy"
                                            src="/icon/clarity_book-line.svg"
                                            alt="book icon"
                                            className="aspect-square object-contain object-center w-3 overflow-hidden shrink-0 max-w-full"
                                        />
                                        <div className="text-black text-xs font-normal leading-4 self-stretch">
                                            10 Modul
                                        </div>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <img
                                            loading="lazy"
                                            src="/icon/ri_time-fill.svg"
                                            alt="clock icon"
                                            className="aspect-square object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full"
                                        />
                                        <div className="text-black text-xs font-normal leading-4 self-stretch">
                                            120 Menit
                                        </div>
                                    </div>
                                </div>
                                <div className="badge badge-blue p-3 mt-2">
                                    <div className="flex gap-1 items-center font-Poppins font-bold">
                                        <img
                                            src="/icon/Diamond.svg"
                                            alt="diamond icon"
                                        />
                                        <span className="mr-2">Beli</span> Rp{" "}
                                        {""}
                                        250.000
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal-action flex justify-center">
                        <Link to={`/payment/${id}`}>
                            <button className="mt-3 w-[320px] h-[48px] bg-[#6148FF] text-white rounded-[25px]">
                                <span className="flex justify-center items-center gap-2">
                                    Beli Sekarang
                                    <img
                                        src="/icon/buy-now.svg"
                                        alt="buy icon"
                                    ></img>
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default BuyCourseButton;
BuyCourseButton.propTypes = {
    id: PropTypes.node,
};
