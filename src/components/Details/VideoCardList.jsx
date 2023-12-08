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
            paid: true,
        },
        {
            id: 2,
            number: 2,
            title: "Chris Andrian Yang - Until Death Do Us Part",
            videoSrc: "https://www.youtube.com/embed/CJbzhD3BOPU",
            paid: true,
        },
        {
            id: 3,
            number: 3,
            title: "恋泥棒。/『ユイカ』弾き語り",
            videoSrc: "https://www.youtube.com/embed/iKRiF8fTo4w",
            paid: true,
        },
    ];

    const dataDummySecond = [
        {
            id: 1,
            number: 4,
            title: "Chris Andrian Yang - Tell Me",
            videoSrc: "https://www.youtube.com/embed/29DfQ9XQA3A",
            paid: false,
        },
        {
            id: 2,
            number: 5,
            title: "When She Loved Me",
            videoSrc: "https://www.youtube.com/embed/SpS9UGmsLLU",
            paid: false,
        },
        {
            id: 3,
            number: 6,
            title: "Hal - L",
            videoSrc: "https://www.youtube.com/embed/jat0G8fKbxs",
            paid: false,
        },
        {
            id: 4,
            number: 7,
            title: "Nadhif Basalamah - penjaga hati",
            videoSrc: "https://www.youtube.com/embed/jia3fhBQ8qI",
            paid: false,
        },
        {
            id: 5,
            number: 8,
            title: "Jaz - Bersamamu",
            videoSrc: "https://www.youtube.com/embed/D-VytLhH-KE",
            paid: false,
        },
        {
            id: 6,
            number: 9,
            title: "Dere - Rubix",
            videoSrc: "https://www.youtube.com/embed/iUsz8Xsyor8",
            paid: false,
        },
        {
            id: 7,
            number: 10,
            title: "Dere - Tanya",
            videoSrc: "https://www.youtube.com/embed/6Ln7_fZmEFE",
            paid: false,
        },
    ];

    /**  
        handle open Chapter based on chapter lenght index test
        logic : Count chapter lenght and compare to dataDummy.length + pay status to open next chapter,
                if pay status is false (not buy) return chapter 2 without opening that chapter.

                totalItemChapterClicked is get from API to count if all item on prev chapter is clicked or not,
                if totalItemChapterClicked === dataDummy.length && pay === true then open next chapter.

        const handleOpenChapter = () => {
            const lenghtChapter = dataDummy.length;
            totalItemChapterClicked = useSelector((state) => state.itemChapterClicked);

            if (dataDummy.length > 0 && totalItemClicked === dataDummy.length && pay === true) {
                setSelectedVideo(dataDummySecond(false));
            }else {
                return chapter 2 without opening that chapter
            }
        };
    */

    const handleVideoSelect = (videoSrc) => {
        onVideoSelect(videoSrc);
        setSelectedVideo(videoSrc);
    };

    return (
        <div className="container-fluid md:max-w-[400px] my-2 mx-1 sm:none md:absolute md:top-[7rem] md:right-6">
            <div className="p-3 h-full w-full relative flex flex-col text-gray-700 bg-white drop-shadow-lg shadow-lg lg:max-w-[400px] rounded-md bg-clip-border">
                <div className="p-1 flex justify-between items-center">
                    <h1 className="text-sm md:text-[20px] font-bold">
                        Materi Belajar
                    </h1>
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

                <div className="p-1 mt-2 w-full max-w-[349px] mx-auto">
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
                                {item.paid === true ? (
                                    <img
                                        src={
                                            selectedVideo === item.videoSrc
                                                ? "/icon/Pause.svg"
                                                : "/icon/Play.svg"
                                        }
                                        alt="play pause icon"
                                    />
                                ) : (
                                    <img
                                        src="/icon/lock.svg"
                                        alt="lock icon"
                                        className="w-6 h-6 opacity-50 cursor-not-allowed"
                                    />
                                )}
                            </div>
                            <div className="border-t mt-2 border-[#EBF3FC]"></div>
                        </div>
                    ))}
                </div>

                {/* add conditional for play non free video here  */}
                <div className="p-1 mt-2 w-full max-w-[349px] mx-auto">
                    <div className="flex justify-between items-center">
                        <h1 className="text-[12px]  text-[#6148FF] font-extrabold">
                            Chapter 2 - Memulai Desain
                        </h1>
                        <p className="text-[12px] font-extrabold text-[#489CFF]">
                            120 Menit
                        </p>
                    </div>
                    {dataDummySecond.map((item) =>
                        item?.paid ? (
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
                                            className={`text-[12px]  ${
                                                selectedVideo === item.videoSrc
                                                    ? "text-[#00CC00]"
                                                    : ""
                                            }`}
                                        >
                                            {item.title}
                                        </h1>
                                    </div>

                                    {item?.paid === true ? (
                                        <img
                                            src={
                                                selectedVideo === item.videoSrc
                                                    ? "/icon/Pause.svg"
                                                    : "/icon/Play.svg"
                                            }
                                            alt="play pause icon"
                                        />
                                    ) : (
                                        <img
                                            src="/icon/lock.svg"
                                            alt="lock icon"
                                            className="w-6 h-6 opacity-50 font-bold"
                                        />
                                    )}
                                </div>
                                <div className="border-t mt-2 border-[#EBF3FC]"></div>
                            </div>
                        ) : (
                            <div
                                key={item.id}
                                className="h-[52px] p-2 cursor-not-allowed disabled"
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

                                    {item?.paid === true ? (
                                        <img
                                            src={
                                                selectedVideo === item.videoSrc
                                                    ? "/icon/Pause.svg"
                                                    : "/icon/Play.svg"
                                            }
                                            alt="play pause icon"
                                        />
                                    ) : (
                                        <img
                                            src="/icon/lock.svg"
                                            alt="lock icon"
                                            className="w-6 h-6 opacity-50"
                                        />
                                    )}
                                </div>
                                <div className="border-t mt-2 border-[#EBF3FC]"></div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default VideoCardList;

VideoCardList.propTypes = {
    onVideoSelect: PropTypes.func,
};
