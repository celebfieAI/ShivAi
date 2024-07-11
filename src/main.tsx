// import { useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Provider, useDispatch, useSelector } from "react-redux";
// import { store } from "./stores/store";
// import Router from "./router";
// import ScrollToTop from "@/components/Base/ScrollToTop";
// import "./assets/css/app.css";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Forgot from "./pages/Forgotpassword"
// import { auth } from "./firebase";
// import { loginUser, setLoading } from "./stores/userSlice";
// import { RootState } from "./stores/store"; 

// const App = () => {
//   const dispatch = useDispatch();
//   const user = useSelector((state: RootState) => state.user.user);
//   const isLoading = useSelector((state: RootState) => state.user.isLoading);

//   useEffect(() => {
//     auth.onAuthStateChanged((authUser) => {
//       if (authUser) {
//         dispatch(
//           loginUser({
//             uid: authUser.uid,
//             username: authUser.displayName,
//             email: authUser.email,
//           })
//         );
//       }
//       dispatch(setLoading(false));
//     });
//   }, [dispatch]);

//   if (isLoading) {
//     return (
//       <div className="full-page-loader">
//         <div className="lds-dual-ring"></div>
//       </div>
//     );
//   }

//   return (
//     <BrowserRouter>
//       <ScrollToTop />
//       <Routes>
//         {user ? (
//           <Route path="/*" element={<Router />} />
//         ) : (
//           <>
//             <Route path="/" element={<Login />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/forgot-password" element={<Forgot />} />
//           </>
//         )}
//       </Routes>
//     </BrowserRouter>
//   );
// };

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );


// App.tsx
import { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import { store } from './stores/store';
import Router from './router';
import ScrollToTop from '@/components/Base/ScrollToTop';
import './assets/css/app.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Forgot from './pages/Forgotpassword';
import { auth } from './firebase';
import { loginUser, logoutUser, setLoading } from './stores/userSlice';
import ProtectedRoute from './protectedroute';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logoutUser());
      }
      dispatch(setLoading(false));
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Router />
            </ProtectedRoute>
          }
        />
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<Forgot />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
