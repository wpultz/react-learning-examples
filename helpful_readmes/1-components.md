# Hello React

## An introduction to React.js

Here we will examine React components, component props, and components state.

## Components

React thrives on the concept of a componentized interface. A React component has three important pieces...

1) Type: This can be a component class that you have defined, or a tag name string.

2) Props: A mapping of component property names to property values. Props can be properties that you have defined on a component class, or properties that are associated to an element (`href` for an `a` element, ...)

3) Children: Components may have child components. A parent component is responsible to for rendering it's children.

## Component Properties

When writing a React component, you can specify the props that the component will accept, as well as the data type that each prop should be. During development this will output warnings to the browser console when prop type mismatches occur. This is useful during development to make sure you maintain data consistency in your component props.

### JS Primitive PropTypes

```
MyComponent.propTypes = {
  arrayProp: React.PropTypes.array,
  boolProp: React.PropTypes.bool,
  funcProp: React.PropTypes.func,
  numberProp: React.PropTypes.number,
  objectProp: React.PropTypes.object,
  stringProp: React.PropTypes.string,
  symbolProp: React.PropTypes.symbol
}
```

### Renderable/Component PropTypes

```
MyComponent.propTypes = {
  nodeProp: React.PropTypes.node,
  elemProp: React.PropTypes.element
}
```

### Any Type You Want!

Use `React.PropTypes.instanceOf()` to validate a prop as an instance of a class.

```
MyComponent.propTypes = {
  clssProp: React.PropTypes.instanceOf(MyJsClass)
}
```

### Other fun PropTypes helpers

```
MyComponent.propTypes = {
  // adding `.isRequired` to a propType makes that property required
  requiredStringProp: React.PropTypes.string.isRequired,

  // validate that the value of the prop is a member of certain set of values with `.oneOf`
  // this will validate that the value of this props is either 'a' or 'b'
  limitedValueProp: React.PropTypes.oneOf(['a', 'b']),

  // arrayOf and objectOf can validate the type of values in an array or object
  arrOfProp: React.PropTypes.arrayOf(React.PropTypes.number),
  objOfProp: React.PropTypes.objectOf(React.PropTypes.string),

  // pass a function as the prop type to implement a custom prop validator
  customProp: function(props, propName, componentName) {
    if (props[propName] === 5) {
      // return an error object to fail the prop type validation
      return new Error(`invalid prop value for ${propName} specified in ${componentName}`)
    }
  }
}
```

### Accessing Properties

Props are accessible with `this.props` throughout the methods of a component class.

```
render() {
  return <div>{ this.props.text }<div>
}
```

### Passing Properties into a Component

When creating an instance of a component, you can pass a value into a component with curly braces.

```
render() {
  return <AComponent firstProp={ 'a' } secondProp={ 'b' } />
}
```


## Component State

React Components can have a "state" local to the component. A component's state is useful for maintaining information about a component that lives outside the context of the application's state. For instance, a drop down menu component might have a state value for "is expanded" to designate whether the menu is open or closed. The component state is just a plain JS object.

### Initial state

Set the initial state of a component in the component class' constructor.

```
class MyStatefulComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      key: 'value'
    }
  }
}
```

### Setting state

Set state keys using `this.setState` with an object with the state keys to update. The object passed to `setState` will not replace the entire state object, but will be merged into the current state object.

```
class MyStatefulComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      stateKey: 'stateValue'
    }
  }

  componentWillReceiveProps() {
    this.setState({
      stateKey: 'newStateKeyValue'
    })
  }
}
```


## JSX

JSX is an XML-like syntax can be transpiled into JavaScript. In our case, we will be using the `react` babel preset, which includes the `transform-react-jsx` transform, which will transpile the JSX in our React components into valid React JavaScript.

This...
```
render() {
  return (
    <MyComponent firstProp={ 'a' } secondProp = { 'b' }>
      <MyInnerComponent innerProp={ 123 } />
      <div>a div</div>
    </MyComponent>
  )
}
```

Becomes...
```
render() {
  return (
    React.createElement(MyComponent, { firstProp: 'a', secondProp: 'b' },
      React.createElement(InnerComponent, { innerProp: 123 }),
      React.createElement('div', null, 'a div')
    )
  )
}
```


## More

TODO Do a section on Stateful vs. Stateless components
