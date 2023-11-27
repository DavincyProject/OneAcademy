const CardCategori = () => {
  return (
    <div className="mx-auto flex flex-col lg:flex-row bg-[#6148FF]">
      <div className="lg:w-[60%]">
        <img src="/people_dasbord.png" className="w-full lg:w-full " />
      </div>
      <div className=" flex  container py-4 lg:w-[40%]">
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
  );
};

export default CardCategori;
