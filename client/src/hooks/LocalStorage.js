import React, {useState} from "react";

export const LocalStorag = (key, initialValue) => {

const[storedValue, setStoredValue]= useState(() => { 

// get local storage by key

const item = window.localStorage.getItem(key);

return item ? JSON.parse(item) : initialValue;

});

const setValue = value => {
    //save to state
    setStoredValue(value);
    //save to local storage
    window.localStorage.setItem(key, JSON.stringify(value))
}
return [storedValue, setValue]

};


