// Fetching data when the component mounts using useEffect hook.

import React, { useState, useEffect } from 'react';
const FetchData = () => {
const [data, setData] = useState(null);
useEffect(() => { // Simulate fetching data
setTimeout(() => {
setData('Hello Students, Welcome to Learn2Earn Labs!');
}, 2000);
});
return (
<div>
<h1> Fetching the available data </h1>
<p>{data ? data : 'Loading...'}</p>
</div>
);
};
export default FetchData;