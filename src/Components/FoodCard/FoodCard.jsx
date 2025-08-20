import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import UseCart from "../../Hooks/UseCart";


const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure=UseAxiosSecure();
    const [,refetch]=UseCart();
    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "please login to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes,Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    // send the user to the log in page
                    navigate("/login", { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <p className="text-white bg-slate-900 absolute right-0 mr-4 mt-4 p-4">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{name}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleAddToCart} className='btn btn-outline border-0 border-b-4 border-orange-400 mt-4'>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;