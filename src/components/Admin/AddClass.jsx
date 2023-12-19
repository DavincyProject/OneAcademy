import { toast } from "react-hot-toast";
import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addcourse } from "../../redux/actions/adminActions";
const AddClass = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.course.listCategory);

  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [instructor, setInstructor] = useState("");
  const [courseType, setCourseType] = useState("");
  const [level, setLevel] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();
  const [categoryId, setCategoryId] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAddData = async (e) => {
    e.preventDefault();
    if (price === "") {
      toast.error("Please enter price");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("instructor", instructor);
    formData.append("courseType", courseType);
    formData.append("level", level);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("categoryId", categoryId);

    try {
      await dispatch(addcourse(formData));
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  };
  return (
    <div>
      <button
        className="btn btn-ghost badge-darkblue rounded-3xl text-white hover:bg-gray-700"
        onClick={() => document.getElementById("addClass").showModal()}
      >
        <IoAddCircleOutline size={20} color="white" />
        <small>Tambah Kelas</small>
      </button>
      <dialog id="addClass" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="text-darkblue btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
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
          <div className="py-4">
            <form onSubmit={handleAddData}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Thumbnail Kategori</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered"
                  onChange={handleImageChange}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nama Kelas</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Masukkan nama kelas..."
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Instructor</span>
                </label>
                <input
                  type="text"
                  value={instructor}
                  onChange={(e) => setInstructor(e.target.value)}
                  placeholder="Masukkan nama kelas..."
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Kategori</span>
                </label>
                <select
                  className="select select-bordered"
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                >
                  {category?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Tipe Kelas</span>
                </label>
                <select
                  className="select select-bordered"
                  value={courseType}
                  onChange={(e) => setCourseType(e.target.value)}
                >
                  <option disabled defaultValue>
                    -- Pilih Tipe Kelas --
                  </option>
                  <option value={"gratis"}>GRATIS</option>
                  <option value={"premium"}>PREMIUM</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Level</span>
                </label>
                <select
                  className="select select-bordered"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                >
                  <option disabled defaultValue>
                    -- Pilih Level --
                  </option>
                  <option value={"beginner"}>Beginner</option>
                  <option value={"intermediate"}>Intermediate</option>
                  <option value={"advanced"}>Advanced</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Harga</span>
                </label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Masukkan Harga kelas..."
                  className="input input-bordered placeholder-opacity-20"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Deskripsi Kelas</span>
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="textarea textarea-bordered"
                  placeholder="Masukkan Deskripsi tentang kelas ini..."
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">
                  {loading ? "Menyimpan..." : "Tambah Kelas"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddClass;
