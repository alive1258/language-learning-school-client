import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes/Classes";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivetRoutes from "./PrivetRoutes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddCourse from "../Pages/Dashboard/AddCourse/AddCourse";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import UpdateCourse from "../Pages/Dashboard/UpdateCourse/UpdateCourse";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import Payment from "../Pages/Dashboard/Payment/Payment";



  
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'instructors',
          element:<Instructors></Instructors>
        },
        {
          path:'classes',
          element:<Classes></Classes>
        },
       
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        }
      

      ]
    },
    {
      path:'dashboard',
      element:<PrivetRoutes><Dashboard></Dashboard></PrivetRoutes>,
      children:[
        {
          path:"allusers",
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:"mycart",
          element:<MyCart></MyCart>
        },
        {
          path:'payment/:id',
          element:<Payment></Payment>,
          // loader:({params})=> fetch(`http://localhost:5000/carts/${params._id}`)

        },
      
        {
          path:'addcourse',
          element:<InstructorRoute><AddCourse></AddCourse></InstructorRoute>
        },
        {
          path:"myclasses",
          element:<InstructorRoute><MyClasses></MyClasses></InstructorRoute>
        },
    
        {
          path:"updatecourse/:id",
          element:<InstructorRoute><UpdateCourse></UpdateCourse></InstructorRoute>
        },
        {
          path:"manageclasses",
          element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute>
        }
       
      ]
    }
  ]);