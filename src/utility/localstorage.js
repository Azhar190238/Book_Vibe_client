const getStoredReadBooks=()=>{
    const storedReadBooks=localStorage.getItem('read-books')
    if(storedReadBooks){
        return JSON.parse(storedReadBooks);
    }
    return [];
}

const getStoredWishlist=()=>{
  const storedWhishedBooks=localStorage.getItem('wished-books')
  if(storedWhishedBooks){
      return JSON.parse(storedWhishedBooks);
  }
  return [];
}


const readBooks=id=>{
  const storedReadBooks= getStoredReadBooks();
  const exists= storedReadBooks.find(bookId=>bookId===id);
  if(!exists){
    storedReadBooks.push(id);
    localStorage.setItem('read-books',JSON.stringify(storedReadBooks))
  }
}

const addToWishlist=id=>{
  const storedWhishedBooks= getStoredWishlist();
  const exists= storedWhishedBooks.find(bookId=>bookId===id);
  if(!exists){
    storedWhishedBooks.push(id);
    localStorage.setItem('wished-books',JSON.stringify(storedWhishedBooks))
  }
}
export {getStoredReadBooks, readBooks, getStoredWishlist,addToWishlist}