import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import UseMenu from '../../../Hooks/UseMenu';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [menus,loading,refetch] = UseMenu();
    const axiosSecure = UseAxiosSecure();
    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                console.log(res.data)
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item.name} has been deleted`,
                        icon: "success"
                    });
                }

            }
        });
    }
    
    return (
        <div>
            <SectionTitle heading={'Manage All Items'} subHeading={'Hurry Up'}></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Item Name</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            menus.map((item, index) => <tr>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>{item.price}</td>
                                <td>
                                    <Link to={`/dashboard/updateItems/${item._id}`} className="btn btn-md bg-orange-500"><FaEdit className="text-white text-2xl"></FaEdit></Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteItem(item)} className="btn btn-ghost btn-lg"><FaTrashAlt className="text-red-600"></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;