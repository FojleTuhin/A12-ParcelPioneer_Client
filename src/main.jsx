import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root';
import Home from './Pages/home/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Dashboard/Dashboard';
import FirebaseProvider from './Firebase/FirebaseProvider';
import UserProfile from './Dashboard/user/UserProfile';
import BookAParcel from './Dashboard/user/BookAParcel';
import MyParcel from './Dashboard/user/MyParcel';
import DeliveryList from './Dashboard/delivery/DeliveryList';
import Reviews from './Dashboard/delivery/Reviews';
import Statistics from './Dashboard/admin/Statistics';
import AllUser from './Dashboard/admin/AllUser';
import AllParcel from './Dashboard/admin/AllParcel';
import AllDeliveryMan from './Dashboard/admin/AllDeliveryMan';
import PrivateRoute from './Shared/PrivateRoute';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UpdateParcel from './Dashboard/user/UpdateParcel';
import Payment from './Dashboard/user/Payment';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [

      //dashboard for normal user
      {
        path: 'userProfile',
        element: <UserProfile></UserProfile>
      },
      {
        path: 'bookAParcel',
        element: <BookAParcel></BookAParcel>
      },
      {
        path: 'myParcel',
        element: <MyParcel></MyParcel>
      },
      {
        path:'update/:id',
        element:<UpdateParcel></UpdateParcel>,
        loader:({params})=>fetch(`http://localhost:5000/update/${params.id}`)
      },
      {
        path:'payment/:id',
        element:<Payment></Payment>,
        loader:({params})=>fetch(`http://localhost:5000/payment/${params.id}`)
      },


      
      // dashboard for delivery man
      {
        path: 'deliveryList',
        element: <DeliveryList></DeliveryList>
      },
      {
        path: 'reviews',
        element: <Reviews></Reviews>
      },



      //dashboard for admin
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'allUser',
        element: <AllUser></AllUser>
      },
      {
        path: 'allParcel',
        element: <AllParcel></AllParcel>
      },
      {
        path: 'allDeliveryMan',
        element: <AllDeliveryMan></AllDeliveryMan>
      }
    ]
  }
]);


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <FirebaseProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </FirebaseProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
