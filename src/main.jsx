import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root";
import Home from "./Pages/home/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Dashboard/Dashboard";
import FirebaseProvider from "./Firebase/FirebaseProvider";
import UserProfile from "./Dashboard/user/UserProfile";
import BookAParcel from "./Dashboard/user/BookAParcel";
import MyParcel from "./Dashboard/user/MyParcel";
import DeliveryList from "./Dashboard/delivery/DeliveryList";
import Reviews from "./Dashboard/delivery/Reviews";
import Statistics from "./Dashboard/admin/Statistics";
import AllUser from "./Dashboard/admin/AllUser";
import AllParcel from "./Dashboard/admin/AllParcel";
import AllDeliveryMan from "./Dashboard/admin/AllDeliveryMan";
// import PrivateRoute from './Shared/PrivateRoute';
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UpdateParcel from "./Dashboard/user/UpdateParcel";
import Payment from "./Dashboard/user/Payment";
import Error from "./Pages/Error";
import Success from "./Dashboard/user/Success";
import AboutUs from "./Pages/aboutUs/AboutUs";
import Services from "./Pages/services/Services";
import Contact from "./Pages/contact/Contact";
import DeliveryManProfile from "./Dashboard/delivery/UserProfile";
import PrivateRoute from "./Shared/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>,
    children: [
      //dashboard for normal user
      {
        path: "userProfile",
        element: <PrivateRoute> <UserProfile></UserProfile> </PrivateRoute>,
      },
      {
        path: "bookAParcel",
        element: (
          <PrivateRoute>
            <BookAParcel></BookAParcel>
          </PrivateRoute>
        ),
      },
      {
        path: "myParcel",
        element: <PrivateRoute> <MyParcel></MyParcel> </PrivateRoute>,
      },
      {
        path: "update/:id",
        element: <PrivateRoute> <UpdateParcel></UpdateParcel> </PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://parcel-pioneer-server.vercel.app/update/${params.id}`),
      },
      {
        path: "payment/:id",
        element: <PrivateRoute> <Payment></Payment> </PrivateRoute>,
        loader: ({ params }) =>
          fetch(
            `https://parcel-pioneer-server.vercel.app/payment/${params.id}`
          ),
      },
      {
        path: "success",
        element: <Success></Success>,
      },

      // dashboard for delivery man
      {
        path: "deliveryManProfile",
        element: <PrivateRoute> <DeliveryManProfile></DeliveryManProfile> </PrivateRoute>,
      },
      {
        path: "deliveryList",
        element: <PrivateRoute> <DeliveryList></DeliveryList> </PrivateRoute>,
      },
      {
        path: "reviews",
        element: <PrivateRoute> <Reviews></Reviews> </PrivateRoute>,
      },

      //dashboard for admin
      {
        path: "statistics",
        element:  <Statistics></Statistics> ,  
      },
      {
        path: "allUser",
        element: <PrivateRoute> <AllUser></AllUser> </PrivateRoute>,
      },
      {
        path: "allParcel",
        element: <PrivateRoute> <AllParcel></AllParcel> </PrivateRoute>,
      },
      {
        path: "allDeliveryMan",
        element: <PrivateRoute> <AllDeliveryMan></AllDeliveryMan> </PrivateRoute>,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <FirebaseProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </FirebaseProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
