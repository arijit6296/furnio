import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Outlet } from "react-router-dom";
import NavItem from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
function App() {
  return (
    <>
      <NavItem/>
     <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
