// Managing a Form with Multiple Fields

import React, { useReducer } from 'react';

// Reducer function
const ExampleOne = (state, action) => {
switch (action.type) {

case 'update':
return { ...state, [action.field]: action.value };

case 'reset':
return action.payload; // Reset to initial state

default:
throw new Error(`Unknown action: ${action.type}`);
}
};

const initialState = {
name: '',
email: '',
password: '',
};


const App = () => {
const [formState, dispatch] = useReducer(formReducer, initialState);

return (
<div>
<input type="text" value={formState.name} onChange={(e) =>
dispatch({ type: 'update', field: 'name', value: e.target.value })
}
placeholder="Name" />

<input type="email" value={formState.email} onChange={(e) =>
dispatch({ type: 'update', field: 'email', value: e.target.value })
}
placeholder="Email" />

<input type="password" value={formState.password} onChange={(e) =>
dispatch({ type: 'update', field: 'password', value: e.target.value })
}
placeholder="Password" />

<button onClick={() => dispatch({ type: 'reset', payload: initialState })}>
Reset
</button>

<pre>{JSON.stringify(formState, null, 2)}</pre>
</div>
);
};
export default ExampleOne;