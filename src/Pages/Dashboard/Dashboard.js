import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="drawer lg:px-12 h-fit drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* <!-- Page content here --> */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="dashboard-sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-accent text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard" className="link link-hover">
              My Orders
            </Link>
          </li>
          <li>
            <Link to="/dashboard/myreview" className="link link-hover">
              Add Reviews
            </Link>
          </li>
          {user && (
            <li>
              <Link to="/dashboard/users" className="link link-hover">
                My Profile
              </Link>
            </li>
          )}
          {user && (
            <li>
              <Link to="/dashboard/doctors" className="link link-hover">
                Add a doctor
              </Link>
            </li>
          )}
          {user && (
            <li>
              <Link to="/dashboard/managedoctors" className="link link-hover">
                Manage Doctors
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
