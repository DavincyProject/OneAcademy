const MaterialTable = () => {
  return (
    <div>
      <>
        <div className="p-1 container-fluid flex justify-between items-center mt-2">
          <h1 className="font-bold text-xl mt-5">Kelola Material</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead className="bg-zinc-500 text-white">
              <tr>
                <th>Chapter</th>
                <th>Name</th>
                <th>Chapter id</th>
                <th>Created At</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="hover">
                <th></th>
                <td></td>
                <td></td>
                <td></td>
                <td className="flex gap-2">
                  <button className="badge-red p-1 rounded-md">Hapus</button>
                </td>
              </tr>
            </tbody>
          </table>
          <small className="text-red-500">
            jika tidak muncul data yang baru, refresh halaman ini
          </small>
        </div>
      </>
    </div>
  );
};

export default MaterialTable;
