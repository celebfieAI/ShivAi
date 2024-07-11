import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgotpassword"
import { auth } from "./firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, setLoading } from "./stores/userSlice";
import { RootState } from "./stores/store"; // Adjust the path accordingly
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Router from "./router/index"
import DashboardOverview1 from "./pages/DashboardOverview1";
import DashboardOverview2 from "./pages/DashboardOverview2";
import DashboardOverview3 from "./pages/DashboardOverview3";
import DashboardOverview4 from "./pages/DashboardOverview4";
import DashboardOverview5 from "./pages/DashboardOverview5";
import DashboardOverview6 from "./pages/DashboardOverview6";
import DashboardOverview7 from "./pages/DashboardOverview7";
import DashboardOverview8 from "./pages/DashboardOverview8";
import Users from "./pages/Users";
import Departments from "./pages/Departments";
import AddUser from "./pages/AddUser";
import ProfileOverview from "./pages/ProfileOverview";
import Settings from "./pages/Settings";
import Billing from "./pages/Billing";
import Invoice from "./pages/Invoice";
import Categories from "./pages/Categories";
import AddProduct from "./pages/AddProduct";
import ProductList from "./pages/ProductList";
import ProductGrid from "./pages/ProductGrid";
import TransactionList from "./pages/TransactionList";
import TransactionDetail from "./pages/TransactionDetail";
import SellerList from "./pages/SellerList";
import SellerDetail from "./pages/SellerDetail";
import Reviews from "./pages/Reviews";
import Inbox from "./pages/Inbox";
import FileManagerList from "./pages/FileManagerList";
// import FileManagerGrid from ".pages/FileManagerGrid";
import Chat from "./pages/Chat";
import Calendar from "./pages/Calendar";
import PointOfSale from "./pages/PointOfSale";

import Creative from "./pages/Creative";
import Dynamic from "./pages/Dynamic";
import Interactive from "./pages/Interactive";
import RegularTable from "./pages/RegularTable";
import Tabulator from "./pages/Tabulator";
import Modal from "./pages/Modal";
import Slideover from "./pages/Slideover";
import Notification from "./pages/Notification";
import Tab from "./pages/Tab";
import Accordion from "./pages/Accordion";
import Button from "./pages/Button";
import Alert from "./pages/Alert";
import ProgressBar from "./pages/ProgressBar";
import Tooltip from "./pages/Tooltip";
import Dropdown from "./pages/Dropdown";
import Typography from "./pages/Typography";
import Icon from "./pages/Icon";
import LoadingIcon from "./pages/LoadingIcon";
import RegularForm from "./pages/RegularForm";
import Datepicker from "./pages/Datepicker";
import TomSelect from "./pages/TomSelect";
import FileUpload from "./pages/FileUpload";
import WysiwygEditor from "./pages/WysiwygEditor";
import Validation from "./pages/Validation";
import Chart from "./pages/Chart";
import Slider from "./pages/Slider";
import ImageZoom from "./pages/ImageZoom";
import LandingPage from "./pages/LandingPage";
import Layout from "./themes";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          dispatch(
            loginUser({
              uid: authUser.uid,
              username: authUser.displayName,
              email: authUser.email,
            })
          );
          dispatch(setLoading(false));
        } else {
          dispatch(setLoading(false));
          console.log("User is not logged in.");
        }
      });
    }, []);
  
    const user = useSelector((state: RootState) => state.user.user);
    const isLoading = useSelector((state: RootState) => state.user.isLoading);
  
    return (
    //   <BrowserRouter>
       
    //     <Routes>
    //       {user ? (
    //         <Route path="/*" element={<Router />} />
    //       ) : (
    //         <>
    //           <Route path="/" element={<Login />} />
    //           <Route path="/login" element={<Login />} />
    //           <Route path="/register" element={<Register />} />
    //           <Route path="/forgot-password" element={<Forgot />} />
    //         </>
    //       )}
    //     </Routes>
    //   </BrowserRouter>
    <>
    {isLoading ? (
      <div className="full-page-loader">
        <div className="lds-dual-ring"></div>
      </div>
    ) : user ? (
      <BrowserRouter>
        <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<DashboardOverview1 />} />
        <Route path="dashboard-overview-2" element={<DashboardOverview2 />} />
        <Route path="dashboard-overview-3" element={<DashboardOverview3 />} />
        <Route path="dashboard-overview-4" element={<DashboardOverview4 />} />
        <Route path="dashboard-overview-5" element={<DashboardOverview5 />} />
        <Route path="dashboard-overview-6" element={<DashboardOverview6 />} />
        <Route path="dashboard-overview-7" element={<DashboardOverview7 />} />
        <Route path="dashboard-overview-8" element={<DashboardOverview8 />} />
        <Route path="users" element={<Users />} />
        <Route path="departments" element={<Departments />} />
        <Route path="add-user" element={<AddUser />} />
        <Route path="profile-overview" element={<ProfileOverview />} />
        <Route path="settings" element={<Settings />} />
        <Route path="billing" element={<Billing />} />
        <Route path="invoice" element={<Invoice />} />
        <Route path="categories" element={<Categories />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="product-list" element={<ProductList />} />
        <Route path="product-grid" element={<ProductGrid />} />
        <Route path="transaction-list" element={<TransactionList />} />
        <Route path="transaction-detail" element={<TransactionDetail />} />
        <Route path="seller-list" element={<SellerList />} />
        <Route path="seller-detail" element={<SellerDetail />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="inbox" element={<Inbox />} />
        <Route path="file-manager-list" element={<FileManagerList />} />
        {/* <Route path="file-manager-grid" element={<FileManagerGrid />} /> */}
        <Route path="chat" element={<Chat />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="point-of-sale" element={<PointOfSale />} />
        <Route path="creative" element={<Creative />} />
        <Route path="dynamic" element={<Dynamic />} />
        <Route path="interactive" element={<Interactive />} />
        <Route path="regular-table" element={<RegularTable />} />
        <Route path="tabulator" element={<Tabulator />} />
        <Route path="modal" element={<Modal />} />
        <Route path="slideover" element={<Slideover />} />
        <Route path="notification" element={<Notification />} />
        <Route path="tab" element={<Tab />} />
        <Route path="accordion" element={<Accordion />} />
        <Route path="button" element={<Button />} />
        <Route path="alert" element={<Alert />} />
        <Route path="progress-bar" element={<ProgressBar />} />
        <Route path="tooltip" element={<Tooltip />} />
        <Route path="dropdown" element={<Dropdown />} />
        <Route path="typography" element={<Typography />} />
        <Route path="icon" element={<Icon />} />
        <Route path="loading-icon" element={<LoadingIcon />} />
        <Route path="regular-form" element={<RegularForm />} />
        <Route path="datepicker" element={<Datepicker />} />
        <Route path="tom-select" element={<TomSelect />} />
        <Route path="file-upload" element={<FileUpload />} />
        <Route path="wysiwyg-editor" element={<WysiwygEditor />} />
        <Route path="validation" element={<Validation />} />
        <Route path="chart" element={<Chart />} />
        <Route path="slider" element={<Slider />} />
        <Route path="image-zoom" element={<ImageZoom />} />
      </Route>
      <Route path="/landing-page" element={<LandingPage />} />
    </Routes>
      </BrowserRouter>
    ) : (
      <BrowserRouter>
        <Routes>
        <>
        <Route path="/" element={<Login />} />
         <Route path="/login" element={<Login />} />
             <Route path="/register" element={<Register />} />
    <Route path="/forgot-password" element={<Forgot />} />
            </>
        </Routes>
      </BrowserRouter>
    )}
  </>
    );
  };

  

  export default App;


  