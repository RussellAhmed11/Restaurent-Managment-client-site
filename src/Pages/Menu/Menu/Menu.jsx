import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import UseMenu from '../../../Hooks/UseMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItems from '../../Home/MenuItems/MenuItems';
import MenuCategory from '../MenuCategory/MenuCategory';
const Menu = () => {
    const [menus]=UseMenu();
    const dessert=menus.filter(items=>items.category ==='dessert')
    const soup=menus.filter(items=>items.category ==='soup')
    const salad=menus.filter(items=>items.category ==='salad')
    const pizza=menus.filter(items=>items.category ==='pizza')
    const offered=menus.filter(items=>items.category ==='offered')
   
    return (
        <div>
            <Helmet>
                <title>Bissro Boss | Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuImg} title={"Our Menu"}></Cover>
            <SectionTitle subHeading={"Dont Miss"} heading={"Today's Offer"}></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert */}
            <MenuCategory items={dessert} title={"Dessert"} Img={dessertImg}></MenuCategory>
            <MenuCategory items={soup} title={"Soup"} Img={soupImg}></MenuCategory>
            <MenuCategory items={salad} title={"Salad"} Img={saladImg}></MenuCategory>
            <MenuCategory items={pizza} title={"Pizza"} Img={pizzaImg}></MenuCategory>
           
        </div>
    );
};

export default Menu;