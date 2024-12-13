import React, { useState } from "react";
function CounterComponent() {
// Declare state variable 'count' with initial value 0
const [count, setCount] = useState(0);
return (
<div>
<p>Count: {count}</p>
<button onClick={() => setCount(count + 1)}>Increment</button>
<button onClick={() => setCount(count - 1)}>Decrement</button>
</div>
);
}
export default CounterComponent;


// use CounterComponent component in App.js to render it in web application