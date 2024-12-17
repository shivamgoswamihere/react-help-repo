// No Dependency Array - The effect runs after every render

import React, { useState, useEffect } from "react";
function NoDependency() {
const [count, setCount] = useState(0);
useEffect(() => {
console.log("Effect runs after every render.");
});
return (
<div>
<h1>Count: {count}</h1>
<button onClick={() => setCount(count + 1)}>Increment</button>
</div>
);
}
export default NoDependency;