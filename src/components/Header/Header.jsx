import { NavLink} from "react-router-dom";

const Header = () => {

   const links = (
        <>
            <li><NavLink  to='/' ClassName='text-[#23BE0A]'>Home</NavLink></li>
            <li><NavLink to='/listed' ClassName='text-[#23BE0A]'>Listed Books</NavLink></li>
            <li><NavLink to='/pages' activeClassName="active-link">Pages to Read</NavLink></li>
            <li><NavLink to='/recommendations' ClassName='text-[#23BE0A]'>Book Recommendations</NavLink></li>
            <li><NavLink to='/goals' activeClassName="active-link">Reading Goals</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52" >
                        {links}
                    </ul>
                </div>
                 <a href="/" className="btn btn-ghost text-3xl font-bold"> Book Vibe</a> 
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal font-semibold bg-white text-lg space-x-3">
                    {links}
                </ul>
            </div>
            <div className="navbar-end font-semibold text-lg gap-2">
                <a className="btn text-white bg-[#23BE0A]">Sign In</a>
                <a className="btn text-white bg-[#59C6D2]">Sign Up</a>
            </div>
        </div>
    );
};

export default Header;
