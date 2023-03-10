import React, { useContext, useEffect, useState } from "react";
import { TableGenerator } from "@/components/TableGenerator";
import UserData from "@/utils/UserData";
const cities = require('../../data/usaCities.json');

const TopSection = () => {
    const [formNum, setFormNum] = useState(1);
    const [currentForm, setCurrentForm] = useState();
    const [tripData, setTripData] = useState({
        formOne: null,
        formTwo: null,
    })

    const tripDataUpdate = (form) => {
        const keys = Object.keys(form);
        const value = Object.values(form);
        setTripData({ ...tripData, [keys[0]]: value[0] });
    }

    useEffect(() => {

        switch (formNum) {
            case 1:
                setCurrentForm(<FormOne tripUpdate={tripDataUpdate} />)
                break;
            case 2:
                setCurrentForm(<FormTwo formOneData={tripData.formOne} tripUpdate={tripDataUpdate} />)
                break;
            case 3:
                setCurrentForm(<FormThree tripUpdate={tripDataUpdate} data={tripData} />)
                break;
            default:
                setCurrentForm(<FormOne tripUpdate={tripDataUpdate} />)
                break;
        }
    }, [formNum])

    return (
        <div className="flex flex-col w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-b-lg shadow">
            <div className="flex justify-center mt-5">
                {currentForm}
            </div>
            <div className="flex justify-between mx-3 mb-3">
                <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center"
                    onClick={() => { if (formNum > 1) setFormNum(formNum - 1) }}>Previous</button>
                <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center"
                    onClick={() => { if (formNum < 3) setFormNum(formNum + 1) }}>Next</button>
            </div>
        </div>
    )
}

export default TopSection;


const FormOne = ({ tripUpdate }) => {

    const [input, setInput] = useState({
        where: "",
        address: "",
        date: '',
        numOfPeople: '',
    });

    const [suggestions, setSuggestions] = useState(cities);
    const [cityList, setCityList] = useState();

    const cityArr = [];
    const stateArr = [];

    for (const value in cities) {
        cityArr.push(value.city);
        stateArr.push(value.state);
    }

    const updateInput = (evt) => {
        const value = evt.target.value;
        const key = evt.target.id;
        const [city, state] = value.split(",");

        if (key === 'where' && value.length > 0 && state === undefined) { autoComplete(value); }
        if (key === 'where' && value.length === 0) { setSuggestions(cities); }

        setInput({ ...input, [key]: value })
    }

    const autoComplete = (input) => {
        const index = input.length - 1;

        // filter cities whose value at index matches input's val
        const filteredSuggestions = suggestions.filter(entry => entry.city[index].toLowerCase() === input[index].toLowerCase());

        setSuggestions(filteredSuggestions);
    }

    useEffect(() => {
        setCityList(suggestions.map((suggestedCity) => <option key={`${suggestedCity.city}, ${suggestedCity.state}`} value={`${suggestedCity.city}, ${suggestedCity.state}`} />))
    }, [suggestions])

    useEffect(() => {
        tripUpdate({ formOne: input })
    }, [input])

    return (
        <div className="flex flex-col">
            <h1 className="lg:text-6xl text-4xl mb-10 text-white text-center font-medium">Planning what to do, for you</h1>
            <form>
                <div className="grid gap-6 mb-10 px-20 py-10">
                    <div className="mb-3">
                        <input
                            type="text"
                            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                            id="where"
                            aria-describedby="where"
                            value={input.where}
                            placeholder="Where to next? (City, State)"
                            onChange={updateInput}
                            list="cities"
                        />
                        <datalist id="cities">
                            {cityList}
                        </datalist>
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                            id="address"
                            aria-describedby="address"
                            value={input.address}
                            placeholder="Address (if available)"
                            onChange={updateInput}
                        />
                    </div>
                    <div className="mb-5 flex flex-col lg:flex-row gap-6 justify-between">
                        <div className="mb-3">
                            <input
                                type="date"
                                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                id="date"
                                name="trip-calendar"
                                onChange={updateInput} />
                        </div>
                        <div className="">
                            <select
                                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                id="numOfPeople"
                                onChange={updateInput}
                                defaultValue={"How many people?"}
                            >
                                <option disabled>How many people?</option>
                                <option value={1}>1 person</option>
                                <option value={2}>2 people</option>
                                <option value={3}>3 people</option>
                                <option value={4}>4 people</option>
                                <option value={5}>5 people</option>
                                <option value={6}>6 or more people</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )

}

const FormTwo = ({ formOneData, tripUpdate }) => {

    const [preferenceValue, setpreferenceValue] = useState({
        indoor: 0,
        fast: 0,
        popular: 0,
        romantic: 0,
        adult: 0,
    })

    const formTwoLabels = [
        ["Outdor", "Either", "Indoor"],
        ["Relaxing", "Either", "Fast-paced"],
        ["Hidden Gem", "Either", "Popular"],
        ["Friendly", "Either", "Romantic"],
        ["Family-Friendly", "Either", "Adult"]
    ];

    const formTwoValues = [{ indoor: preferenceValue.indoor }, { fast: preferenceValue.fast }, { popular: preferenceValue.popular }, { romantic: preferenceValue.romantic }, { adult: preferenceValue.adult }]

    const handleChange = (evt) => {
        const key = evt.target.id;
        const val = evt.target.value;

        setpreferenceValue({ ...preferenceValue, [key]: val })
    }

    const formTwoLayout = formTwoLabels.map((arrVal, index) => {
        const preferenceObj = formTwoValues[index]
        const prefKey = Object.keys(preferenceObj)[0];
        const prefVal = Object.values(preferenceObj)[0];
        const labels = arrVal.map((labelTxt, entryIndex) => {
            const position = entryIndex === 0 ? 'justify-beginning' :
                entryIndex === 1 ? 'justify-center' : 'justify-end';

            return <label key={`${entryIndex}-${labelTxt}`} htmlFor="indoor" className={`flex w-full mb-2 text-md md:text-lg font-medium text-gray-900 dark:text-white ${position}`}>{labelTxt}</label>;
        })

        return (
            <div key={`${arrVal}-${index}`}>
                <div key={`label-${prefKey}`} className="flex columns-3">{labels}</div>
                <input
                    key={`input-${prefKey}`}
                    id={prefKey}
                    type="range"
                    min="0"
                    max="2"
                    value={prefVal}
                    className="w-full mb-10 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 range-lg"
                    onChange={handleChange} />
            </div>
        )

    });

    const { where } = formOneData;

    useEffect(() => {
        tripUpdate({ formTwo: preferenceValue })
    }, [preferenceValue])

    return (
        <div className="flex flex-col mx-6">
            <h1 className="text-4xl md:text-6xl mb-10 text-white">Your preferences for <b>{where}:</b></h1>
            {formTwoLayout}
        </div>
    )
}

const FormThree = ({ data }) => {
    const userData = useContext(UserData);

    return (
        <div className="flex flex-col">
            <h1 className="text-4xl md:text-6xl mb-10 text-white text-center">SUMMARY</h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-3">
                <SummaryTable data={userData.login} title={"User Data"} />
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-3">
                <SummaryTable data={data} title={"Travel Data"}/>
            </div>
        </div>
    )
}


const SummaryTable = ({ title, data }) => {
    let keysArr = [];
    let valArr = [];

    if (data) {
        const keys = Object.keys(data);

        keys.forEach(keyName => {
            const vals = data[keyName];

            if (typeof vals === "object" ) {
                Object.keys(vals).forEach(sub_key => {
                    keysArr.push(sub_key);
                })

                Object.values(vals).forEach(sub_val => {
                    valArr.push(sub_val);
                })
            } else {
                keysArr.push(keyName);
                valArr.push(vals);
            }
        })
    } else {
        keysArr = ["no_title", "no_title", "no_title"];
        valArr = ["no_data", "no_data", "no_data"];
    }


    return (

            <TableGenerator>
                <TableGenerator.Caption>{title}</TableGenerator.Caption>
                <TableGenerator.Header>{keysArr}</TableGenerator.Header>
                <TableGenerator.Body>{valArr}</TableGenerator.Body>
            </TableGenerator>

    )

}