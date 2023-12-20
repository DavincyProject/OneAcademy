const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 flex flex-col md:flex-row w-full h-auto mt-4 px-4 py-8 border-t-4 border-indigo-500 bg-slate-950 overflow-x-auto">
      <div className="flex-1">
        <div className="text-xl font-bold mb-2 "></div>
        <img src="/testnew.svg" alt="logo" className="w-14" />
        <p className="text-sm leading-relaxed mt-2 flex justify-center space-x-4 mb-4 mt-5">
          Website ini dibuat dengan tujuan memudahkan anda dalam hal belajar dan
          sudah di lengkapi dengan video pembelajarannya.
        </p>
      </div>

      <div className="md:w-1/3 md:ml-4 mt-2  ">
        <h3 className="text-sm  font-bold mb-2">Information Company</h3>
        <ul className="text-sm leading-loose  ">
          <li>
            <span className="font-semibold">Phone :</span> +123454768
          </li>
          <li>
            <span className="font-semibold">Email :</span> OneAcademy@gmail.com
          </li>
          <li>
            <span className="font-semibold mt-3">Address :</span> Jl. Mangga
            besar No 27 Kemang, Jakarta Selatan.
          </li>
        </ul>
      </div>

      <div className="flex justify-center space-x-4 mb-4 mt-5">
        <img
          src="/icon/instagram.svg"
          className=" h-8 w-8 rounded-full"
          alt="Instagram"
        />

        <img
          src="/icon/github.svg"
          className=" h-8 w-8 rounded-full"
          alt="Github"
        />

        <img
          src="/icon/twitter.svg"
          className=" h-8 w-8 rounded-full"
          alt="Twitter"
        />
      </div>
      <p className="text-sm text-center space-x-6 mb-6 mt-5">
        Copyright &#169; 2023 One Academy made with by Kelompok B15
      </p>
    </footer>
  );
};

export default Footer;
