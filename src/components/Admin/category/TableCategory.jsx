import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCategory } from "../../../redux/actions/courseActions";
import { formatDateAndTime } from "../../../utils/utils";
import { Link } from "react-router-dom";
import { deleteCategory } from "../../../redux/actions/adminActions";

const TableCategory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listCategory());
  }, [dispatch]);

  const handledeletecategory = (id) => {
    dispatch(deleteCategory(id));
  };

  const categoryList = useSelector((state) => state.course.listCategory);

  return (
    <div>
      {/* Table Of Information about course and level */}
      <div className="container-fluid flex justify-between mt-2">
        <h1 className="font-bold text-xl">Category Table</h1>
      </div>
      <div className="overflow-x-auto my-3 rounded-md">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="bg-[#EBF3FC] text-black">
              <th>ID Kategori</th>
              <th>Nama Kategori</th>
              <th>Tanggal Dibuat</th>
              <th>Update Terakhir</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {categoryList.map((list) => (
              <tr key={list.id}>
                <th>
                  <small>{list.id}</small>
                </th>
                <th>{list.name}</th>
                <td>{formatDateAndTime(list?.createdAt)}</td>
                <td>{formatDateAndTime(list?.updatedAt)}</td>
                <td className="flex gap-2">
                  <Link
                    to={`/admin/chapter/${list.id}`}
                    className="badge-darkblue p-1 rounded-md"
                  >
                    Ubah
                  </Link>
                  <button
                    onClick={() => handledeletecategory(list.id)}
                    className="badge-red p-1 rounded-md"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableCategory;
