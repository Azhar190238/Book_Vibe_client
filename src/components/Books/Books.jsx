import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books,setBooks]=useState([]);
    useEffect ( ()=>{
        fetch('books.json')
        .then(res=>res.json())
        .then(data=> setBooks(data));
    },[])
    return (
        <div>
           <div className="text-center my-10">
            <h1 className="text-5xl font-bold" >Books</h1>
            <p>length:{books.length}</p>
            </div> 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;