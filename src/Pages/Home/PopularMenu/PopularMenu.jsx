import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "../MenuItems/MenuItems";
import UseMenu from "../../../Hooks/UseMenu";


const PopularMenu = () => {
    const [menus]=UseMenu();
    const popularItems=menus.filter(items=>items.category ==='popular')
    return (
        <section className="w-8/10 mx-auto mb-12">
            <SectionTitle heading={"Menu Items"} subHeading={"Check it out"}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                popularItems.map(menu=><MenuItems menu={menu} key={menu._id}></MenuItems>)
            }
            </div>
            <div className="flex justify-center mt-5 ">
                <button className="btn btn-outline border-0 border-b-3">View Full Menu</button>
            </div>
            <div className="bg-black mt-10">
                <h2 className="text-3xl text-white font-bold p-20 flex justify-center">Call Us: +88 0192345678910</h2>
            </div>
        </section>
    );
};

export default PopularMenu;