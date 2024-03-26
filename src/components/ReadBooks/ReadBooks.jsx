

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const ReadBooks = ({ oneBook }) => {
    const {id, bookName, image, yearOfPublishing,publisher,category,totalPages,rating, author } = oneBook;
    return (
        <div className='mt-10'>
           
            {<div className="card card-side bg-base-100  shadow-xl">
                <figure className='bg-slate-100 rounded-lg' ><img src={image} className='w-40 p-8 m-5' alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl">{bookName}</h2>
                    <p className='text-xl font-medium'>By :<span>{author}</span></p>
                    <div className='flex gap-10   text-xl font-semibold text-[#23BE0A]'>
                        <h1 className="font-bold text-black">Tag</h1>
                        <h1 className='bg-slate-100 px-6 py-2 rounded-2xl'>#<span>{oneBook.tags[0]}</span></h1>
                        <h1 className='bg-slate-100 px-6 py-2 rounded-2xl'>#<span>{oneBook.tags[1]}</span></h1>

                        <div className='flex items-center'>
                            <img src={'https://i.ibb.co/74MJRg2/Frame-2.png'} alt="" className="mr-2" />
                            <h1 className='text-black font-light m-0'>Year of Publishing: <span>{yearOfPublishing}</span></h1>
                        </div>
                        </div>

                        <div className='flex mt-5 mb-4 gap-8'>
                        <div className='flex items-center'>
                            <img src={'https://i.ibb.co/n3Gn3dm/Vector-2.png'} alt="" className="mr-2" />
                            <h1 className='text-black font-light m-0'>Publisher: <span>{publisher}</span></h1>
                        </div>
                        <div className='flex items-center'>
                            <img src={'https://i.ibb.co/fCPksRm/Frame-3.png'} alt="" className="mr-2" />
                            <h1 className='text-black font-light m-0'>Page: <span>{totalPages}</span></h1>
                        </div>
                        </div>
                        <hr />
                       
                        <div className='flex gap-10  mb-5 text-xl font-semibold'>

                        <h1 className='bg-slate-100 px-6 py-2  text-[#328EFF] rounded-2xl'>Category: <span>{category}</span></h1>
                        <h1 className='bg-slate-100 px-6 py-2 text-[#FFAC33] rounded-2xl'>Rating: <span>{rating}</span></h1>
                        <Link to={`/book/${id}`}> <button className='bg-[#23BE0A] p-4 rounded-2xl text-white'>View Details</button></Link>
                        </div>
                    </div>

                </div>}
            </div>
        
    );
};
ReadBooks.propTypes = {
    oneBook: PropTypes.object
}
export default ReadBooks;
