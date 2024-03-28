
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredReadBooks, readBooks,addToWishlist, getStoredWishlist } from "../../utility/localstorage";// Importing functions from localstorage utility 

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find(book => book.id === idInt);

  const handleAddToBook = () => {
    const alreadyRead = getStoredReadBooks().includes(idInt);
    if (alreadyRead) {
      toast.error("This book is already added to the Read list.");
    } else {
      readBooks(idInt); 
      toast.success("Book added to Read list successfully.");
    }
  };
  const handleAddToWishlist = () => {
    const alreadyInWishlist = getStoredWishlist().includes(idInt);
    const alreadyRead = getStoredReadBooks().includes(idInt);
  
    if (alreadyInWishlist) {
      toast.error("This book is already in your wishlist.");
    } else if (alreadyRead) {
      toast.error("This book is already in your Read list.");
    } else {
      addToWishlist(idInt);
      toast.success("Book added to wishlist successfully.");
    }
  };
  


  return (

    <div className=" flex flex-col md:flex-row  bg-base-100 shadow-xl gap-8 my-10">
      <div className=" p-20 bg-slate-100 rounded-2xl mx-5 my-10 ">
      <figure ><img className="w-[500px]" src={book.image} alt="Album" /></figure>
      </div>
     
      <div className="card-body">
        <h2 className="card-title font-bold text-2xl">{book.bookName}</h2>
        <p className='text-xl font-medium'>By :<span>{book.author}</span></p>
        <hr />
        <p className='text-xl font-medium'>{book.category}</p>
        <hr />
        <p><span className="font-bold">Review: </span>{book.review}</p>
         
        <div className='flex gap-10  -mb-10 text-xl font-semibold text-[#23BE0A]'>
                            <h1 className="font-bold">Tag</h1>
                            <h1 className='bg-slate-100 px-6 py-2 rounded-2xl'>#<span>{book.tags[0]}</span></h1>
                            <h1 className='bg-slate-100 px-6 py-2 rounded-2xl'>#<span>{book.tags[1]}</span></h1>
                        </div>
                        
                        <div className="mt-10 space-y-2">
                          <hr />
                        <div className="flex ">
                        <p>Number of Pages:</p>
                        <p className="font-bold">{book.totalPages}</p>
                        </div>
                        <div className="flex gap-24">
                        <p>Publisher:</p>
                        <p className="font-bold">{book.publisher}</p>
                        </div>
                        <div className="flex gap-3">
                        <p>Year of Publishing:</p>
                        <p className="font-bold">{book.yearOfPublishing}</p>
                        </div>
                        <div className="flex gap-20">
                        <p>Ratings:</p>
                        <p className="font-bold">{book.rating}</p>
                        </div>
                        </div>
                      
                        
        <div className="card-actions gap-5 ">
          <button onClick={handleAddToBook} className="btn border-green-500">Read</button>
          <button onClick={handleAddToWishlist} className="btn bg-[#50B1C9] text-white">Wishlist</button>
        </div>
       
      </div>
      <ToastContainer />
    </div>


  );
};

export default BookDetails;

