// Nested Todo List with Subtasks

import React, { useState, useReducer } from 'react';

const reducer = (state, action) => {
switch (action.type) {

case 'add_task':
return {
...state,
tasks: [...state.tasks, { id: Date.now(), title: action.payload, subtasks: [] }],
};

case 'add_subtask':
return {
...state,
tasks: state.tasks.map((task) =>
task.id === action.taskId
?{
...task,
subtasks: [...task.subtasks, { id: Date.now(), title: action.payload }],
}
: task
),
};

default:
throw new Error(`Unknown action: ${action.type}`);
}
};
const initialState = { tasks: [],
};


const ExampleTwo = () => {
const [state, dispatch] = useReducer(reducer, initialState);
const [taskTitle, setTaskTitle] = useState('');
const [subTaskTitle, setSubTaskTitle] = useState('');
const [taskId, setTaskId] = useState(null);

return (
<div>
<input
type="text"
value={taskTitle}
onChange={(e) => setTaskTitle(e.target.value)}
placeholder="New Task"
/>
<button onClick={() => dispatch({ type: 'add_task', payload: taskTitle
})}>
Add Task
</button>
{state.tasks.map((task) => (
<div key={task.id}>
<h3>{task.title}</h3>
<input
type="text"
placeholder="New Subtask"
onChange={(e) => {
setSubTaskTitle(e.target.value);
setTaskId(task.id);
}}
/>
<button
onClick={() =>
dispatch({ type: 'add_subtask', taskId: taskId, payload: subTaskTitle
})
}
>
Add Subtask
</button>
<ul>
{task.subtasks.map((subtask) => (
<li key={subtask.id}>{subtask.title}</li>
))}
</ul>
</div>
))}
</div>
);
};
export default ExampleTwo;