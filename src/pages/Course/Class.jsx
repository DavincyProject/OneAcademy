import CourseCard from "../../components/Card/CourseCard";
import Filter from "../../components/Card/Filter";
import { FaFilter } from "react-icons/fa6";

const Class = () => {
    return (
        <div className="bg-[#EBF3FC] min-h-screen">
            <div className="flex flex-col justify-center items-center w-full p-2 px-3 lg:px-0">
                <div className="flex flex-grow justify-between items-center mt-[30px] w-full max-w-[1000px]">
                    <h1 className="text-base lg:text-[24px] font-bold">
                        Kelas Berjalan
                    </h1>
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

                <div className="flex flex-grow justify-between items-start gap-2 md:mt-[30px] w-full lg:max-w-[1000px]">
                    {/* This Filter Will Show up only on Desktop Screen */}
                    <div className="hidden md:block">
                        <Filter />
                    </div>

                    {/* This Filter Will Show up only on Mobile / Tablet Screen */}
                    <div className="flex flex-col flex-grow">
                        <div className="flex w-full gap-2">
                            <div className="flex flex-grow ">
                                <div className="flex flex-auto mt-2 md:hidden w-full">
                                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                    <button
                                        className="btn btn-ghost bg-[#6148FF] text-white w-full"
                                        onClick={() =>
                                            document
                                                .getElementById("my_modal_1")
                                                .showModal()
                                        }
                                    >
                                        <FaFilter />
                                        Filter
                                    </button>
                                    <dialog id="my_modal_1" className="modal">
                                        <div className="modal-box">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                                    ✕
                                                </button>
                                            </form>
                                            <Filter />
                                        </div>
                                    </dialog>
                                </div>
                            </div>
                            <div className="flex flex-grow">
                                <div className="flex flex-auto mt-2 md:hidden w-full">
                                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                    <button
                                        className="btn btn-ghost bg-[#6148FF] text-white w-full"
                                        onClick={() =>
                                            document
                                                .getElementById("my_modal_2")
                                                .showModal()
                                        }
                                    >
                                        <FaFilter />
                                        Course Filter
                                    </button>
                                    <dialog id="my_modal_2" className="modal">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">
                                                Course Filter
                                            </h3>
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                                    ✕
                                                </button>
                                            </form>
                                            <div className="flex flex-col mt-2 flex-grow gap-2 overflow-x-auto max-w-screen py-1">
                                                <button className="btn btn-blue flex-grow rounded-2xl">
                                                    All
                                                </button>
                                                <button className="btn btn-blue flex-grow rounded-2xl">
                                                    In Progress
                                                </button>
                                                <button className="btn btn-blue flex-grow rounded-2xl">
                                                    Done
                                                </button>
                                                <button className="btn btn-blue flex-grow rounded-2xl">
                                                    Premium Class
                                                </button>
                                                <button className="btn btn-blue flex-grow rounded-2xl">
                                                    Free
                                                </button>
                                            </div>
                                        </div>
                                    </dialog>
                                </div>
                            </div>
                        </div>

                        {/* This Filter Will Show up only on Desktop / Laptop Screen */}
                        <div className="flex flex-col items-start">
                            <div className="hidden md:flex mt-2 flex-grow gap-2 overflow-x-auto w-full py-1">
                                <button className="btn btn-blue flex-grow rounded-2xl">
                                    All
                                </button>
                                <button className="btn btn-blue flex-grow rounded-2xl">
                                    In Progress
                                </button>
                                <button className="btn btn-blue flex-grow rounded-2xl">
                                    Done
                                </button>
                                <button className="btn btn-blue flex-grow rounded-2xl">
                                    Premium Class
                                </button>
                                <button className="btn btn-blue flex-grow rounded-2xl">
                                    Free
                                </button>
                            </div>

                            <div className="flex flex-wrap w-full mt-2">
                                <CourseCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Class;
