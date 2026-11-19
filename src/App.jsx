import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import Marketplace from "./pages/Marketplace";
import CarDescription from "./pages/CarDescription";
import { useDispatch, useSelector } from "react-redux";
import SuccessNotif from "./components/SuccessNotif";
import ErrorNotif from "./components/ErrorNotif";
import { useEffect } from "react";
import { currentUser } from "./JS/Actions/authActions";

const App = () => {
  const dispatch = useDispatch();

  const authSuccess = useSelector((state) => state.AuthReducer.success);
  const authErrors = useSelector((state) => state.AuthReducer.errors);

  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(currentUser());
    }
  }, [dispatch]);
  return (
    <div className="bg-gray-50">
      <Navbar />
      {authSuccess &&
        authSuccess.map((success) => (
          <SuccessNotif key={success.id} success={success} />
        ))}
      {authErrors &&
        authErrors.map((error) => <ErrorNotif key={error.id} error={error} />)}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/car_description/:id" element={<CarDescription />} />
        <Route path="/contact" element={<Contact />} />
        {!isAuth && <Route path="/login" element={<Login />} />}
        {!isAuth && <Route path="/register" element={<Register />} />}
        {isAuth && <Route path="/profile" element={<Profile />} />}
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
