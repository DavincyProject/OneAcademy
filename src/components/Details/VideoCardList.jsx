const VideoCardList = () => {
    const dataDummy = [
        {
            id: 1,
            number: 1,
            title: "Video 1",
        },
        {
            id: 2,
            number: 2,
            title: "Video 2",
        },
        {
            id: 3,
            number: 3,
            title: "Video 3",
        },
    ];

    const dataDummySecond = [
        {
            id: 1,
            number: 4,
            title: "Video 4",
        },
        {
            id: 2,
            number: 5,
            title: "Video 5",
        },
        {
            id: 3,
            number: 6,
            title: "Video 6",
        },
        {
            id: 4,
            number: 7,
            title: "Video 7",
        },
        {
            id: 5,
            number: 8,
            title: "Video 8",
        },
        {
            id: 6,
            number: 9,
            title: "Video 9",
        },
        {
            id: 7,
            number: 10,
            title: "Video 10",
        },
    ];

    return (
        <div className="container-fluid my-2">
            <div className="p-3 h-full relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-md bg-clip-border">
                <div className="p-1 flex justify-between items-center">
                    <h1 className="text-[20px] font-bold">Materi Belajar</h1>

                    <div className="flex gap-1">
                        <img src="/icon/progress-check.svg" />
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

                <div className="p-1 mt-2">
                    <div className="flex justify-between items-center">
                        <h1 className="text-[12px]  text-[#6148FF] font-extrabold">
                            Chapter 1 - Pendahuluan
                        </h1>
                        <p className="text-[12px] font-extrabold text-[#489CFF]">
                            60 Menit
                        </p>
                    </div>
                    {dataDummy.map((item) => (
                        <div key={item.id} className="h-[52px] p-2">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1 items-center mt-2">
                                    <h1 className="bg-[#EBF3FC] rounded-full w-[36px] h-[36px] flex justify-center items-center">
                                        {item.number}
                                    </h1>
                                    <h1 className="text-[12px]">
                                        {item.title}
                                    </h1>
                                </div>
                                <img src="/icon/Play.svg" />
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
                        <div key={item.id} className="h-[52px] p-2">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1 items-center mt-2">
                                    <h1 className="bg-[#EBF3FC] rounded-full w-[36px] h-[36px] flex justify-center items-center">
                                        {item.number}
                                    </h1>
                                    <h1 className="text-[12px]">
                                        {item.title}
                                    </h1>
                                </div>

                                <img src="/icon/Play.svg" />
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
