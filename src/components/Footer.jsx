import { IoLogoInstagram } from "react-icons/io5";
import { SlSocialGithub } from "react-icons/sl";
import { RiYoutubeLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const hidePath = ["/login", "/register", "/reset", "/validate"];

  const isHidden =
    hidePath.includes(location.pathname) ||
    location.pathname.startsWith("/forgot/") ||
    location.pathname.startsWith("/details/");

  if (isHidden) {
    return null;
  }

  return (
    <div>
      <footer className="text-white p-4 flex flex-col justify-between md:flex-row w-full h-auto px-4 py-8 border-t-4 border-indigo-500 bg-slate-950 ">
        <div className="mb-4 flex items-center flex-col">
          <img src="/testnew.svg" alt="logo" className="w-32" />
          <p className="text-sm text-center md:text-start mt-2 space-x-4">
            Website ini dibuat dengan tujuan memudahkan anda dalam hal belajar
            dan sudah di lengkapi dengan video pembelajarannya.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-sm font-bold mb-2">Our Front End Team</h3>
          <ul className="flex gap-2 flex-col">
            <li>
              <Link
                to={"https://github.com/DavincyProject"}
                target="_blank"
                className="flex items-center gap-2 hover:text-blue-400 w-fit"
              >
                <SlSocialGithub size={20} /> DavincyProject
              </Link>
            </li>
            <li>
              <Link
                to={"https://github.com/aminkarben"}
                target="_blank"
                className="flex items-center gap-2 hover:text-blue-400 w-fit"
              >
                <SlSocialGithub size={20} /> aminkarben
              </Link>
            </li>
            <li>
              <Link
                to={"https://github.com/AditFebriNH"}
                target="_blank"
                className="flex items-center gap-2 hover:text-blue-400 w-fit"
              >
                <SlSocialGithub size={20} /> AditFebriNH
              </Link>
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-sm  font-bold mb-2">Our Back End Team</h3>
          <ul className="flex gap-2 flex-col">
            <li>
              <Link
                to={"https://github.com/dimasz555"}
                target="_blank"
                className="flex items-center gap-2 hover:text-blue-400 w-fit"
              >
                <SlSocialGithub size={20} /> dimasz555
              </Link>
            </li>
            <li>
              <Link
                to={"https://github.com/TehBotolBayu"}
                target="_blank"
                className="flex items-center gap-2 hover:text-blue-400 w-fit"
              >
                <SlSocialGithub size={20} /> TehBotolBayu
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col ">
          <div className="flex flex-col">
            <h3 className="text-sm font-bold mb-2">Social Media</h3>
            <ul className="flex gap-2 flex-col">
              <Link
                to={"https://www.instagram.com/academybinar/"}
                target="_blank"
                className="flex items-center gap-2 hover:text-blue-400 w-fit"
              >
                <IoLogoInstagram size={20} /> academybinar
              </Link>
              <Link
                to={"https://github.com/DavincyProject/OneAcademy"}
                target="_blank"
                className="flex items-center gap-2 hover:text-blue-400 w-fit"
              >
                <SlSocialGithub size={20} /> One Academy
              </Link>
              <Link
                to={"https://www.youtube.com/c/BinarAcademy"}
                target="_blank"
                className="flex items-center gap-2 hover:text-blue-400 w-fit"
              >
                <RiYoutubeLine size={20} /> BinarAcademy
              </Link>
            </ul>
          </div>
        </div>
      </footer>
      <p className="text-xs py-3 text-center h-full text-white bg-slate-950">
        <span className="font-bold">
          Copyright &#169; 2023 One Academy, All Rights reserved.
        </span>
        <br /> Made by Kelompok B15 <br />{" "}
        <span className="text-[#a5c9ca]">
          All icons and logo are property of their respective owners.
        </span>
      </p>
    </div>
  );
};

export default Footer;
