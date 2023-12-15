import { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const VideoCardList = ({ onVideoSelect }) => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const { courseMaterial } = useSelector((state) => state.course);

    function extractVideoId(videoURL) {
        const videoId = videoURL.split("/").pop().split("?")[0];
        const linkEmbed = `https://www.youtube.com/embed/${videoId}`;
        return linkEmbed;
    }

    const handleVideoSelect = (videoSrc) => {
        onVideoSelect(videoSrc);
        setSelectedVideo(videoSrc);
    };

    return (
        <div className="container-fluid xs:w-full sm:max-w-[320px] xl:max-w-[400px] lg:absolute lg:top-[8rem] md:right-5 xl:right-20">
            <div className="p-3 h-full w-full relative flex flex-col text-gray-700 bg-white drop-shadow-lg shadow-lg lg:max-w-[400px] rounded-md bg-clip-border">
                <div className="p-1 flex justify-between items-center">
                    <h1 className="text-sm xl:text-[20px] font-bold">
                        Materi Belajar
                    </h1>
                    <div className="flex gap-1">
                        <img
                            src="/icon/progress-check.svg"
                            alt="progress check"
                        />
                        <div className="w-[150px] h-[16px] bg-gray-200 rounded-full dark:bg-gray-700">
                            <div
                                className="bg-darkblue h-[16px] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                                style={{ width: "50%" }}
                            >
                                50%
                            </div>
                        </div>
                    </div>
                </div>

                {courseMaterial.length > 0 ? (
                    courseMaterial.map((chapter) => (
                        <div
                            key={chapter.id}
                            className="p-1 mt-2 w-full md:max-w-[350px] mx-auto"
                        >
                            <div className="flex justify-between items-center">
                                <h2 className="text-[12px] mx-1 text-darkblue font-extrabold">
                                    Chapter {chapter.step} - {chapter.title}
                                </h2>
                                <p className="text-[11px] font-extrabold text-center text-[#489CFF]">
                                    {chapter.totalDuration} Menit
                                </p>
                            </div>
                            {chapter.material.map((material) => (
                                <div
                                    key={material.id}
                                    onClick={() =>
                                        handleVideoSelect(
                                            extractVideoId(material.videoURL)
                                        )
                                    }
                                    className="h-[52px] p-2 cursor-pointer"
                                >
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-2 items-center mt-2">
                                            <h1 className="bg-[#EBF3FC] rounded-full w-[36px] h-[36px] flex justify-center items-center">
                                                {material.step}
                                            </h1>
                                            <h1
                                                className={`text-[12px] max-w-[251px] ${
                                                    selectedVideo ===
                                                    extractVideoId(
                                                        material.videoURL
                                                    )
                                                        ? "text-[#00CC00]"
                                                        : ""
                                                }`}
                                            >
                                                {material.title}
                                            </h1>
                                        </div>
                                        {material.status === "Selesai" ? (
                                            <img
                                                src={
                                                    selectedVideo ===
                                                    extractVideoId(
                                                        material.videoURL
                                                    )
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
                    ))
                ) : (
                    <p className="p-1 mt-2 w-full md:max-w-[350px] mx-auto">
                        Data Not Available
                    </p>
                )}

                {/* add conditional for play non free video here and need to be paid
                <div className="p-1 mt-2 w-full md:max-w-[349px] mx-auto">
                    <div className="flex justify-between items-center">
                        <h1 className="text-[12px]  text-darkblue font-extrabold">
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
                </div> */}
            </div>
        </div>
    );
};

export default VideoCardList;

VideoCardList.propTypes = {
    onVideoSelect: PropTypes.func,
};
