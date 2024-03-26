import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center justify-center items-center text-4xl">
           <h2>Not found page</h2>
           <Link to='/' className="btn mt-10">Back To Home</Link> 
        </div>
    );
};

export default ErrorPage;