import PropTypes from "prop-types";

const CardClassMe = ({ data }) => {
    return (
        <div className="flex flex-col  bg-white rounded-2xl m-auto mr-1 ml-1  ">
            <img src={data.Image} />
            <div className="flex flex-col mt-3 px-2 mb-3">
                <div className="flex flex-row justify-between font-Montserrat font-bold text-sm ">
                    <h3 className="text-DARKBLUE05">{data.nama}</h3>
                    <div className="flex flex-row gap-1">
                        <img src="/icon/ic_round-star.svg" />
                        <p>{data.rating}</p>
                    </div>
                </div>
                <h3
                    className="mt-1 font-Montserrat font-bold text-sm line-clamp-2 "
                    style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                >
                    {data.topic}
                </h3>
                <p className="mt-1 font-Montserrat font-normal text-xs">
                    {data.mentor}
                </p>
                <div className="flex flex-row justify-between font-Montserrat text-xs mt-2 font-normal">
                    <div className="flex flex-row gap-1">
                        <img src="/icon/mdi_badge-outline.svg" />
                        <p>{data.level}</p>
                    </div>
                    <div className="flex flex-row gap-1">
                        <img src="/icon/clarity_book-line.svg" />
                        <p>{data.modul}</p>
                    </div>
                    <div className="flex flex-row gap-1">
                        <img src="/icon/ri_time-fill.svg" />
                        <p>{data.durasi}</p>
                    </div>
                </div>
                <div>
                    <button className="flex flex-row bg-[#6148FF] gap-4 px-6 py-1 rounded-xl font-Montserrat text-xs font-bold mt-3 text-white">
                        <div className="flex flex-row gap-2">
                            <img src="/icon/Diamond.svg" />
                            <p>Beli</p>
                        </div>
                        <div className="flex flex-row gap-1">
                            <p>Rp</p>
                            {data.harga}
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

CardClassMe.propTypes = {
    data: PropTypes.object,
};

export default CardClassMe;
