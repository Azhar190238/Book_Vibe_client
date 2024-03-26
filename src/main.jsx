import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Body from './components/Body/Body';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';
import ErrorPage from './components/ErrorPage/ErrorPage';
import BookDetails from './components/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element : <Body></Body>,
      },
      {
        path: '/listed',
        element : <ListedBooks></ListedBooks> ,
        loader:()=>fetch('../books.json')
      },
      {
        path: "/pages",
        element : <PagesToRead></PagesToRead> ,
      },
      {
        path: "/book/:id",
        element : <BookDetails></BookDetails> ,
        loader: ()=>fetch('../books.json')
      },
    
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

