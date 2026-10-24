import { createBrowserRouter } from "react-router";
import MainLayout from "./MainLayout";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import ForgetPassword from "./pages/forget_password/ForgetPassword";
import SendCode from "./pages/send_code/SendCode";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/CheckOut";
import Products from "./pages/product/products/Products";
import ProductsByCategorie from "./pages/product/products_by_categorie/ProductsByCategorie";
import ProductDetails from "./pages/product/product_details/ProductDetails";
import AuthLayout from "./AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
        {
            index:true,
            element:<Home/>
        },
        {
          path:"ForgetPassword",
          element:<ForgetPassword/>
        },
        {
          path:"Send Code",
          element:<SendCode/>
        },
        {
          path:"Cart",
          element:<Cart/>
        },
        {
          path:"Checkout",
          element:<Checkout/>
        },
        {
          path:"Products",
          element:<Products/>
        },
        {
          path:"Products by categorie",
          element:<ProductsByCategorie/>
        },
        {
          path:"Products/:id",
          element:<ProductDetails/>
        },
    ]
  },
  {
    element: <AuthLayout/>,
    children:[
          {
          path:"Register",
          element:<Register/>
        },
        {
          path:"Login",
          element:<Login/>
        },
    ]
  }
]);
export default router