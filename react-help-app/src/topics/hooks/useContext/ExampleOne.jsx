// Passing Value using Context

import React from "react";
const UserContext = React.createContext();
function ExampleOne() {
const user = { name: "Saurabh", age: 30 };
return (
<UserContext.Provider value={user}>
<Parent />
</UserContext.Provider>
);
}
function Parent() {
return <Child />;
}
function Child() {
const user = React.useContext(UserContext);
return <div>Hello, {user.name}, your age is {user.age}</div>;
}
export default ExampleOne;