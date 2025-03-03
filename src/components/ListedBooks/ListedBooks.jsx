

import { useLoaderData } from "react-router-dom";
import WishlistBooks from "../WishlistBooks/WishlistBooks";
import ReadBooks from "../ReadBooks/ReadBooks";
import { useEffect, useState } from "react";
import { getStoredReadBooks, getStoredWishlist } from "../../utility/localstorage";
import PagesToRead from "../PagesToRead/PagesToRead";

const ListedBooks = () => {
  const books = useLoaderData();

  const [storedBook, setStoredBook] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);
  const [whishedBook, setWhishedBook] = useState([]);
  const [sortBy, setSortBy] = useState(null);

  useEffect(() => {
    const storeBookIds = getStoredReadBooks();
    if (books.length > 0) {
      const allBooks = [];
      for (const id of storeBookIds) {
        const book = books.find((book) => book.id === id);
        if (book) {
          allBooks.push(book);
        }
      }
      setStoredBook(allBooks);
      setDisplayBooks(allBooks);
    }
  }, [books]);

  useEffect(() => {
    const storeBookIds = getStoredWishlist();
    if (books.length > 0) {
      const allBooks = [];
      for (const id of storeBookIds) {
        const book = books.find((book) => book.id === id);
        if (book) {
          allBooks.push(book);
        }
      }
      setWhishedBook(allBooks);
    }
  }, [books]);

  const handleSortByChange = (field) => {
    setSortBy(field);
    let sortedBooks = [...storedBook];
    switch (field) {
      case "rating":
        sortedBooks.sort((a, b) => b.rating - a.rating);
        break;
      case "totalPages":
        sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
        break;
      case "yearOfPublishing":
        sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        break;
      default:
        break;
    }
    setDisplayBooks(sortedBooks);
  };

  return (
    <div className="py-6">
      <div className="py-6 m-2 bg-slate-300 text-center rounded-2xl">
        <p className="text-5xl font-bold">Books</p>
      </div>
      <div className="flex justify-center">
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] items-center text-white">
              Sort By <img src={'https://i.ibb.co/VNYc5qD/Frame-1.png'} alt="sort icon" />
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li onClick={() => handleSortByChange("rating")}><a>Rating</a></li>
              <li onClick={() => handleSortByChange("totalPages")}><a>Number of pages</a></li>
              <li onClick={() => handleSortByChange("yearOfPublishing")}><a>Publish Year</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div role="tablist" className="tabs tabs-lifted">
          <input type="radio" name="my_tabs_2" role="tab" className="tab font-medium" aria-label="Read Books" checked />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box md:p-6">
            <div>
              <ul>
                {displayBooks.map((oneBook) => (
                  <ReadBooks key={oneBook.id} oneBook={oneBook}></ReadBooks>
                  
                ))}
              </ul>
            </div>
          </div>

          <input type="radio" name="my_tabs_2" role="tab" className="tab font-medium" aria-label="Wishlist Books" />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box md:p-6">
            <div>
              <ul>
                {whishedBook.map((oneBook) => (
                  <WishlistBooks key={oneBook.id} oneBook={oneBook}></WishlistBooks>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
