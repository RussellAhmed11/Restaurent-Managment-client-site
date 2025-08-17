import React from 'react';
import slide1 from '../../../assets/home/slide1.jpg'
const Card = () => {
    return (
        <div className="card bg-base-200 w-full shadow-lg">
           
                <img
                    src={slide1}
                    alt="Shoes"
                    className="h-[300px]" />
            
            <div className="card-body items-center text-center">
                <h2 className="card-title">Caeser Salad</h2>
                <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                <div className="card-actions">
                    <button className="btn btn-outline border-0 border-b-3">Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default Card;