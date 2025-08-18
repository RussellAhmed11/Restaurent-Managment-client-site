
const FoodCard = ({item}) => {
        const {name,image,price,recipe}=item;
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
                    <button className='btn btn-outline border-0 border-b-4 border-orange-400 mt-4'>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;