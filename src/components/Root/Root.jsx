import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";



const Root = () => {
    return (
        <div className="md:mx-20 my-10">
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>

        </div>
    );
};

export default Root;