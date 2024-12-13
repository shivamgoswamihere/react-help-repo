
# React Hooks

- React Hooks revolutionized the way we build React applications.
- They offer a cleaner, more modular approach to managing state, lifecycle, and reusable logic in functional components.
- Without hooks, developers face challenges in writing maintainable, performant, and reusable code. Hence, adopting hooks is highly recommended for modern React development.
- React Hooks were introduced in React 16.8 as a way to use state and other React features in functional components.
- Prior to hooks, managing state and lifecycle methods was only possible in class components. This often led to more complex, less readable code.
- React Hooks are functions that let you "hook into" React's state and lifecycle features directly in functional components.
- They enable developers to manage side effects, lifecycle events, and state seamlessly without needing to use class components.

## Why Hooks Were Introduced

- Reusability of Logic
- Cleaner Code
- Avoiding "Wrapper Hell"
- Easy Testing
- Improved Component Structure
- Fragmented Logic

## Important React Hooks

### Basic Hooks

- useState: Manages local state in a functional component.

`const [count, setCount] = useState(0);`

- useEffect: Handles side effects like fetching data, DOM Manipulation, or subscriptions.

```
useEffect(() => {
    console.log('Component mounted or updated');
    return () => console.log('Cleanup on unmount');
    }, [dependencies]);
```

- useContext: Consumes context values without using Consumer.

`const value = useContext(MyContext);`

### Additional Hooks

- useReducer: Alternative to useState for complex state logic or state dependent on previous values.

`const [state, dispatch] = useReducer(reducer, initialState);`

- useCallback: Memoizes callback functions to prevent unnecessary re-creation.

```
const memoizedCallback = useCallback(() => {
doSomething(a, b);
}, [a, b]);
```

- useMemo: Memoizes computed values to optimize performance.

`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`

- useRef: Accesses DOM nodes or persists values across renders without causing re-renders.

`const ref = useRef(initialValue);`

- useImperativeHandle: Customizes the instance value exposed by useRef in parent components.

`useImperativeHandle(ref, () => ({ customMethod }));`

- useLayoutEffect: Similar to useEffect, but fires synchronously after all DOM mutations.

```
useLayoutEffect(() => {
// DOM manipulation
}, []);
```

- useDebugValue: Adds labels to custom hooks for debugging.

`useDebugValue(value, formatFunction);`

### Newer Hooks

- useImperativeHandle: Customizes the instance value exposed by useRef in parent components.

`useImperativeHandle(ref, () => ({ customMethod }));`

- useLayoutEffect: Similar to useEffect, but fires synchronously after all DOM mutations.

```
useLayoutEffect(() => {
// DOM manipulation
}, []);
```

- useDebugValue: Adds labels to custom hooks for debugging.

`useDebugValue(value, formatFunction);`
## Documentation

[Read Official React Documentation on Hooks here  <-----](https://react.dev/reference/react/hooks)

