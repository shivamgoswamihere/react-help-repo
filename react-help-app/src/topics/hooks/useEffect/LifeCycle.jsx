/*shows a counter component (App) that logs updates and cleans up when
unmounted using useEffect hook*/

import React, { useState, useEffect } from 'react';
const LifeCycle = () => {
const [count, setCount] = useState(0);
// Equivalent to componentDidMount
useEffect(() => {
console.log('Component mounted');
// Equivalent to componentWillUnmount
return () => {
console.log('Component will unmount');
};
}, []); // Empty dependency array ensures this runs only once after the component mounts
// Equivalent to componentDidUpdate
useEffect(() => {
console.log('Component updated');
console.log(`Current count: ${count}`);
}, [count]); // Dependency array listens for changes to 'count' & Runs whenever 'count' changes
const increment = () => {
setCount((prevCount) => prevCount + 1);
};
return (
<div>
<h1>Counter: {count}</h1>
<button onClick={increment}>Increment</button>
</div>
);
};
export default LifeCycle;