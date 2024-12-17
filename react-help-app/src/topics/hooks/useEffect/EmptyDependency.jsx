// Empty Dependency Array ([]) - The effect runs only once, after the initial render

import React, { useState, useEffect } from "react";
function EmptyDependency() {
const [count, setCount] = useState(0);
useEffect(() => {
console.log("Effect runs only once (initial render).");
}, []);
return (
<div>
<h1>Count: {count}</h1>
<button onClick={() => setCount(count + 1)}>Increment</button>
</div>
);
}
export default EmptyDependency;