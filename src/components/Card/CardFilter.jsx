import { FilterKelas, kategori, Kesulitan } from "../../data/DataFilter";

const CardFilter = () => {
  return (
    <div className="px-6 py-[10px] bg-white rounded-2xl ">
      <div className="flex flex-col gap-3 w-44">
        <p className="font-bold text-base ">Filter</p>
        {FilterKelas.map((data) => (
          <div key={data.id}>
            <div className="flex flex-row gap-2 max-w-full">
              <input
                type="checkbox"
                className="bg-[#6148FF] border-[#B4BDC4]"
              />
              <div className="text-xs font-normal">{data.nama}</div>
            </div>
          </div>
        ))}
        <p className="font-bold text-base">Kategori</p>
        {kategori.map((datas) => (
          <div key={datas.id}>
            <div className="flex flex-row gap-2 ">
              <input type="checkbox" />
              <div className="text-xs font-normal">{datas.nama}</div>
            </div>
          </div>
        ))}
        <p className="font-bold text-base">Level Kesulitan</p>
        {Kesulitan.map((datass) => (
          <div key={datass.id}>
            <div className="flex flex-row gap-2">
              <input type="checkbox" />
              <div className="text-xs font-normal">{datass.nama}</div>
            </div>
          </div>
        ))}
        <button className="font-medium text-xs mt-5 text-red-500">
          Hapus Filter
        </button>
      </div>
    </div>
  );
};

export default CardFilter;
