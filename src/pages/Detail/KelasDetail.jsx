import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTelegram } from "react-icons/fa";
import VideoCardList from "../../components/Details/VideoCardList";
import VideoPlayer from "../../components/Details/VideoPlayer";
import BuyCourseButton from "../../components/Details/BuyCourseButton";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { detailsCourse } from "../../redux/actions/courseActions";

const KelasDetail = () => {
    const [activeVideo, setActiveVideo] = useState("");

    const { id } = useParams();
    const dispatch = useDispatch();
    const { courseDetails } = useSelector((state) => state.course);

    useEffect(() => {
        dispatch(detailsCourse(id));
    }, [dispatch, id]);

    return (
        <div>
            <div className="container-fluid p-2 bg-[#EBF3FC] ">
                <div className="top-[20px] mx-2 mt-2">
                    <Link
                        to={"/class"}
                        className="hover:text-[#6148FF] text-[16px] font-bold flex gap-2 items-center mb-5"
                    >
                        <FaArrowLeft className="text-[16px] font-bold" />
                        Kelas Lainnya
                    </Link>

                    <div className="flex flex-col gap-1 ml-9 container-fluid md:w-[65vw]">
                        <div className="flex justify-between container-fluid md:w-[65vw]">
                            <h1 className="text-[#6148FF] text-[20px] font-bold">
                                {courseDetails.title}
                            </h1>
                            <div className="flex gap-1 mr-12 items-center">
                                <img
                                    src="/icon/ic_round-star.svg"
                                    className="w-[14px]"
                                    alt="rating icon"
                                ></img>
                                <p className="text-[14px] font-bold">5.0</p>
                            </div>
                        </div>
                        <h1 className="text-[14px]">{courseDetails.title}</h1>
                        <p className="text-[12px] font-bold">
                            {courseDetails.instructor}
                        </p>
                        <div className="flex gap-4">
                            <div className="flex gap-1">
                                <img
                                    src="/icon/mdi_badge-outline.svg"
                                    alt="level icon"
                                ></img>
                                <h1 className="text-[12px] text-[#6148FF] font-semibold">
                                    {courseDetails.level}
                                </h1>
                            </div>
                            <div className="flex gap-1">
                                <img
                                    src="/icon/clarity_book-line.svg"
                                    alt="module icon"
                                ></img>
                                <h1 className="text-[12px]">5 Modul</h1>
                            </div>
                            <div className="flex gap-1">
                                <img
                                    src="/icon/ri_time-fill.svg"
                                    alt="time icon"
                                ></img>
                                <h1 className="text-[12px]">45 Menit</h1>
                            </div>
                        </div>
                        <div className="flex gap-1 flex-wrap">
                            <button className="mt-3 w-[269px] h-[34px] bg-[#73CA5C] text-white rounded-[25px]">
                                <span className="flex justify-center items-center">
                                    Join Grup Telegram
                                    <FaTelegram className="ml-2" />
                                </span>
                            </button>
                            {/* need to add logic to send id course into transaction pages */}
                            <BuyCourseButton id={id} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row">
                <div className="md:flex-col">
                    <div className="p-5 order-2 lg:order-1">
                        {/* Video component di sini */}
                        <VideoPlayer videoSrc={activeVideo} />
                    </div>
                    <div className="w-full md:w-[65vw] p-5">
                        <div className="collapse collapse-arrow bg-base-200 mb-2">
                            <input
                                type="radio"
                                name="my-accordion-2"
                                aria-label="class info"
                            />
                            <div className="collapse-title text-[20px] font-bold ">
                                Kelas Ini Ditujukan Untuk
                            </div>
                            <div className="collapse-content">
                                <ol className="text-[13px] text-justify px-3 list-decimal">
                                    <li>
                                        Anda yang ingin memahami poin penting
                                        design system
                                    </li>
                                    <li>
                                        Anda yang ingin membantu perusahaan
                                        lebih optimal dalam membuat design
                                        produk
                                    </li>
                                    <li>
                                        Anda yang ingin latihan membangun design
                                        system
                                    </li>
                                    <li>
                                        Anda yang ingin latihan membangun design
                                        system
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200 mb-2">
                            <input
                                type="radio"
                                name="my-accordion-2"
                                aria-label="class description"
                            />
                            <div className="collapse-title text-[20px] font-bold ">
                                Tentang Kelas
                            </div>
                            <div className="collapse-content">
                                <p className="text-justify">
                                    {courseDetails.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 lg:order-2">
                    <VideoCardList
                        onVideoSelect={(videoSrc) => setActiveVideo(videoSrc)}
                    />
                </div>
            </div>
        </div>
    );
};

export default KelasDetail;
