
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
        </div>
    );
};

export default MenuCategory;