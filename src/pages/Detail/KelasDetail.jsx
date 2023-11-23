import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTelegram } from "react-icons/fa";
import VideoCardList from "../../components/Details/VideoCardList";
import VideoPlayer from "../../components/Details/VideoPlayer";

const KelasDetail = () => {
    const [activeVideo, setActiveVideo] = useState("");
    return (
        <div>
            <div className="container-fluid p-2 bg-[#EBF3FC] ">
                <div className="top-[20px] mx-2">
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

            <div className="flex flex-col lg:flex-row">
                <div className="lg:flex-col">
                    <div className="p-5 order-2 lg:order-1">
                        {/* Video component di sini */}
                        <VideoPlayer videoSrc={activeVideo} />
                    </div>
                    <div className="w-full md:w-[65vw] p-5">
                        <div className="collapse collapse-arrow bg-base-200 mb-2">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-[20px] font-bold ">
                                Kelas Ini Ditujukan Untuk
                            </div>
                            <div className="collapse-content">
                                <ol className="text-[13px] px-3 list-decimal">
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
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-[20px] font-bold ">
                                Tentang Kelas
                            </div>
                            <div className="collapse-content">
                                <p>
                                    Design system adalah kumpulan komponen
                                    design, code, ataupun dokumentasi yang dapat
                                    digunakan sebagai panduan utama yang
                                    memunginkan designer serta developer
                                    memiliki lebih banyak kontrol atas berbagai
                                    platform. Dengan hadirnya design system,
                                    dapat menjaga konsistensi tampilan user
                                    interface dan meningkatkan user experience
                                    menjadi lebih baik. Disisi bisnis, design
                                    system sangat berguna dalam menghemat waktu
                                    dan biaya ketika mengembangkan suatu produk.
                                    Bersama mentor XXX, kita akan mempelajari
                                    design system dari mulai manfaat, alur kerja
                                    pembuatannya, tools yang digunakan, hingga
                                    pada akhirnya, kita akan membuat MVP dari
                                    design system. Selain itu, mentor juga akan
                                    menjelaskan berbagai resource yang
                                    dibutuhkan untuk mencari inspirasi mengenai
                                    design system. Kelas ini sesuai untuk Anda
                                    yang ingin memahami apa itu design system.
                                    Tidak hanya ditujukan untuk UI/UX Designer
                                    ataupun Developer, kelas ini sangat sesuai
                                    untuk stakeholder lain agar dapat memudahkan
                                    tim dalam bekerja sama. Yuk segera daftar
                                    dan kami tunggu di kelas ya!
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
