import React from "react";

export const TableGenerator = ({ children }) => {
    
    return (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">{children}</table>
    )
}

const TableCaption = ({ children }) => {
    
    return <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">{children}</caption>;
}

const TableHeader = ({ children }) => {

    const keyHeaders = children.map((key, index) => {
        return <th key={`${key}-${index}`} scope="col" className="px-6 py-3">{key}</th>
    })

    return (
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>{keyHeaders}</tr>
        </thead>
    )
}

const TableBody = ({ children }) => {
    const rowData = children.map((val, index) => {  
        if (typeof val === "boolean") {
            val = val.toString();
        }
        return <td key={`${val}-${index}`} className="px-6 py-4">{val}</td>
    })


    return (
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">{rowData}</tr>
        </tbody>
    )
}

TableGenerator.Caption = TableCaption;
TableGenerator.Header = TableHeader;
TableGenerator.Body = TableBody;