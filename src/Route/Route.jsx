import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Submit from "../Pages/Form/Submit";
// import CoffeeShop from "../Pages/Home/CoffeeShop";
import Update from "../Pages/Update/Update";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=> fetch('http://localhost:5000/coffee')
        },
        {
            path: "/addCoffee",
            element: <Submit></Submit>
        },
        // {
        //     path: "/coffeeShop",
        //     element: <CoffeeShop></CoffeeShop>,
        //     loader: ()=> fetch('http://localhost:5000/coffee')
        // },
        {
          path: 'update/:_id',
          element: <Update></Update>,
          loader: ({params}) => fetch(`http://localhost:5000/coffee/${params._id}`)
        }
       
      ]
    },
  ]);