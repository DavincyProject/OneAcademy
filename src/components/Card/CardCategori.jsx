import categori from "../../data/DataCategori";

const CardCategori = () => {
  return (
    <div className=" flex mx-auto justify-center bg-[#EBF3FC]">
      <div className="flex w-full flex-col pt-[26px] pb-[14px] gap-5 container">
        <div className="flex flex-row justify-between container">
          <h2 className="text-xl font-Montserrat font-bold ">
            Kategori Belajar
          </h2>
          <p className="font-Montserrat font-extrabold text-xs max-w-fit text-[#6148FF]">
            Lihat Semua
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-6 justify-between gap-3  w-full container">
          {categori.map((data) => (
            <div key={data.id}>
              <div className="flex flex-col justify-center px-1 ">
                <img src={data.Image} />
                <div className="text-black font-Montserrat font-semibold text-xs py-3 self-center">
                  {data.nama}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCategori;
