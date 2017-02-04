# Tools

## Introducing Babel and Webpack

In this section, we will add Babel and Webpack to a React project and start to explore advantages of
using modern tooling.

## A Quick ES6 Primer

Throughout the examples, you will see many many things that may look unfamiliar if you are not up to speed with ES6.

### let and const

`let` and `const` allow you to block scope variables.

`let` block scopes a variable and allows reassignment.

`const` block scopes a variable, but throws an error if you attempt to reassign it

```
let myVar = 'abc'

const otherVar = 'def'
otherVar = 'ghi' // big ole error!

const myMap = { a: 1 }
myMap.b = 2 // no error, myMap was _not_ reassigned!
```

### Arrow functions

"Fat arrow" functions are a shorthand for functions.

```
// no args, one-liner
const sayHi = () => console.log('hi')
function sayHi() {
  console.log('hi')
}

// args, one-liner with implicit return
const addThings = (thing1, thing2) => thing1 + thing2
function addThings(thing1, thing2) {
  return thing1 + thing2
}

// args, body, explicit return
const doSomething(a, b, c) => {
  const allEqual = a === b === c
  if (allEqual) {
    console.log('all equal!')
  }
  return allEqual
}
function doSomething(a, b, c) {
  const allEqual = a === b === c
  if (allEqual) {
    console.log('all equal!')
  }
  return allEqual
}
```

### Object and Array Destructuring

Object and array destructuring is a convenient way to pull values out of objects and arrays. Destructuring also provides a way to alias values to different names and default a value.

```
const myMap = { a: 1, b: 2, c: 3 }

// destructure a, b,and c from myMap
const { a, b, c } = myMap
console.log(a, b, c) // 1 2 3

const a = myMap.a
const b = myMap.b
const c = myMap.c
console.log(a, b, c) // 1 2 3

// destrucure b from myMap, but into the variable `z`
const { b: z } = myMap
console.log(z) // 2

const z = myMap.b
console.log(z) // 2


// destructure f from myMap, but provide a default value since we happen to know it doesn't exist
const { f = 5 } = myMap
console.log(f) // 5

let f = myMap.f || 5
console.log(f) // 5
```


## Babel

### Syntax

Babel is a compiler that will compile futuristic JavaScript into ES5 compliant JavaScript. Many plugins are available to help Babel convert syntax of various degrees of acceptance.

* arrow functions (es2015-arrow-functions)
* block scoping (es2015-block-scoping)
* class syntax (es2015-classes)
* object spread operator (es2015-spread)
* jsx syntax (react-jsx)
* function binding (transform-function-bind)
* class properties (transform-class-properties)

### Presets

Babel offers presets that encompass collections of babel plugins commonly used together.

* es2015
* react
* Stage 0 - Stage 4

### Polyfill

Babel Polyfill is used to support new features not yet fully supported.

A few useful features offered by babel-polyfill:

* Promises
* Generators
* Object.assign
* Array.prototype.includes


## Webpack

Webpack is a module bundling tool meant to transform your Javascript project into bundles. It aims to transform and bundle modules and their dependencies into static assets. Webpack has a large collection of plugins and loaders available to perform different operations during the bundling process.

### More Plugins!

`entry point --> loaders/plugins --> bundles`
Webpack configurations specify the entry point(s) of the app as well as file loaders and output bundles.

### Babel loader

Use the Babel loader with Webpack to apply Babel transformations to code during the bundling process. This loader will use the preset and plugins specified in the your .babelrc file during bundling.


## React Browser Tools

Install the React Devtools extension to be able to inspect the React component tree in the browser.

Edit component state and props, as well.
