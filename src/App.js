import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/SignUp/Signup";
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";
import Purchase from "./Pages/Purchase/Purchase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AllParts from "./Pages/AllParts/AllParts";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/Shared/RequireAuth/RequireAdmin";
import MyOrder from "./Pages/Dashboard/MyOrder";
import AddReviews from "./Pages/Dashboard/AddReviews";
import AboutMe from "./Pages/Dashboard/AboutMe";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders";
import AddProduct from "./Pages/Dashboard/AddProduct";
import ManageProducts from "./Pages/Dashboard/ManageProducts";

function App() {
  return (
    <div>
      <Navbar />
      <div className="px-12">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/parts" element={<AllParts />}></Route>
          <Route
            path="/purchase/:_id"
            element={
              <RequireAuth>
                <Purchase></Purchase>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard></Dashboard>
              </RequireAuth>
            }
          >
            <Route index element={<MyOrder />}></Route>
            <Route path="myReview" element={<AddReviews />}></Route>
            <Route path="myProfile" element={<AboutMe />}></Route>
            <Route
              path="orders"
              element={
                <RequireAdmin>
                  <ManageAllOrders />
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="addProducts"
              element={
                <RequireAdmin>
                  <AddProduct />
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="users"
              element={
                <RequireAdmin>
                  <Users />
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="manageProducts"
              element={
                <RequireAdmin>
                  <ManageProducts />
                </RequireAdmin>
              }
            ></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
