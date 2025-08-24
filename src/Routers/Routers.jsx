
import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Screct from "../Pages/Shared/Screed/Screct";
import DashBoard from "../Layout/DashBoard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/Cart/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/Cart/AddItems/AddItems";
import AdminRoute from "../Hooks/AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItems from "../Pages/Dashboard/UpdateItems/UpdateItems";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistroy from "../Pages/Dashboard/PaymentHistory/PaymentHistroy";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import UsersHome from "../Pages/Dashboard/UserHome/UsersHome";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'menu',
        element: <Menu></Menu>
      },
      {
        path: 'order/:category',
        element: <Order></Order>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'screct',
        element: <PrivateRoute><Screct></Screct></PrivateRoute>
      },


    ]
  },{
    path:'/dashboard',
    element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children:[
      {
        path:'cart',
        element:<Cart></Cart>
      },
      {
        path:'adminHome',
        element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path:'userHome',
        element:<UsersHome></UsersHome>
      },
      {
        path:'payment',
        element:<Payment></Payment>
      },
      {
        path:'paymentHistory',
        element:<PaymentHistroy></PaymentHistroy>
      },
      {
        path:'allusers',
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
      }
      ,
      {
        path:'addItems',
        element:<AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path:'manageItems',
        element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path:'updateItems/:id',
        element:<AdminRoute><UpdateItems></UpdateItems></AdminRoute>,
        loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
      }
    ]
  }
]);