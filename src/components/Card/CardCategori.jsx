import { Link } from "react-router-dom";

const CardCategori = () => {
  const category = [
    {
      id: 1,
      nama: "UI/UX Design",
      Image: "/testing.png",
    },
    {
      id: 2,
      nama: "Product Management",
      Image: "/testing.png",
    },
    {
      id: 3,
      nama: "Web Development",
      Image: "/testing.png",
    },
    {
      id: 4,
      nama: "Android Development",
      Image: "/testing.png",
    },
    {
      id: 5,
      nama: "IOS Development",
      Image: "/testing.png",
    },
    {
      id: 6,
      nama: "Data Science",
      Image: "/testing.png",
    },
  ];

  return (
    <div className=" flex mx-auto justify-center bg-[#EBF3FC]">
      <div className="flex w-full flex-col pt-[26px] pb-[14px] gap-5 container">
        <div className="flex justify-between container px-6 md:px-0">
          <h2 className="text-xl font-bold">Kategori Belajar</h2>
          <Link
            to="/"
            className=" font-extrabold text-xs max-w-fit text-[#6148FF]"
          >
            Lihat Semua
          </Link>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-3">
            {category.map((data) => (
              <div key={data.id}>
                <div className="flex flex-col justify-center px-1 md:w-[12rem]">
                  <img src={data.Image} />
                  <div className="text-black font-semibold text-xs py-3 self-center">
                    {data.nama}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCategori;
