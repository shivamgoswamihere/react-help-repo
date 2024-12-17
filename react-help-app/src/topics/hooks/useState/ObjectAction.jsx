// Overwiting an Object

import React, { useState } from "react";
function ObjectAction() {
    const [user, setUser] = useState({ name: "Rahul Singh", age: 25 });
    const updateName = () => {
    setUser((prevState) => ({ ...prevState, name: "Neha Mittal" })); // Merge updates
    };
    return (
    <div>
    <p>Name: {user.name}</p>
    <p>Age: {user.age}</p>
    <button onClick={updateName}>Update Name</button>
    </div>
    );}
export default ObjectAction;