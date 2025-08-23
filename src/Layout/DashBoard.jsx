
import { FaAd, FaBook, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils, FaVoicemail } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';
import UseCart from '../Hooks/UseCart';
import UseAdmin from '../Hooks/UseAdmin';

const DashBoard = () => {
    const [cart] = UseCart();
    const [isAdmin]=UseAdmin();

    return (
        <div className="flex w-11/12 mx-auto">
            <div className="w-  64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminhome">
                                <FaHome></FaHome>
                                Admin Home</NavLink></li>

                            <li><NavLink to="/dashboard/addItems">
                                <FaUtensils></FaUtensils>
                                Add Items</NavLink></li>

                            <li><NavLink to="/dashboard/manageItems">
                                <FaList></FaList>
                                Manage Items</NavLink></li>

                            <li><NavLink to="/dashboard/booking">
                                <FaBook></FaBook>
                               Manage Bookings</NavLink></li>

                            <li><NavLink to="/dashboard/allusers">
                                <FaUsers></FaUsers>
                                All Users</NavLink></li>

                        </> : <>
                            <li><NavLink to="/dashboard/home">
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

                            <li><NavLink to="/dashboard/paymentHistory">
                                <FaList></FaList>
                                Payment Histroy</NavLink></li>
                        </>
                    }

                    <div className='divider'></div>
                    {/* shared navlink */}
                    <li><NavLink to="/">
                        <FaHome></FaHome>
                        Home</NavLink></li>
                    <li><NavLink to="/">
                        <FaSearch></FaSearch>
                        Menu</NavLink></li>
                    <li><NavLink to="/">
                        <FaEnvelope></FaEnvelope>
                        Contact</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 p-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;