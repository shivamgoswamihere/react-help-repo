/*Sets a timer when the component mounts and clears it when the component
unmounts using useEffect hook.*/

import React, { useState, useEffect } from 'react';
const ComponentTimer = () => {
const [seconds, setSeconds] = useState(0);
useEffect(() => { // Start a timer
const intervalId = setInterval(() => {
setSeconds((prevSeconds) => prevSeconds + 1);
}, 1000);
// Cleanup function to clear the timer when the component unmounts
return () => {
clearInterval(intervalId);
console.log('Timer cleared!');
};
}, []); // Empty dependency array ensures this runs only once after mounting
return <div>Seconds Elapsed: {seconds}</div>;
};
export default ComponentTimer;