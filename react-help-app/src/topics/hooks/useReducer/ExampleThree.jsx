// API Calls in useReducer-Managed Components

import React, { useReducer, useEffect } from 'react';
// Define the initial state
const initialState = {
data: null,
loading: false,
error: null,
};

// Define the reducer function
const ExampleThree = (state, action) => {
switch (action.type) {
case 'fetch_start':
return { ...state, loading: true, error: null };
case 'fetch_success':
return { ...state, loading: false, data: action.payload, error: null };
case 'fetch_failure':
return { ...state, loading: false, error: action.payload };
default:
throw new Error(`Unknown action: ${action.type}`);
}
};


const App = () => {
const [state, dispatch] = useReducer(reducer, initialState);
// Function to trigger data fetching
const fetchData = (url) => {
dispatch({ type: 'fetch_start' });
fetch(url)
.then((response) => {
if (!response.ok) {
throw new Error('Network response is not ok');
}
return response.json();
})
.then((data) => {
dispatch({ type: 'fetch_success', payload: data });
})
.catch((error) => {
dispatch({ type: 'fetch_failure', payload: error.message });
});
};
// Side effect to perform an initial data fetch
useEffect(() => { fetchData('https://jsonplaceholder.typicode.com/posts'); }, []);
return (
<div>
<h1>Data Fetching with useReducer and useEffect</h1>
{state.loading && <p>Loading...</p>}
{state.error && <p style={{ color: 'red' }}>Error: {state.error}</p>}
{state.data && (
<ul>
{state.data.slice(0, 5).map((item) => (<li key={item.id}>{item.title}</li> ))}
</ul>
)}
<button onClick={() =>
fetchData('https://jsonplaceholder.typicode.com/posts')}>
Refetch Data
</button>
</div>
);
};
export default ExampleThree;