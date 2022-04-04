import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import "./App.css";
import HomePage from "./Component/HomePage";
import LandingPage from "./Component/LandingPage";
import Login from "./Component/Login";
import NotFound from "./Component/NotFound";
import Signup from "./Component/Signup";
import { Loginn } from "./store/actions";
import AdminLogin from "./Component/AdminLogin";
import AllUsers from "./Component/AllUsers";
import Adminhome from "./Component/Adminhome";
import AdminAddItem from "./Component/AdminAddItem";
import AdminGetItem from "./Component/AdminGetItem";
import AdminEditItem from "./Component/AdminEditItem";

function App() {
  const check = localStorage.getItem("id");
  const dispach = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (check) {
      dispach(Loginn());
      navigate("/landing");
    }
  }, [check]);

  return (
    <>
      {/* <NavBar /> */}

      {/* <h1>hello form the app </h1> */}
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<HomePage />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/allusers" element={<AllUsers />} />
        <Route path="/adminhome" element={<Adminhome />} />
        <Route path="/additems" element={<AdminAddItem />} />
        <Route path="/getitem" element={<AdminGetItem />} />
        <Route path="/getitems/:id" element={<AdminEditItem />} />
      </Routes>
    </>
  );
}

export default App;
