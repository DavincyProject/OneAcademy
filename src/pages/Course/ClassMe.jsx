import Filter from "../../components/Card/CardFilter";
import { ButtonFilter } from "../../data/DataFilter";
import data from "../../data/DataCourse";
import Card from "../../components/Card/CardClassMe";

const ClassMe = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen pb-16 bg-[#EBF3FC]">
        <div className="flex flex-col gap-5 ">
          <div className="flex flex-row justify-between w-full mt-14">
            <p className="w-full font-bold text-2xl">Topik Kelas</p>
            <form className="relative flex flex-row">
              <input
                type="search"
                placeholder="Cari Kelas"
                className="w-full outline-none focus:outline-none px-4 py-[6px] border-2 rounded-2xl border-[#6148FF]"
              />
              <button
                type="submit"
                className="absolute bottom-1/2 right-2 translate-y-1/2 rounded-lg bg-[#6148FF] p-1"
              >
                <img src="/icon/search.svg" />
              </button>
            </form>
          </div>
          <div className="flex flex-row gap-14">
            <Filter />
            <div className="flex flex-col w-full gap-7">
              <div className="flex flex-row justify-between w-full">
                {ButtonFilter.map((data) => (
                  <div key={data.id} className="">
                    <button className="border-2 py-2 px-16 rounded-2xl bg-white">
                      {data.nama}
                    </button>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4">
                {data.map((datas) => (
                  <Card key={datas.id} data={datas} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassMe;
