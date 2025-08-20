import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../Provider/AuthProvider';
import { FaShoppingCart } from "react-icons/fa";
import UseCart from '../../Hooks/UseCart';
const Navbar = () => {
    const navigate = useNavigate()
    const { user, signOutUser } = useContext(AuthContex);
    const [cart]=UseCart();
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                navigate("/")
            })
            .catch(error => {
                console.log(error.messege)
            })
    }
    const navOption = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/screct'>Screct</Link></li>
        <li><Link to='/order/salad'>Our Food</Link></li>
        <li><Link to='/dashboard/cart'><button className="btn">
            <FaShoppingCart className='mt-2'></FaShoppingCart> <div className="badge badge-sm badge-secondary">+{cart.length}</div>
        </button>

        </Link></li>
        {

            user ? <>
                {/* <span>{user?.displayName}</span> */}
                <button onClick={handleSignOut} className='btn btn-ghost'>SignOut</button>
            </> : <> <li><Link to='/login'>Signin</Link></li></>
        }

    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 text-white shadow-sm w-19/20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navOption}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOption}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;