
import { Link } from 'react-router-dom';
import MenuItems from '../../Home/MenuItems/MenuItems';
import Cover from '../../Shared/Cover/Cover';

const MenuCategory = ({items,title,Img}) => {
    return (
        <div className='pt-4'>
            {
                title && <Cover img={Img} title={title}></Cover>
            }
            <div className='grid md:grid-cols-2 gap-4 mt-16 w-8/10 mx-auto'>
             {
                items.map(menu=><MenuItems menu={menu} key={menu._id}></MenuItems>)
            } 
        </div>
      {
        title &&   <Link to={`/order/${title}`}>
         <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
        </Link>
      }
        </div>
    );
};

export default MenuCategory;