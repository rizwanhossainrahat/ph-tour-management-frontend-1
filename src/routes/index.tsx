import App from "@/App";
import DashboadLayout from "@/components/layout/DashboadLayout";
import About from "@/pages/About";
import AddTour from "@/pages/Admin/AddTour";
import Analytics from "@/pages/Admin/Analytics";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Bookings from "@/pages/User/Bookings";
import Verify from "@/pages/Verify";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { userSidebarItems } from "./userSidebarItems";
import { withAuth } from "@/utils/withAuth";
import { role } from "@/constants/role";
import { TRole } from "@/types";
import UnAuthorized from "@/pages/UnAuthorized";
import Tours from "@/pages/Tours";
import TourDetails from "@/pages/TourDetails";
import HomePage from "@/pages/HomePage";
import Success from "@/pages/payment/Success";
import Fail from "@/pages/payment/Fail";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component:HomePage,
        index:true,
      },
      {
        Component:withAuth(About),
        path: "about",
      },
      {
        Component:Tours,
        path: "tours",
      },
      {
        Component:TourDetails,
        path: "tours/:id",
      },
       {
        Component: withAuth(Bookings),
        path: "booking/:id",
      },
    ],
  },
  {
    Component: withAuth(DashboadLayout,role.admin as TRole),
    path: "/admin",
    children:[
      {index:true,element:<Navigate to="/admin/analytics"/>},
      ...generateRoutes(adminSidebarItems)
    ]
  },
  {
    Component:withAuth(DashboadLayout,role.user as TRole),
    path: "/user",
    children: [
       {index:true,element:<Navigate to="/user/bookings"/>},
      ...generateRoutes(userSidebarItems)
     
    ],
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
  {
    Component:Verify,
    path: "/verify",
  },
  {
    Component:UnAuthorized,
    path: "/unauthorized",
  },
  {
    Component:Success,
    path: "/payment/success",
  },
  {
    Component:Fail,
    path: "payment/fail",
  },
]);
