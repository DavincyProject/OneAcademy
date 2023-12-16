import { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { validatePhoneInput } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../redux/actions/profileActions";
import { useEffect } from "react";

const EditProfile = ({ profileData }) => {
    const [loading, setLoading] = useState(false);
    const [avatar, setAvatar] = useState("");
    const [name, setName] = useState(profileData?.name || "");
    const [phone, setPhone] = useState(profileData?.phone || "");
    const [country, setCountry] = useState(profileData?.country || "");
    const [city, setCity] = useState(profileData?.city || "");

    const dispatch = useDispatch();
    const profile = profileData;

    useEffect(() => {
        setName(profileData?.name || "");
        setPhone(profileData?.phone || "");
        setCountry(profileData?.country || "");
        setCity(profileData?.city || "");
    }, [profileData]);

    const handleImageChange = useCallback((e) => {
        const avatar = e.target.files[0];

        if (avatar) {
            const formData = new FormData();
            formData.append("avatar", avatar);

            setAvatar(formData);
        }
    }, []);

    const handleUpdateProfile = async (e) => {
        e.preventDefault();

        setLoading(true);

        
        try {
            await dispatch(updateProfile(name, phone, country, city, avatar));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full card py-5 my-2">
            <form
                onSubmit={handleUpdateProfile}
                className="flex flex-col justify-center items-center"
            >
                {/* Change Image */}
                <div className="avatar mb-2 relative">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                            src={
                                profile?.avatar
                                    ? profile.avatar
                                    : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                            }
                            alt="profile Image"
                            id="profileImage"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 top-16 left-16 bg-white bg-opacity-60 rounded-md flex items-center justify-center">
                            <label
                                htmlFor="imageInput"
                                className="cursor-pointer"
                            >
                                <img
                                    src="/icon/image.svg"
                                    alt="upload icon"
                                    className="w-10 h-10"
                                />
                            </label>
                            <input
                                value={avatar}
                                type="file"
                                id="imageInput"
                                className="hidden"
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>
                </div>

                {/* Change text data */}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Nama</span>
                    </div>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder={
                            profile?.name ? profile.name : "Masukkan Nama"
                        }
                        className="input input-bordered placeholder:text-[12px] placeholder:text-[#8A8A8A] w-full rounded-2xl max-w-xs"
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Email</span>
                    </div>
                    <input
                        disabled
                        value={profile?.email}
                        type="email"
                        placeholder={
                            profile?.email ? profile.email : "Masukkan Email"
                        }
                        className="input input-bordered placeholder:text-[12px] placeholder:text-[#8A8A8A] w-full rounded-2xl max-w-xs"
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Nomor Telepon</span>
                    </div>
                    <input
                        value={phone}
                        onChange={(e) => {
                            const input = e.target.value;
                            if (validatePhoneInput(input)) {
                                setPhone(input);
                            }
                        }}
                        type="tel"
                        placeholder={
                            profile?.phone
                                ? profile.phone
                                : "Masukkan Nomor Telepon"
                        }
                        className="input input-bordered placeholder:text-[12px] placeholder:text-[#8A8A8A] w-full rounded-2xl max-w-xs"
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Negara</span>
                    </div>
                    <input
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        type="text"
                        placeholder={
                            profile?.country
                                ? profile.country
                                : "Masukkan Negara tempat tinggal"
                        }
                        className="input input-bordered placeholder:text-[12px] placeholder:text-[#8A8A8A] w-full rounded-2xl max-w-xs"
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Kota</span>
                    </div>
                    <input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        type="text"
                        placeholder={
                            profile?.city
                                ? profile.city
                                : "Masukkan kota tempat tinggal"
                        }
                        className="input input-bordered placeholder:text-[12px] placeholder:text-[#8A8A8A] w-full rounded-2xl max-w-xs"
                    />
                </label>
                <button className="btn btn-primary text-white rounded-3xl w-full max-w-xs mt-3">
                    {loading ? "Menyimpan..." : "Simpan Profil Saya"}
                </button>
            </form>
        </div>
    );
};

export default EditProfile;
EditProfile.propTypes = {
    profileData: PropTypes.object,
};
