import React, { useContext } from 'react';
import {firstName,lastName} from './App';


const CompB=()=>{
    const fName=useContext(firstName);
    const lName=useContext(lastName);

    return <h1> My Name is {fName} {lName} </h1>
}

export default CompB;