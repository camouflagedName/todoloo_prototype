import React from "react";

export const Card = ({children}) => {

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {children}
        </div>
    )
}

const CardBody = ({children}) => {
    return <div className="p-5 text-center">{children}</div>;
}

const CardHeader = ({children}) => {
    return <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{children}</h5>
}

const CardText = ({children}) => {
    return <p className="my-3 font-normal text-gray-700 dark:text-gray-400">{children}</p>
}

const CardFooter = () => {
    return null;
}

const CardImg = ({children, source}) => {

    return <img className="rounded-lg drop-shadow-lg" src={source} alt="" />;
}

Card.Body = CardBody;
Card.Header = CardHeader;
Card.Text = CardText;
Card.Footer = CardFooter;
Card.Img = CardImg;