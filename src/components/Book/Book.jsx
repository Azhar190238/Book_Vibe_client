
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Book = ({ book }) => {
    const { bookName, author, tags, category, rating, image, id } = book;

    return (
        <>
            <Link to={`/book/${id}`}>
                <div className='card-container flex-grow '>
                <div className="  card w-auto  bg-base-100 shadow-xl space-y-8">

                    <figure className="px-10 py-14 rounded-2xl m-8 pt-10 bg-[#F3F3F3] ">
                        <img className='bg-[#F3F3F3]' src={image} />
                    </figure>
                    <div className='mx-10  space-y-5 flex-grow'>
                        <div className='flex gap-10  -mb-10 text-2xl font-semibold text-[#23BE0A]'>
                            <h1 className='bg-slate-100 px-6 py-2 rounded-2xl'>{tags[0]}</h1>
                            <h1 className='bg-slate-100 px-6 py-2 rounded-2xl'>{tags[1]}</h1>
                        </div>
                        <div className="card-body -ml-5 ">
                            <h2 className="card-title font-bold text-2xl">{bookName}</h2>
                            <p className='text-xl font-medium'>By : <span>{author}</span></p>
                            <hr />
                            <div className='flex flex-grow  gap-32'>
                                <p className='text-xl font-medium'>{category}</p>
                                <div className='flex gap-3'>
                                    <p className='text-xl font-medium'>{rating}</p>
                                    <img src={"https://i.ibb.co/nz0w8qp/Vector-1.png"} alt="" />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </Link></>

    );
}
Book.propTypes = {
    book: PropTypes.object
}

export default Book;