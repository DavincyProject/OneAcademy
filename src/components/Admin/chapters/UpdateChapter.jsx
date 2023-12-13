import { useDispatch, useSelector } from "react-redux";
import { updateChapter } from "../../../redux/actions/adminActions";
import { useParams } from "react-router-dom";
import { useCallback, useState } from "react";
import Proptype from "prop-types";
import { listCategory } from "../../../redux/actions/courseActions";
import { useEffect } from "react";

const UpdateChapter = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const details = useSelector((state) => state.course.courseDetails);
  const category = useSelector((state) => state.course.listCategory);

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(details.title);
  const [instructor, setInstructor] = useState(details.instructor);
  const [description, setDescription] = useState(details.description);
  const [price, setPrice] = useState(details.price);
  const [level, setLevel] = useState(details.level);
  const [courseType, setCourseType] = useState(details.courseType);
  const [categoryId, setCategoryId] = useState(details.categoryId);

  useEffect(() => {
    dispatch(listCategory());
  }, [dispatch]);

  const handleUpdateData = () => {
    dispatch(
      updateChapter(
        id,
        image,
        title,
        instructor,
        description,
        price,
        level,
        courseType,
        categoryId
      )
    );
  };

  const handleImageChange = useCallback(
    (e) => {
      const newImage = e.target.files[0];

      if (newImage) {
        const formData = new FormData();
        formData.append("image", newImage);
        setImage(formData);
      } else {
        setImage(details.image?.url);
      }
    },
    [details.image?.url]
  );

  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById("update").showModal()}
      >
        Update Chapter
      </button>
      <dialog id="update" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Update Chapter</h3>
          <div className="py-4">
            <form onSubmit={handleUpdateData}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Thumbnail Kelas</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered"
                  onChange={handleImageChange}
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
                  placeholder={details.instructor}
                  className="input input-bordered"
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
                  placeholder={details.title}
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
                  <option disabled selected>
                    active : {details.courseType}
                  </option>
                  <option value="Gratis">Gratis</option>
                  <option value="Premium">Premium</option>
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
                  <option disabled selected>
                    active : {details.level}
                  </option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
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
                  placeholder={details.price}
                  className="input input-bordered placeholder-opacity-20"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Deskripsi Kelas</span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder={details.description}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Simpan</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default UpdateChapter;
UpdateChapter.propTypes = {
  details: Proptype.object,
};
