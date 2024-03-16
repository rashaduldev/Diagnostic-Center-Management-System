import { Outlet } from "react-router-dom";  
import Navber from "../Components/Homepage/Navber/Navber";
import Footer from "../Components/Homepage/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;