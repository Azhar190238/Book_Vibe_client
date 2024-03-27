import { Link } from "react-router-dom";


const Hero = () => {
    return (
 
    <div className="hero rounded-2xl  bg-base-200 my-10 py-10">
  <div className=" hero-content flex-col lg:flex-row-reverse">
    <img src= {'https://i.ibb.co/jvyF0qf/pngwing-1-2.png'} className="max-w-sm rounded-lg shadow-2xl md:ml-40" />
    <div className="space-y-16">
      <h1 className="text-2xl md:text-6xl  font-bold">Books to freshen up <br /> your bookshelf</h1>
      
     <Link to={'/listed'}><button className=" bg-[#23BE0A] text-white font-bold text-xl  btn mt-10">View The List</button></Link> 
    </div>
  </div>
</div>
     
    );
};

export default Hero;