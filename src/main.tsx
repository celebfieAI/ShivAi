import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store, RootState } from "./stores/store"; // Adjust the path if necessary
import Router from "./router";
import ScrollToTop from "@/components/Base/ScrollToTop"; // Adjust the path if necessary
import "./assets/css/app.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgotpassword";
import { auth } from "./firebase";
import { loginUser, setLoading } from "./stores/userSlice";

// Ensure the root is only created once
let root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const App: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  // const isLoading = useSelector((state: RootState) => state.user.isLoading);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName || "", // Add default value to avoid undefined
            email: authUser.email || "", // Add default value to avoid undefined
          })
        );
      }
      dispatch(setLoading(false));
    });
    return () => unsubscribe(); // Clean up the subscription on component unmount
  }, [dispatch]);

  // if (isLoading) {
  //   return (
  //     <div className="full-page-loader">
  //       <div className="lds-dual-ring"></div>
  //     </div>
  //   );
  // }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {user ? (
          <Route path="/*" element={<Router />} />
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<Forgot />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
