import { useState } from "react";

const EditProfile = () => {
    // const [image, setImage] = useState();
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [telepon, setTelepon] = useState("");
    const [negara, setNegara] = useState("");
    const [kota, setKota] = useState("");

    const validateNomor = (e) => {
        const inputValue = e.target.value;

        //menghilangkan karakter yang bukan angka
        const numericValue = inputValue.replace(/\D/g, "");

        // mengatur panjang maksimal nomor telepon ke 15
        const maxLength = 14;
        const truncateValueNomor = numericValue.slice(0, maxLength);

        setTelepon(truncateValueNomor);
    };

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        console.log(nama, email, telepon, negara, kota);
    };

    return (
        <div className="w-full card py-5 my-2">
            <form
                onSubmit={handleUpdateProfile}
                className="flex flex-col justify-center items-center"
            >
                {/* Change Image */}
                <div className="avatar mb-2">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>

                {/* Change text data */}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Nama</span>
                    </div>
                    <input
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        type="text"
                        placeholder="Masukkan Nama"
                        className="input input-bordered placeholder:text-[12px] placeholder:text-[#8A8A8A] w-full rounded-2xl max-w-xs"
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Email</span>
                    </div>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Masukkan Email"
                        className="input input-bordered placeholder:text-[12px] placeholder:text-[#8A8A8A] w-full rounded-2xl max-w-xs"
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Nomor Telepon</span>
                    </div>
                    <input
                        value={telepon}
                        onChange={validateNomor}
                        type="tel"
                        placeholder="Masukkan Nomor Telepon"
                        className="input input-bordered placeholder:text-[12px] placeholder:text-[#8A8A8A] w-full rounded-2xl max-w-xs"
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Negara</span>
                    </div>
                    <input
                        value={negara}
                        onChange={(e) => setNegara(e.target.value)}
                        type="text"
                        placeholder="Masukkan Negara tempat tinggal"
                        className="input input-bordered placeholder:text-[12px] placeholder:text-[#8A8A8A] w-full rounded-2xl max-w-xs"
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Kota</span>
                    </div>
                    <input
                        value={kota}
                        onChange={(e) => setKota(e.target.value)}
                        type="text"
                        placeholder="Masukkan kota tempat tinggal"
                        className="input input-bordered placeholder:text-[12px] placeholder:text-[#8A8A8A] w-full rounded-2xl max-w-xs"
                    />
                </label>
                <button className="btn btn-primary text-white rounded-3xl w-full max-w-xs mt-3">
                    Simpan Profil Saya
                </button>
            </form>
        </div>
    );
};

export default EditProfile;
