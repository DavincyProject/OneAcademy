import course from "../../data/DataCourse";
import populer from "../../data/DataPopular";
import { Link } from "react-router-dom";

const CardCourse = () => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col container gap-5 pt-[26px] pb-[53px]">
                <div className="flex flex-row container justify-between px-6">
                    <h2 className="text-xl font-bold">Kursus Populer</h2>
                    <Link
                        to="/"
                        className="font-extrabold text-xs text-[#6148FF]"
                    >
                        Lihat Semua
                    </Link>
                </div>
                <div className="container flex flex-wrap justify-evenly items-center gap-3 px-6 md:px-0">
                    {populer.map((datas) => (
                        <div key={datas.id}>
                            <div className="rounded-2xl text-[12.5px] md:text-[15px] font-bold bg-[#EBF3FC] text-black p-2">
                                {datas.popular}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="container flex flex-wrap justify-around gap-5 lg:gap-0">
                    {course.map((data) => (
                        <div
                            key={data.id}
                            className="flex-grow px-5 max-w-[400px]"
                        >
                            <Link to={`/details/${data.id}`}>
                                <div className="flex flex-col bg-white rounded-2xl drop-shadow-xl  ">
                                    <img src={data.Image} />
                                    <div className="flex flex-col my-3 px-2 ">
                                        <div className="text-[12px] flex flex-row justify-between font-Montserrat font-bold ">
                                            <h3 className="text-[#6148FF] font-Poppins">
                                                {data.nama}
                                            </h3>
                                            <div className="flex gap-1">
                                                <img
                                                    src="/icon/ic_round-star.svg"
                                                    alt="star icon"
                                                ></img>
                                                <p>{data.rating}</p>
                                            </div>
                                        </div>
                                        <h3 className="mt-1 font-Montserrat font-bold text-[12px]">
                                            {data.topic}
                                        </h3>
                                        <p className="mt-1 font-Montserrat font-normal text-[12px]">
                                            {data.mentor}
                                        </p>
                                        <div className="flex items-center justify-between gap-3 mt-2">
                                            <div className="flex gap-1">
                                                <img
                                                    src="/icon/mdi_badge-outline.svg"
                                                    alt="level icon"
                                                ></img>
                                                <h1 className="text-[12px] text-[#6148FF] font-semibold font-Poppins">
                                                    {data.level}
                                                </h1>
                                            </div>
                                            <div className="flex gap-1">
                                                <img
                                                    src="/icon/clarity_book-line.svg"
                                                    alt="module icon"
                                                ></img>
                                                <h1 className="text-[12px] font-Poppins">
                                                    {data.modul}
                                                </h1>
                                            </div>
                                            <div className="flex gap-1">
                                                <img
                                                    src="/icon/ri_time-fill.svg"
                                                    alt="time icon"
                                                ></img>
                                                <h1 className="text-[12px] font-Poppins">
                                                    {data.durasi}
                                                </h1>
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
                                                    Rp{""} {data.harga}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardCourse;
