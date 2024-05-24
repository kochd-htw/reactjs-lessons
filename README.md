# React Lessons

## Lesson 1 - React Components

React components are essential building blocks of any React application, designed to be reusable and encapsulated. They manage their own state and determine the rendering behavior. Functional components, one of the main types used, include features such as lifecycle hooks, which are critical for managing updates throughout a component's life. These components communicate through props, which enable data flow from parent to child components, and they can maintain an internal state to track changes. This structured approach promotes a modular and maintainable codebase, making it easier to manage UI updates and changes effectively.

### Basic Components
Components are JavaScript functions. We declare them in the **arrow function style**:
```jsx
// Arrow functions are one way to declare functions in JavaScript.
function MyComponent() {}
// Can be written as:
const MyComponent = () => {}
```

An Example of a simple react component, written in arrow function style:
```jsx
const MyComponent = () => {
  /* Use the function's body to write business logic */

  /* The component returns it's render logic */
  return (
    <h1>
      This is a html header.
    <h1>
  )
}
```

### Component Composition

Components can be used in the render logic of other components.
All HTML-Elements (a, br, h1, button etc.) are already defined in the framework and can be used out-of-the-box.
```jsx
// Arrow functions can be written even shorter, if they only return something
const MyHeader = () => (
  <h1>
    This is a html header.
  <h1>
)

const MyComponent = () => {
  /* Use the function's body to write business logic */

  /* Use your own components in the render logic */
  return (
    <MyHeader />
  )
}
```

Just to test commits
