

const Hero = () => {
    return (
 
    <div className="hero rounded-2xl  bg-base-200">
  <div className=" hero-content flex-col lg:flex-row-reverse">
    <img src= {'https://i.ibb.co/jvyF0qf/pngwing-1-2.png'} className="max-w-sm rounded-lg shadow-2xl ml-40" />
    <div className="space-y-16">
      <h1 className="text-6xl  font-bold">Books to freshen up <br /> your bookshelf</h1>
      
      <button className=" bg-[#23BE0A] text-white font-bold text-xl  btn ">View The List</button>
    </div>
  </div>
</div>
     
    );
};

export default Hero;