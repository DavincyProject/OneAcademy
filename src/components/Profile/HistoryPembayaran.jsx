const HistoryPembayaran = () => {
    return (
        <div className="w-full card py-5 my-2">
            <h1 className="text-2xl text-center font-bold mb-6">
                Riwayat Pembayaran
            </h1>

            <div className="flex gap-3 flex-wrap justify-center">
                <div className="card card-compact flex-grow w-full sm:max-w-[370px] bg-base-100 shadow-xl">
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
                            <span className="font-normal">by Angeloa Doe</span>
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
                        <div className="badge badge-red p-3">
                            <div className="flex gap-1 items-center">
                                <img
                                    src="/icon/Diamond.svg"
                                    alt="diamond icon"
                                ></img>
                                <p className="font-bold text-xs">
                                    Waiting for Payment
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card card-compact flex-grow w-full sm:max-w-[370px] bg-base-100 shadow-xl">
                    <figure>
                        <img
                            className="w-full object-cover"
                            src="/testing_course.png"
                            alt="card image"
                        />
                    </figure>
                    <div className="card-body flex flex-col">
                        <div className="text-[12px] flex flex-row justify-between font-Montserrat font-bold">
                            <h1 className="font-bold text-[#6148FF] text-sm">
                                UI/UX Design
                            </h1>
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
                            <span className="font-normal">by Angeloa Doe</span>
                        </div>

                        <div className="flex justify-between">
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
                        <div className="badge badge-green p-3">
                            <div className="flex gap-1 items-center">
                                <img
                                    src="/icon/Diamond.svg"
                                    alt="diamond icon"
                                ></img>
                                <p className="font-bold text-xs">Paid</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryPembayaran;
