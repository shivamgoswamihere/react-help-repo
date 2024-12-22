// Context with default value

import React from "react";
const MyContext = React.createContext("Default Value");
function ExampleTwo() {
return <ConsumerComponent />;
}
function ConsumerComponent() {
const value = React.useContext(MyContext);
return <div>{value}</div>;
}
export default ExampleTwo;