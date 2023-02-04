import React from "react";
import { TopSection } from "./TopSection";
import { Card } from "../../components/Card";

let sampleData = [
    {
        title: "Itinerary 1",
        data: "lorem ipsum",
        img: "/adventure_seeker.jpg",
    },
    {
        title: "Itinerary 2",
        data: "lorem ipsum",
        img: "/cultural_connoisseur.jpg",
    },
    {
        title: "Itinerary 3",
        data: "lorem ipsum",
        img: "/relaxing.jpg",
    },

];

const ToDoLayout = ({ children }) => {

    return (
        <div className="flex flex-col">
            <div className="basis-1/3">
                <TopSection />
            </div>
            <div className="basis-1/3">
                <MiddleSection data={sampleData} />
            </div>
            <div className="basis-1/3">
                <BottomSection />
            </div>



        </div>
    )
}

export default ToDoLayout;

// this will contain 4 or 5 sections
//


const MiddleSection = ({ data }) => {
    const colNum = data.length;

    const cardData = data.map((entry, index) => {
        return (
            <div key={entry.title} className="w-full m-5">
                <Card>
                    <Card.Body>
                        <Card.Header>{entry.title}</Card.Header>
                        <Card.Img source={entry.img}></Card.Img>
                        <Card.Text>{entry.data}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    });

    return (
        <div className="flex lg:flex-row flex-col m-20">
            {cardData}
        </div>
    );
}

const BottomSection = () => {

    return (
        <div className="flex lg:flex-row flex-col m-20 justify-evenly align-bottom">
            <button
                type="button"
                className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">
                Subscribe for Updates
            </button>
            <button
                type="button"
                className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">
                Contact Us
            </button>
        </div>
    );
}