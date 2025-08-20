
import { FaAd, FaHome, FaList, FaShoppingCart } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';
import UseCart from '../Hooks/UseCart';

const DashBoard = () => {
    const [cart]=UseCart()
    return (
        <div className="flex w-11/12 mx-auto">
            <div className="w-  64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    <li><NavLink to="/dashboard/userhome">
                   <FaHome></FaHome>
                    User Home</NavLink></li>

                    <li><NavLink to="/dashboard/reservation">
                    <FaCalendar></FaCalendar>
                    Reservation</NavLink></li>

                    <li><NavLink to="/dashboard/cart">
                    <FaShoppingCart></FaShoppingCart>
                    My cart({cart.length})</NavLink></li>
                    
                    <li><NavLink to="/dashboard/review">
                    <FaAd></FaAd>
                    Add a Review</NavLink></li>

                    <li><NavLink to="/dashboard/booking">
                    <FaList></FaList>
                    My Booking</NavLink></li>
                    <div className='divider'></div>
                    <li><NavLink to="/">
                   <FaHome></FaHome>
                    Home</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 p-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;