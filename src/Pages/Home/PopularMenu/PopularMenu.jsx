import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "../MenuItems/MenuItems";


const PopularMenu = () => {
    const [menus,setMenu]=useState([])
 
    useEffect(()=>{
        fetch('Menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems=data.filter(items=>items.category==='popular')
            setMenu(popularItems)
        })
    },[])
    return (
        <section className="w-8/10 mx-auto mb-12">
            <SectionTitle heading={"Menu Items"} subHeading={"Check it out"}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                menus.map(menu=><MenuItems menu={menu} key={menu._id}></MenuItems>)
            }
            </div>
        </section>
    );
};

export default PopularMenu;