import course from "../../data/DataCourse";
import populer from "../../data/DataPopular";
import { Link } from "react-router-dom";

const CardCourse = () => {
  return (
    <div className="mx-auto flex justify-center ">
      <div className="flex flex-col container gap-5 pt-[26px] pb-[53px]">
        <div className="flex flex-row container font-Montserrat  justify-between">
          <h2 className="font-bold text-xl">Kursus Populer</h2>
          <p className="font-extrabold text-xs text-[#6148FF]">Lihat Semua</p>
        </div>
        <div className="flex flex-row container justify-between">
          {populer.map((datas) => (
            <div key={datas.id}>
              <div className="rounded-2xl bg-[#EBF3FC] text-black">
                {datas.popular}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row container justify-between gap-4">
          {course.map((data) => (
            <div key={data.id}>
              <Link to={`/details/${data.id}`}>
                <div className="flex flex-col bg-white rounded-2xl drop-shadow-xl">
                  <img src={data.Image} />
                  <div className="flex flex-col mt-3 px-2 mb-3">
                    <div className="flex flex-row justify-between font-Montserrat font-bold text-sm ">
                      <h3 className="text-[#6148FF]">{data.nama}</h3>
                      <div className="flex gap-1">
                        <img
                          src="/icon/ic_round-star.svg"
                          alt="star icon"
                        ></img>
                        <p>{data.rating}</p>
                      </div>
                    </div>
                    <h3 className="mt-1 font-Montserrat font-bold text-sm">
                      {data.topic}
                    </h3>
                    <p className="mt-1 font-Montserrat font-normal text-xs">
                      {data.mentor}
                    </p>
                    <div className="flex flex-row justify-between font-Montserrat text-xs mt-2 font-normal">
                      <div className="flex flex-row gap-1">
                        <p>{data.level}</p>
                      </div>
                      <div className="flex flex-row gap-1">
                        <p>{data.modul}</p>
                      </div>
                      <div>
                        <p>{data.durasi}</p>
                      </div>
                    </div>
                    <div>
                      <button className="flex flex-row bg-LightBlue4 gap-4 px-6 py-1 rounded-xl font-Montserrat text-xs font-bold mt-3 text-white">
                        <div className="flex flex-row gap-2">
                          <p>Beli</p>
                        </div>
                        <div className="flex flex-row gap-1">
                          <p>Rp</p>
                          {data.harga}
                        </div>
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
