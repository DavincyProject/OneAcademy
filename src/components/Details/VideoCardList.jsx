import { useState } from "react";
import PropTypes from "prop-types";

const VideoCardList = ({ onVideoSelect }) => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const dataDummy = [
        {
            id: 1,
            number: 1,
            title: "Ardhito Pramono - Fine Today",
            videoSrc: "https://www.youtube.com/embed/IUDG7ok7dVk",
        },
        {
            id: 2,
            number: 2,
            title: "Chris Andrian Yang - Until Death Do Us Part",
            videoSrc: "https://www.youtube.com/embed/CJbzhD3BOPU",
        },
        {
            id: 3,
            number: 3,
            title: "恋泥棒。/『ユイカ』弾き語り",
            videoSrc: "https://www.youtube.com/embed/iKRiF8fTo4w",
        },
    ];

    const dataDummySecond = [
        {
            id: 1,
            number: 4,
            title: "Chris Andrian Yang - Tell Me",
            videoSrc: "https://www.youtube.com/embed/29DfQ9XQA3A",
        },
        {
            id: 2,
            number: 5,
            title: "When She Loved Me",
            videoSrc: "https://www.youtube.com/embed/SpS9UGmsLLU",
        },
        {
            id: 3,
            number: 6,
            title: "Hal - L",
            videoSrc: "https://www.youtube.com/embed/jat0G8fKbxs",
        },
        {
            id: 4,
            number: 7,
            title: "Nadhif Basalamah - penjaga hati",
            videoSrc: "https://www.youtube.com/embed/jia3fhBQ8qI",
        },
        {
            id: 5,
            number: 8,
            title: "Jaz - Bersamamu",
            videoSrc: "https://www.youtube.com/embed/D-VytLhH-KE",
        },
        {
            id: 6,
            number: 9,
            title: "Dere - Rubix",
            videoSrc: "https://www.youtube.com/embed/iUsz8Xsyor8",
        },
        {
            id: 7,
            number: 10,
            title: "Dere - Tanya",
            videoSrc: "https://www.youtube.com/embed/6Ln7_fZmEFE",
        },
    ];

    const handleVideoSelect = (videoSrc) => {
        onVideoSelect(videoSrc);
        setSelectedVideo(videoSrc);
    };

    return (
        <div className="container-fluid w-full max-w-[400px] my-2 mx-1 sm:none lg:absolute lg:top-[7rem] lg:right-7">
            <div className="p-3 h-full w-full relative flex flex-col text-gray-700 bg-white shadow-md lg:w-96 rounded-md bg-clip-border">
                <div className="p-1 flex justify-between items-center">
                    <h1 className="text-[20px] font-bold">Materi Belajar</h1>

                    <div className="flex gap-1">
                        <img
                            src="/icon/progress-check.svg"
                            alt="progress check"
                        />
                        <div className="w-[150px] h-[16px] bg-gray-200 rounded-full dark:bg-gray-700">
                            <div
                                className="bg-[#6148FF] h-[16px] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                                style={{ width: "50%" }}
                            >
                                50%
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-1 mt-2 w-full max-w-[349px]">
                    <div className="flex justify-between items-center">
                        <h1 className="text-[12px]  text-[#6148FF] font-extrabold">
                            Chapter 1 - Pendahuluan
                        </h1>
                        <p className="text-[12px] font-extrabold text-[#489CFF]">
                            60 Menit
                        </p>
                    </div>
                    {dataDummy.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => handleVideoSelect(item.videoSrc)}
                            className="h-[52px] p-2 cursor-pointer"
                        >
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2 items-center mt-2">
                                    <h1 className="bg-[#EBF3FC] rounded-full w-[36px] h-[36px] flex justify-center items-center">
                                        {item.number}
                                    </h1>
                                    <h1
                                        className={`text-[12px] max-w-[251px] ${
                                            selectedVideo === item.videoSrc
                                                ? "text-[#00CC00]"
                                                : ""
                                        }`}
                                    >
                                        {item.title}
                                    </h1>
                                </div>
                                <img
                                    src={
                                        selectedVideo === item.videoSrc
                                            ? "/icon/Pause.svg"
                                            : "/icon/Play.svg"
                                    }
                                    alt="play pause icon"
                                />
                            </div>
                            <div className="border-t mt-2 border-[#EBF3FC]"></div>
                        </div>
                    ))}
                </div>

                {/* add conditional for play non free video here  */}
                <div className="p-1 mt-2">
                    <div className="flex justify-between items-center">
                        <h1 className="text-[12px]  text-[#6148FF] font-extrabold">
                            Chapter 2 - Memulai Desain
                        </h1>
                        <p className="text-[12px] font-extrabold text-[#489CFF]">
                            120 Menit
                        </p>
                    </div>
                    {dataDummySecond.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => handleVideoSelect(item.videoSrc)}
                            className="h-[52px] p-2 cursor-pointer"
                        >
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2 items-center mt-2">
                                    <h1 className="bg-[#EBF3FC] rounded-full w-[36px] h-[36px] flex justify-center items-center">
                                        {item.number}
                                    </h1>
                                    <h1
                                        className={`text-[12px] ${
                                            selectedVideo === item.videoSrc
                                                ? "text-[#00CC00]"
                                                : ""
                                        }`}
                                    >
                                        {item.title}
                                    </h1>
                                </div>

                                <img
                                    src={
                                        selectedVideo === item.videoSrc
                                            ? "/icon/Pause.svg"
                                            : "/icon/Play.svg"
                                    }
                                    alt="play pause icon"
                                />
                            </div>
                            <div className="border-t mt-2 border-[#EBF3FC]"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VideoCardList;

VideoCardList.propTypes = {
    onVideoSelect: PropTypes.func,
};
