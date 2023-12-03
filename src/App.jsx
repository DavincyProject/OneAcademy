import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import NotFound from "./pages/NotFound";
import ResetPassword from "./pages/Auth/ResetPassword";
import SendReset from "./pages/Auth/SendReset";
import RegisterOtp from "./pages/Auth/RegisterOtp";
import KelasDetail from "./pages/Detail/KelasDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Notification from "./pages/profile/Notification";
// import ClassMe from "./pages/Course/ClassMe";
import { Toaster } from "react-hot-toast";
import Protect from "./components/Auth/Protect";
import PaymentSucces from "./pages/PaymentSucces";
import Account from "./pages/profile/Account";
import Payment from "./pages/Payment";
import Class from "./pages/Course/Class";
function App() {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Toaster position="bottom-center" reverseOrder={false} />
                    <Navbar />
                    <Routes>
                        {/* Global routes */}
                        <Route path="/" element={<Home />} />
                        <Route path="/details/:id" element={<KelasDetail />} />
                        <Route
                            path="/notification"
                            element={<Notification />}
                        />
                        <Route path="/class" element={<Class />} />
                        <Route path="/succes" element={<PaymentSucces />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/payment" element={<Payment />} />

                        {/* User Authorization */}
                        <Route
                            path="/login"
                            element={
                                <Protect>
                                    <Login />
                                </Protect>
                            }
                        />
                        <Route
                            path="/register"
                            element={
                                <Protect>
                                    <Register />
                                </Protect>
                            }
                        />
                        <Route
                            path="/validate"
                            element={
                                <Protect>
                                    <RegisterOtp />
                                </Protect>
                            }
                        />

                        {/* Reset Password */}
                        <Route
                            path="/reset"
                            element={
                                <Protect>
                                    <SendReset />
                                </Protect>
                            }
                        />
                        <Route
                            path="/forgot/:id"
                            element={
                                <Protect>
                                    <ResetPassword />
                                </Protect>
                            }
                        />

                        {/* Admin Authorization */}
                        <Route path="/admin" element={<AdminLogin />} />
                        <Route
                            path="/admin/dashboard"
                            element={<AdminDashboard />}
                        />

                        {/* Handle Pages Not Found */}
                        <Route path="*" element={<NotFound />} />

                        {/* <Route path="/classMe" element={<ClassMe />} /> */}
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    );
}

export default App;
