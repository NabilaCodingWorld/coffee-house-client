import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import bg from '../../assets/11.png'

const Update = () => {

    const coffee = useLoaderData();
    const { name, chef, taste, supplier, category, details, photo, _id } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();

       
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const submitData = { name, chef, taste, supplier, category, details, photo }
        console.log(submitData)

        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submitData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div>

            <div className="hero min-h-screen" style={{ backgroundImage: `url(${bg})` }}>

                <div className="hero-content  text-neutral-content ">

                    <div className="mx-10 bg-slate-100 rounded p-10 w-[1200px]">
                        <h2 className="text-2xl font-semibold text-center mb-4">Add Coffee</h2>


                        <form onSubmit={handleUpdateCoffee} className='text-black'>

                            <div className='flex gap-5'>
                                <div className="mb-4 w-full">
                                    <label htmlFor="name" className="block text-gray-600">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        defaultValue={name}

                                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div className="mb-4 w-full">
                                    <label htmlFor="name" className="block text-gray-600">
                                        Chef
                                    </label>
                                    <input
                                        type="text"
                                        id="chef"
                                        name="chef"
                                        defaultValue={chef}

                                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                            </div>



                            <div className='flex gap-5'>
                                <div className="mb-4 w-full">
                                    <label htmlFor="name" className="block text-gray-600">
                                        Taste
                                    </label>
                                    <input
                                        type="text"
                                        id="taste"
                                        name="taste"
                                        defaultValue={taste}

                                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div className="mb-4 w-full">
                                    <label htmlFor="name" className="block text-gray-600">
                                        Suppiler
                                    </label>
                                    <input
                                        type="text"
                                        id="supplier"
                                        name="supplier"
                                        defaultValue={supplier}

                                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                            </div>


                            <div className='flex gap-5'>
                                <div className="mb-4 w-full">
                                    <label htmlFor="name" className="block text-gray-600">
                                        Category
                                    </label>
                                    <input
                                        type="text"
                                        id="category"
                                        name="category"
                                        defaultValue={category}

                                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div className="mb-4 w-full">
                                    <label htmlFor="name" className="block text-gray-600">
                                        Details
                                    </label>
                                    <input
                                        type="text"
                                        id="details"
                                        name="details"
                                        defaultValue={details}

                                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                            </div>

                            <div className="mb-4 w-full">
                                <label htmlFor="name" className="block text-gray-600">
                                    Photo
                                </label>
                                <input
                                    type="text"
                                    id="photo"
                                    name="photo"
                                    defaultValue={photo}

                                    className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className="mt-6">
                                <input
                                    type="submit"
                                    className="bg-[#D2B48C] text-white px-4 py-2 rounded hover:bg-[#D2B48C] w-full"
                                />


                            </div>
                        </form>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Update;