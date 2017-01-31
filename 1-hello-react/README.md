# Hello React

## An introduction to React.js


## Components

React thrives on the concept of a componentized interface. A React component has three important
pieces...

1) Type: This can be a component class that you have defined, or a tag name string.

2) Props: A mapping of component property names to property values. Props can be properties that
you have defined on a component class, or properties that are associated to an element (`href` for
an `a` element, ...)

3) Children: Components may have child components. A parent component is responsible to for
rendering it's children.

## Component Properties

When writing a React component, you can specify the props that the component will accept, as well
as the data type that each prop should be. During development this will output warnings to the
browser console when prop type mismatches occur. This is useful during development to make sure
you maintain data consistency in your component props.

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
  elemProp: React.PropTypes.elem
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


## Component State




## JSX

JSX is an XML-like syntax can be transpiled into JavaScript. In our case, we will be using the
`react` babel preset, which includes the `transform-react-jsx` transform, which will transpile the
JSX in our React components into valid React JavaScript.

This...
```
<MyComponent firstProp={ 'a' } secondProp = { 'b' }>
  <MyInnerComponent innerProp={ 123 } />
  <div>a div</div>
</MyComponent>
```

Becomes...
```
React.createElement(MyComponent, { firstProp: 'a', secondProp: 'b' },
  React.createElement(InnerComponent, { innerProp: 123 }),
  React.createElement('div', null, 'a div')
)
```


## More
