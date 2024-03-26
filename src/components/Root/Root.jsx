import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
// import Body from "../Body/Body";
// import Home from "../Home/Home";


const Root = () => {
    return (
        <div className="mx-20 my-10">
          <Header></Header>
         
          <Outlet></Outlet>
       

        </div>
    );
};

export default Root;