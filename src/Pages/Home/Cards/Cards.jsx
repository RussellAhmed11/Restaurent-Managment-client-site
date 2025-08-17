import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Card from "./Card";

const Cards = () => {
    return (
        <div className="">
            <SectionTitle subHeading={'Should Try'} heading={"CHEF RECOMMENDS"}></SectionTitle>
            <div className="md:flex gap-4 w-8/10 mx-auto">
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    );
};

export default Cards;