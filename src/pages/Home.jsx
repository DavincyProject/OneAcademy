import CardCategori from "../components/Card/CardCategori";
import CardCourse from "../components/Card/CardCourse";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            ></ul>
          </div>
        </div>
      </div>

      <div className="mx-auto flex flex-col lg:flex-row bg-[#6148FF]">
        <div className="lg:w-[60%] ">
          <img src="/people_dasbord.png" className="w-full lg:w-full " />
        </div>
        <div className=" flex  container py-4 lg:w-[40%] ">
          <div className="flex flex-col justify-center gap-4">
            <div className="flex flex-col font-Montserrat font-bold  lg:text-2xl text-white gap-3">
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
      <Navbar />
    </>
  );
};

export default Home;
