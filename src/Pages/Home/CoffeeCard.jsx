import React from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee, cafin, setCafin }) => {

    const { name, chef, taste, supplier, category, details, photo, _id } = coffee;

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            const updatedCafin = cafin.filter(item => item._id !== _id);
                            setCafin(updatedCafin);

                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }



    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl ">
                <div className='flex items-center justify-center gap-10'>
                    <figure><img src={photo} alt="Movie" /></figure>

                    <div >
                        <h2 >Name:{name}</h2>
                        <p>Chef: {chef}</p>
                        <p>Price: {supplier}</p>

                    </div>

                    <div className="btn-group btn-group-vertical">

                        <button className="btn btn-active">View</button>


                        <Link to={`update/${_id}`}><button className="btn">Update</button></Link>
                       
                        <button onClick={() => handleDelete(_id)} className="btn">Delete</button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;