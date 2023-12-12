import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../redux/actions/authActions";
import toast from "react-hot-toast";
import { useEffect } from "react";

const SendReset = () => {
  const [email, setEmail] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [countdown, setCountdown] = useState(60);
  
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if countdown is stored in local storage or set it to 0 if false, and number is decimal using 10
      const storedCountdown = parseInt(
          localStorage.getItem("countdown") || "0",
          10
      );

      if (storedCountdown > 0 && storedCountdown <= 60) {
          // If countdown is greater than 0 and less than 60, disable the button and resume the countdown
          setCountdown(storedCountdown);
          setButtonDisabled(true);
          startCountdown();
      } else {
          // If countdown is not ongoing, reset it to the initial value
          setCountdown(60);
      }
  }, []);

  const startCountdown = () => {
      const interval = setInterval(() => {
          setCountdown((prevCountdown) => {
              // Save the countdown value to local storage
              localStorage.setItem("countdown", String(prevCountdown));

              if (prevCountdown === 1) {
                  // Enable the button when the countdown reaches zero
                  setButtonDisabled(false);
                  clearInterval(interval);
                  // Remove the countdown value from local storage when it reaches zero
                  localStorage.removeItem("countdown");
              }

              return prevCountdown - 1;
          });
      }, 1000); // Update the countdown every second
  };

  const handleReset = (e) => {
      e.preventDefault();

      if (email === "") {
          toast.error("Email Masih Kosong!");
          return;
      }

      dispatch(resetPassword(email));

      // Disable the button
      setButtonDisabled(true);

      // Start the countdown
      startCountdown();
  };

  return (
      <div className="flex min-h-screen">
          <div className="w-[100%] lg:w-[50%] flex justify-start items-center mx-[23px] lg:px-[145px] ">
              <form onSubmit={handleReset} className="w-full">
                  <h1 className="text-[24px] font-bold text-darkblue mb-8">
                      Reset Password
                  </h1>
                  <div className="flex flex-col gap-5">
                      <div className="flex flex-col">
                          <div className="flex justify-between items-center">
                              <label className="text-[12px] mb-[4px]">
                                  Masukkan Email
                              </label>
                          </div>
                          <div className="relative">
                              <input
                                  type="email"
                                  className="border w-full p-2 rounded-2xl pr-[3.5rem]"
                                  placeholder="Contoh: johndoe@gmail.com"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                              />
                          </div>
                      </div>
                  </div>
                  <button
                      className={`btn btn-primary w-full text-[14px] bg-darkblue text-white py-[10px] rounded-2xl mt-5 ${
                          isButtonDisabled
                              ? "cursor-not-allowed opacity-50"
                              : ""
                      }`}
                      disabled={isButtonDisabled}
                  >
                      {isButtonDisabled ? `Kirim (${countdown}s)` : "Kirim"}
                  </button>
              </form>
          </div>

          <div className="hidden lg:flex justify-center items-center bg-darkblue w-[50%] min-h-[100dvh]">
              <img src="/testlogo.png" alt="logo" />
          </div>
      </div>
  );
};

export default SendReset;
