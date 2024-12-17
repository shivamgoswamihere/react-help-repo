/* Populated Dependency Array ([value1, value2]) - The effect runs only when one
or more values in the array change*/

import React, { useState, useEffect } from "react";
function PopulatedDependency() {
const [count, setCount] = useState(0);
const [text, setText] = useState("");
useEffect(() => {
console.log(`Effect runs when count or text changes. Count: ${count}, Text: ${text}`);
}, [count, text]);
return (
<div>
<h1>Count: {count}</h1>
<button onClick={() => setCount(count + 1)}>Increment</button>
<input type="text" placeholder="Type something..." value={text} onChange={(e) => setText(e.target.value)} />
</div>
);
}
export default PopulatedDependency;