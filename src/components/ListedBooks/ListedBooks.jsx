import {useLoaderData } from "react-router-dom";
import WishlistBooks from "../WishlistBooks/WishlistBooks";
import { useEffect, useState } from "react";
import { getStoredReadBooks, getStoredWishlist } from "../../utility/localstorage";
import ReadBooks from "../ReadBooks/ReadBooks";


const ListedBooks = () => {
    
    const books=useLoaderData();

    const [storedBook, setStoredBook]=useState([]);
    const [whishedBook, setWhishedBook]=useState([]);
    useEffect( ()=>{
        const storeBookIds= getStoredReadBooks();
        if(books.length >0){
            const allBooks= [];
            for(const id of storeBookIds ){
                const book=books.find(book=>book.id===id);
                if(book){
                    allBooks.push(book);
                }
            }
            setStoredBook(allBooks);
         
        }
    }, [] );



    useEffect( ()=>{
      const storeBookIds= getStoredWishlist();
      if(books.length >0){
          const allBooks= [];
          for(const id of storeBookIds ){
              const book=books.find(book=>book.id===id);
              if(book){
                  allBooks.push(book);
              }
          }
          setWhishedBook(allBooks);
        
      }
  }, [] );
    return (
        <div className="py-6 ">
          <div className="py-6  m-2 bg-slate-300 text-center rounded-2xl">
            <p className="text-5xl font-bold" >Books</p>
          </div>
          <div className="flex justify-center">
  <div className="">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] items-center text-white">Sort By <img src={'https://i.ibb.co/VNYc5qD/Frame-1.png'} alt="sort icon" /></div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Rating</a></li>
        <li><a>Number of pages</a></li>
        <li><a>Publish Year</a></li>
      </ul>
    </div>
  </div>
</div>
<div>
    {/* <h1>all books:{storedBook.length}</h1>
    <h1>all books:{storedBook.bookName}</h1> */}
<div role="tablist" className="tabs tabs-lifted">
  <input type="radio" name="my_tabs_2" role="tab" className="tab font-medium" aria-label="Read Books" checked />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
    { 
    <div>
       <ul >
        {
            storedBook.map(oneBook=> <ReadBooks key={oneBook.id} oneBook={oneBook}></ReadBooks> )
        }
       </ul>
       </div>
     }
  </div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab font-medium" aria-label="Wishlist Books" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
  { 
    <div>
       <ul >
        {
            whishedBook.map(oneBook=> <WishlistBooks key={oneBook.id} oneBook={oneBook}></WishlistBooks> )
        }
       </ul>
       </div>
     }
  </div>
 
 
</div>

</div>



         
        </div>
    );
};

export default ListedBooks;
