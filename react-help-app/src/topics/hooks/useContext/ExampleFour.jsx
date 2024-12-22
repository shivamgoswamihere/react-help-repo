// Context without Prop Drilling

import React, { createContext, useContext } from "react";
const AuthContext = createContext();
function ExampleFour() {
const user = { username: "learn2earnlabs", isLoggedIn: false };
return (
<AuthContext.Provider value={user}>
<MainComponent />
</AuthContext.Provider>
);
}
function MainComponent() {
return <SubComponent />;
}
function SubComponent() {
return <UserProfile />;
}
function UserProfile() {
const auth = useContext(AuthContext); // Directly access context
return (
<div>
{auth.isLoggedIn ? (
<p>Welcome, {auth.username}!</p>
):(
<p>Please log in.</p>
)}
</div>
);
}
export default ExampleFour;