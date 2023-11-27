import CardCategori from "../components/Card/CardCategori";
import CardCourse from "../components/Card/CardCourse";

const Home = () => {
  return (
    <>
      <div className="mx-auto flex flex-col lg:flex-row bg-[#6148FF] relative">
        <div className="lg:w-[60%] relative">
          <img
            src="/people_dasboard.png"
            className="w-full lg:w-full"
            alt="People Dashboard"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-[#6148FF] via-white to-transparent opacity-80"></div>
        </div>
        <div className="flex container justify-center py-4 lg:w-[40%]">
          <div className="flex flex-col justify-center gap-4">
            <div className="flex flex-col justify-center font-Montserrat font-bold lg:text-2xl text-white gap-3">
              <h1>Belajar</h1>
              <h1>dari Praktisi Terbaik!</h1>
            </div>
            <button className="bg-white text-[#6148FF] font-Montserrat font-bold text-base rounded-[10px] py-2 w-[100%]">
              IKUTI KELAS
            </button>
          </div>
        </div>
      </div>

      <CardCategori />
      <CardCourse />
    </>
  );
};

export default Home;
