const Filter = () => {
  const checkColor = `[--chkbg:theme(colors.check.100)] [--chkfg:white]`;
  return (
    <div>
      <div className="card w-full min-w-[280px] bg-base-100 text-center mt-3">
        <div className="card-body">
          <h2 className="card-title text-[16px] font-bold">Filter</h2>
          <div className="text-left text-[#202244CC] font-medium">
            <div className="form-control items-start">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className={`checkbox bg-[#E8F1FF] border-[#B4BDC4] ${checkColor}`}
                />
                <span className="label-text ml-3 ">Paling Baru</span>
              </label>
            </div>
            <div className="form-control items-start">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className={`checkbox bg-[#E8F1FF] border-[#B4BDC4] ${checkColor}`}
                />
                <span className="label-text ml-3 ">Paling Populer</span>
              </label>
            </div>
            <div className="form-control items-start">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className={`checkbox bg-[#E8F1FF] border-[#B4BDC4] ${checkColor}`}
                />
                <span className="label-text ml-3">Promo</span>
              </label>
            </div>
          </div>

          {/* kategori */}
          <h2 className="card-title text-[16px] font-bold">Kategori</h2>
          <div className="text-left text-[#202244CC] font-medium">
            <div className="form-control items-start">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className={`checkbox bg-[#E8F1FF] border-[#B4BDC4] ${checkColor}`}
                />
                <span className="label-text ml-3">UI/UX Design</span>
              </label>
            </div>
            <div className="form-control items-start">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className={`checkbox bg-[#E8F1FF] border-[#B4BDC4] ${checkColor}`}
                />
                <span className="label-text ml-3 ">Web Development</span>
              </label>
            </div>
            <div className="form-control items-start">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className={`checkbox bg-[#E8F1FF] border-[#B4BDC4] ${checkColor}`}
                />
                <span className="label-text ml-3">Android Development</span>
              </label>
            </div>
            <div className="form-control items-start">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className={`checkbox bg-[#E8F1FF] border-[#B4BDC4] ${checkColor}`}
                />
                <span className="label-text ml-3">Data Science</span>
              </label>
            </div>
            <div className="form-control items-start">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className={`checkbox bg-[#E8F1FF] border-[#B4BDC4] ${checkColor}`}
                />
                <span className="label-text ml-3">Business Intelligence</span>
              </label>
            </div>
          </div>

          {/* Level Kesulitan */}
          <h2 className="card-title text-[16px] font-bold">Level Kesulitan</h2>
          <div className="text-left text-[#202244CC] font-medium">
            <div className="form-control items-start">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className={`checkbox bg-[#E8F1FF] border-[#B4BDC4] ${checkColor}`}
                />
                <span className="label-text ml-3">Semua Level</span>
              </label>
            </div>
            <div className="form-control items-start">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className={`checkbox bg-[#E8F1FF] border-[#B4BDC4] ${checkColor}`}
                />
                <span className="label-text ml-3 ">Beginner Level</span>
              </label>
            </div>
            <div className="form-control items-start">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className={`checkbox bg-[#E8F1FF] border-[#B4BDC4] ${checkColor}`}
                />
                <span className="label-text ml-3">Intermediate Level</span>
              </label>
            </div>
            <div className="form-control items-start">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className={`checkbox bg-[#E8F1FF] border-[#B4BDC4] ${checkColor}`}
                />
                <span className="label-text ml-3">Advanced Level</span>
              </label>
            </div>
          </div>
        </div>
        <div className="card-actions w-full">
          <button className="btn btn-ghost w-full mb-4 text-red-500 font-medium">
            Hapus Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
