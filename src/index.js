import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Banner from './component/Banner/Banner'
import Collections from "./component/Collections/Collections";
import Certificate from "./component/Certificate/Certificate";
import Blog from "./component/Blog/Blog";
import WholeSalers from "./component/WholeSalers/WholeSalers";









const router = createBrowserRouter([
  {
    path: "",
    element: <App/>,
    children: [
      {
        path: "/",
        element:<><Banner/><Certificate/>
        <Collections/>
        <Blog/>
        <WholeSalers/></>,
        children:[]
      },
      {
        path: "/tea collections",
        element:<><Banner/></>,
      },
      {
        path: "/accessories",
        element:<><Banner/></>,
      },
      {
        path: "/blog",
        element: <Banner/>,
      },
      {
        path: "/contact us",
        element: <Banner/>,
      },
      // {
      //   path: "/cart",
      //   element:  <CartPage/>,
      // },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
