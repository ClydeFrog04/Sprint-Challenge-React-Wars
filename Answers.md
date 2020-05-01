# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.
Reactjs is a coding library designed to make building components easier. It includes state management to we can avoid callback hell.


1. Describe component state.
Component state is a way of sharing data between different components. Many components may need to access the same data at the same time, react makes sure those components get what they need without getting in the way of each other.


1. Describe props.
Props are how we pass data to a component. Each component can have its own properties(props) that it uses to create UI.


1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?
We sync effects in react using the useEffect hook. Side effects are things taht manipulate data outside the scop of the conponent function. Things like api calls are side effects because they affect data on another server.