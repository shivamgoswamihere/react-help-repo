import React from "react";
const MyContext = React.createContext("Default Value");
function ExampleThree() {
return <ConsumerComponent />;
}
function ConsumerComponent() {
const value = React.useContext(MyContext);
return <div>{value}</div>;
}
export default ExampleThree;