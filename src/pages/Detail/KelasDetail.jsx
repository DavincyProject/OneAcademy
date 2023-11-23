import { Link } from "react-router-dom";
import { FaTelegram } from "react-icons/fa";

const KelasDetail = () => {
    return (
        <div>
            <div className="container-fluid p-2 bg-[#EBF3FC] ">
                <div className="top-[20px]">
                    <div className="flex gap-3 my-3">
                        <Link to={"/"}>
                            <img src="/icon/fi_arrow-left.svg" />
                        </Link>

                        <h1 className="text-[16px] font-bold">Kelas Lainnya</h1>
                    </div>

                    <div className="flex flex-col gap-1 ml-9 w-full md:w-[65vw]">
                        <div className="flex justify-between w-full md:w-[65vw]">
                            <h1 className="text-[#6148FF] text-[20px] font-bold">
                                UI/UX Design
                            </h1>
                            <div className="flex gap-1 mr-9">
                                <img src="/icon/ic_round-star.svg"></img>
                                <p>5.0</p>
                            </div>
                        </div>
                        <h1 className="text-[14px]">
                            Intro to Basic of User Interaction Design
                        </h1>
                        <p className="text-[12px] font-bold">by Simon Doe</p>
                        <div className="flex gap-4">
                            <div className="flex gap-1">
                                <img src="/icon/mdi_badge-outline.svg"></img>
                                <h1 className="text-[12px] text-[#6148FF] font-semibold">
                                    Beginner Level
                                </h1>
                            </div>
                            <div className="flex gap-1">
                                <img src="/icon/clarity_book-line.svg"></img>
                                <h1 className="text-[12px]">5 Modul</h1>
                            </div>
                            <div className="flex gap-1">
                                <img src="/icon/ri_time-fill.svg"></img>
                                <h1 className="text-[12px]">45 Menit</h1>
                            </div>
                        </div>
                        <button className="mt-3 w-[269px] h-[34px] bg-[#73CA5C] text-white rounded-[25px]">
                            <span className="flex justify-center items-center">
                                Join Grup Telegram
                                <FaTelegram className="ml-2" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="w-full md:w-[65vw] mx-5 my-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </div>

                <div>test</div>
            </div>
        </div>
    );
};

export default KelasDetail;
