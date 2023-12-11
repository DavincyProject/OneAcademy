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
import { Toaster } from "react-hot-toast";
import Protect from "./components/Auth/Protect";
import Account from "./pages/profile/Account";
import Class from "./pages/Course/Class";
import Payment from "./pages/Payment/Payment";
import ProtectedProfile from "./components/Auth/ProtectedProfile";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Toaster position="bottom-center" reverseOrder={false} />
          <Navbar />
          <Routes>
            {/* Guest routes */}
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<KelasDetail />} />
            <Route path="/class" element={<Class />} />

            {/* Profile routes, Check if user is not login */}
            <Route element={<ProtectedProfile />}>
              <Route path="/notification" element={<Notification />} />
              <Route path="/account" element={<Account />} />
              <Route path="/payment/:id" element={<Payment />} />
            </Route>

            {/* User Authorization */}
            <Route element={<Protect />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/validate" element={<RegisterOtp />} />

              {/* Reset Password */}
              <Route path="/reset" element={<SendReset />} />
              <Route path="/forgot/:id" element={<ResetPassword />} />
            </Route>

            {/* Admin Authorization */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />

            {/* Handle Pages Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
