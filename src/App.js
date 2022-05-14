import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/HomePage/Home/Home";
import Login from "./Pages/Login/Login";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";
import SignUp from "./Pages/SignUp/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashBoard from "./Pages/DashBoard/DashBoard";
import MyAppoinments from "./Pages/DashBoard/MyAppoinments";
import MyReview from "./Pages/DashBoard/MyReview";

function App() {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route
                    path="/appointment"
                    element={
                        <RequireAuth>
                            <Appointment></Appointment>
                        </RequireAuth>
                    }
                ></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/signup" element={<SignUp></SignUp>}></Route>
                <Route
                    path="/dashboard"
                    element={
                        <RequireAuth>
                            <DashBoard></DashBoard>
                        </RequireAuth>
                    }
                >
                    <Route index element={<MyAppoinments></MyAppoinments>}></Route>
                    <Route path="myReview" element={<MyReview></MyReview>}></Route>
                </Route>
            </Routes>
            <ToastContainer />
        </div>
    );
}

export default App;
