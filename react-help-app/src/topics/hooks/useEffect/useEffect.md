
# useEffect

- The useEffect hook in React is one of the most powerful and versatile tools for managing side effects in functional components.
- useEffect is a hook introduced in React 16.8 that allows you to perform side effects in functional components.


**Side Effect :**  A side effect in React refers to anything that affects something outside the component, such as:
- Interacting with the browser DOM (e.g., updating the title).
- Fetching data from an API or external service.
- Subscribing to or cleaning up resources (e.g., event listeners or intervals).

Before hooks, side effects were only possible in class components using lifecycle
methods. useEffect unifies these into a single API for functional components,
making them more powerful and flexible

#### Core Features of useEffect

- **Declarative and Reactive:** You declare the effect in your component, and React takes care of running it at the appropriate time. useEffect automatically reacts to changes in the specified dependencies.
- **Combines Multiple Lifecycle Methods:** Instead of splitting logic across *componentDidMount*, *componentDidUpdate*, and *componentWillUnmount*, you use a single useEffect for all related behavior.
- **Runs After Rendering:** By default, useEffect runs after the component renders, ensuring that the DOM is fully updated.

### How useEffect Works
The useEffect hook accepts two arguments:
- **Effect Function:** A callback that contains the side effect logic.
- **Dependency Array (Optional):** A list of values that the effect depends on

#### Syntax
```
useEffect(() => {// Side effect logic here
return () => {
// Cleanup logic (optional)
};
}, [dependencies]); // Dependency array (optional)
```

#### Behavior Based on Dependency Array
- **No Dependency Array:** The effect runs after every render.
- **Empty Dependency Array ([]):** The effect runs only once, after the initial render.
- **Populated Dependency Array ([value]):** The effect runs only when the specified dependencies change.


### Class Component life cycle methods
Class Component life cycle methods in React are special methods that are called at different stages of a component's lifecycle. These stages can be broadly divided into:
- **Mounting:** When a component is being inserted into the DOM.
- **Updating:** When the component’s state or props change.
- **Unmounting:** When the component is removed from the DOM.

#### Common Lifecycle Methods
- **componentDidMount:** Called after the component is mounted in the DOM.
- **componentDidUpdate:** Called after the component updates (state or props change).
- **componentWillUnmount:** Called just before the component is removed from the DOM