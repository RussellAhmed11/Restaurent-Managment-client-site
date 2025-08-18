import { useState } from 'react';
import OrderCoverImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../../Hooks/UseMenu';
import FoodCard from '../../../Components/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    console.log(category)
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menus] = UseMenu();
    const dessert = menus.filter(items => items.category === 'dessert')
    const soup = menus.filter(items => items.category === 'soup')
    const salad = menus.filter(items => items.category === 'salad')
    const pizza = menus.filter(items => items.category === 'pizza')
    const drinks = menus.filter(items => items.category === 'drinks')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order</title>
            </Helmet>
            <Cover title={"Order Food"} img={OrderCoverImg}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => console.log(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab key={salad._id} items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab key={pizza._id} items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab key={soup._id} items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab key={dessert._id} items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab key={drinks._id} items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;