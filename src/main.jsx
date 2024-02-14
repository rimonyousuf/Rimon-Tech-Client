import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import MyCart from './components/MyCart/MyCart';
import About from './components/About/About';
import Items from './components/Items/Items';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/products',
        element: <Products></Products>
      },
      {
        path: '/items',
        element: <Items></Items>,
        loader: ()=> fetch('http://localhost:5000/items')
      },
      {
        path: '/mycart',
        element: <MyCart></MyCart>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/signin',
        element: <Signin></Signin>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)