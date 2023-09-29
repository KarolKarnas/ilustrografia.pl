import { useEffect } from "react";
import { useAppDispatch } from "./slices/reduxHooks";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { logout } from "./slices/authSlice";
import GoToTop from "./components/GoToTop";
// import ProductGroup from './components/ProductGroup';
// import projects from './products';

const App = () => {
  // console.log(projects);

  const dispatch = useAppDispatch();
  useEffect(() => {
    const expirationTime = localStorage.getItem("expirationTime");
    if (expirationTime) {
      const currentTime = new Date().getTime();

      if (currentTime > Number(expirationTime)) {
        dispatch(logout(null));
      }
    }
  }, [dispatch]);

  return (
    // <div className="flex min-h-screen flex-col justify-between overflow-hidden">
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      <main className=" min-w-screen flex flex-auto flex-col items-center overflow-clip  ">
        <Outlet />
        <GoToTop />
      </main>
      <Footer />
    </>
  );
};
export default App;
