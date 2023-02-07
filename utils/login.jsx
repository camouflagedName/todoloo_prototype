import React, { useState } from "react";

const login = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
        remember: false,
    })
    
    const updateData = (evt) => {
        const type = evt.target.type;
        const key = evt.target.id;
        let value = evt.target.value;
    
        if (type === "checkbox") {
            value = evt.target.checked === true ? true : false;
        }
    
        console.log(value)
    
        setData({...data,  [key]: value });
    }
}