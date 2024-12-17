// Generating Random Initial Value
import React, { useState } from "react";
function RandomNumber() {
const [random, setRandom] = useState(() => Math.floor(Math.random() * 100));
return (
<div>
<p>Random Number: {random}</p>
<button onClick={() => setRandom(Math.floor(Math.random() * 100))}>
Generate New Random Number
</button>
</div>
);
}
export default RandomNumber;