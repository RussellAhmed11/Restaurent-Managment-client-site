import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import Category from "../Category/Category";
import Features from "../Features/Features";
import PopularMenu from "../PopularMenu/PopularMenu";
import Teastimonials from "../Teastimonials/Teastimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bissro Boss | Menu</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Cards></Cards>
            <Features></Features>
            <Teastimonials></Teastimonials>
        </div>
    );
};

export default Home;