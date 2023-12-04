import { useState } from "react";
import course from "../../data/DataCourse";
import populer from "../../data/DataPopular";
import { Link } from "react-router-dom";
import { BiCategory } from "react-icons/bi";

// This card for HomePages

const CardCourse = () => {
  const [selectId, setSelectId] = useState(null);

  const handleBadgeClick = (id) => {
    setSelectId(id);
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center max-w-[1200px] container gap-5 pt-[26px] pb-[53px] ">
        <div className="flex flex-row container justify-between px-6">
          <h2 className="text-xl font-bold">Kursus Populer</h2>
          <Link to="/class" className="font-extrabold text-xs text-[#6148FF]">
            Lihat Semua
          </Link>
        </div>

        <div className="hidden container sm:flex gap-3 justify-center items-center max-md:flex-wrap max-md:justify-center md:px-0">
          {populer.map((datas) => (
            <div key={datas.id}>
              <div
                className={`badge hover:cursor-pointer text-xs text-center  ${
                  selectId === datas.id ? "badge-darkblue" : "badge-lightwhite"
                } font-bold p-5`}
                onClick={() => handleBadgeClick(datas.id)}
              >
                {datas.popular}
              </div>
            </div>
          ))}
        </div>

        <div className="sm:hidden container px-5">
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn w-full bg-[#6148FF] text-white hover:bg-[#402eb4]"
            onClick={() => document.getElementById("category").showModal()}
          >
            <BiCategory size={20} />
            Select Category
          </button>
          <dialog id="category" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>

              <h3 className="font-bold text-lg">Select Category</h3>
              <p className="py-3 flex flex-col gap-2">
                {populer.map((datas) => (
                  <div key={datas.id}>
                    <div
                      className={`badge w-full hover:cursor-pointer ${
                        selectId === datas.id
                          ? "badge-darkblue"
                          : "badge-lightwhite"
                      } font-bold p-5`}
                      onClick={() => handleBadgeClick(datas.id)}
                    >
                      {datas.popular}
                    </div>
                  </div>
                ))}
              </p>
            </div>
          </dialog>
        </div>

        <div className="flex gap-6 justify-center md:justify-around items-center flex-wrap px-5">
          {course.map((data) => (
            <Link
              to={`/details/${data.id}`}
              key={data.id}
              className="shadow-md bg-white flex flex-col flex-grow sm:flex-none items-stretch pb-2.5 rounded-2xl max-w-[323px]"
            >
              <img
                loading="lazy"
                srcSet={data.image}
                className="aspect-[4.04] w-full overflow-hidden h-[85px] object-cover rounded-t-2xl"
              />
              <div className="flex w-full flex-col mt-1.5 px-2.5">
                <div className="items-stretch self-stretch flex w-full justify-between gap-5">
                  <div className="text-indigo-600 text-xs font-bold leading-4 flex-1">
                    {data.nama}
                  </div>
                  <div className="justify-between items-stretch flex gap-0 pl-20 max-md:pl-5">
                    <img loading="lazy" src="/icon/ic_round-star.svg" />
                    <div className="text-indigo-950 text-xs font-semibold leading-4 grow whitespace-nowrap">
                      {data.rating}
                    </div>
                  </div>
                </div>
                <div className="self-stretch text-black text-xs font-bold leading-4">
                  <span className="font-bold text-indigo-950">
                    {data.topic}
                    <br />
                  </span>
                  <span className=" text-black">{data.mentor}</span>
                </div>
                <div className="items-stretch self-stretch flex justify-between gap-0">
                  <div className="flex gap-1 items-center">
                    <img
                      loading="lazy"
                      src="/icon/mdi_badge-outline.svg"
                      className="aspect-square object-contain object-center w-3 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-indigo-600 text-xs font-semibold leading-4 self-stretch">
                      {data.level}
                    </div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img
                      loading="lazy"
                      src="/icon/clarity_book-line.svg"
                      className="aspect-square object-contain object-center w-3 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-black text-xs font-normal leading-4 self-stretch">
                      {data.modul}
                    </div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img
                      loading="lazy"
                      src="/icon/ri_time-fill.svg"
                      className="aspect-square object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-black text-xs font-normal leading-4 self-stretch">
                      {data.durasi}
                    </div>
                  </div>
                </div>
                <div className="badge badge-blue p-3 mt-2">
                  <div className="flex gap-1 items-center font-Poppins font-bold">
                    <img src="/icon/Diamond.svg" alt="diamond icon" />
                    <span className="mr-2">Beli</span> Rp {""}
                    {data.harga}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
