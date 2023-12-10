import { IoAddCircleOutline } from "react-icons/io5";
const AddClass = () => {
    return (
        <div>
            <button
                className="btn btn-ghost badge-darkblue rounded-3xl text-white hover:bg-gray-700"
                onClick={() => document.getElementById("addClass").showModal()}
            >
                <IoAddCircleOutline size={20} color="white" />
                Tambah
            </button>
            <dialog id="addClass" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="text-[#6148FF] btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            <img
                                src="/icon/close.svg"
                                className="w-10 absolute bottom-1"
                                alt="close button"
                            />
                        </button>
                    </form>
                    <h3 className="font-bold text-lg text-darkblue text-center mt-5">
                        Tambah Kelas
                    </h3>
                    <p className="py-4">
                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Thumbnail Kelas
                                    </span>
                                </label>
                                <input
                                    type="file"
                                    className="file-input file-input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Kode Kelas
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Masukkan kode kelas..."
                                    className="input input-bordered"
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Nama Kelas
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Masukkan nama kelas..."
                                    className="input input-bordered"
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Kategori</span>
                                </label>
                                <select className="select select-bordered">
                                    <option disabled selected>
                                        -- Pilih Kategori --
                                    </option>
                                    <option>UI/UX Design</option>
                                    <option>Web Development</option>
                                    <option>Product Management</option>
                                    <option>Android Development</option>
                                    <option>IOS Development</option>
                                    <option>Data Science</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Tipe Kelas
                                    </span>
                                </label>
                                <select className="select select-bordered">
                                    <option disabled selected>
                                        -- Pilih Tipe Kelas --
                                    </option>
                                    <option>GRATIS</option>
                                    <option>PREMIUM</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Level</span>
                                </label>
                                <select className="select select-bordered">
                                    <option disabled selected>
                                        -- Pilih Level --
                                    </option>
                                    <option>Beginner</option>
                                    <option>Intermediate</option>
                                    <option>Advanced</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Harga</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Masukkan Harga kelas..."
                                    className="input input-bordered placeholder-opacity-20"
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Deskripsi Kelas
                                    </span>
                                </label>
                                <textarea
                                    className="textarea textarea-bordered"
                                    placeholder="Masukkan Deskripsi tentang kelas ini..."
                                ></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">
                                    Simpan
                                </button>
                            </div>
                        </form>
                    </p>
                </div>
            </dialog>
        </div>
    );
};

export default AddClass;
