import course from "../../data/DataCourse";
import populer from "../../data/DataPopular";
import { Link } from "react-router-dom";

const CardCourse = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col container gap-5 pt-[26px] pb-[53px]">
        <div className="flex flex-row container justify-between px-6">
          <h2 className="text-xl font-bold">Kursus Populer</h2>
          <Link to="/" className="font-extrabold text-xs text-[#6148FF]">
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
        <div className="container flex flex-wrap justify-around gap-4">
          {course.map((data) => (
            <div key={data.id}>
              <Link to={`/details/${data.id}`}>
                <div className="flex flex-col bg-white rounded-2xl drop-shadow-xl w-[323px] ">
                  <img src={data.Image} />
                  <div className="flex flex-col mt-3 px-2 mb-3">
                    <div className="text-[12px] flex flex-row justify-between font-Montserrat font-bold ">
                      <h3 className="text-[#6148FF]">{data.nama}</h3>
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
                        <h1 className="text-[12px] text-[#6148FF] font-semibold">
                          {data.level}
                        </h1>
                      </div>
                      <div className="flex gap-1">
                        <img
                          src="/icon/clarity_book-line.svg"
                          alt="module icon"
                        ></img>
                        <h1 className="text-[12px]">{data.modul}</h1>
                      </div>
                      <div className="flex gap-1">
                        <img src="/icon/ri_time-fill.svg" alt="time icon"></img>
                        <h1 className="text-[12px]">{data.durasi}</h1>
                      </div>
                    </div>
                    <div className="">
                      <button className="flex flex-row bg-[#489CFF] gap-4 px-6 py-1 rounded-xl font-Montserrat text-xs font-bold mt-3 text-white">
                        <div className="flex gap-2">
                          <img src="/icon/Diamond.svg" alt="time icon"></img>
                          <h1 className="text-[12px] font-bold">Beli</h1>
                        </div>
                        Rp{""} {data.harga}
                      </button>
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
