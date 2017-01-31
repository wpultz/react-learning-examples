# Tools

## Introducing Babel and Webpack

In this section, we will add Babel and Webpack to a React project and start to explore advantages of
using modern tooling.


## Babel

### Syntax

Babel is a compiler that will compile futuristic JavaScript into ES5 compliant JavaScript. Many
plugins are available to help Babel convert syntax of various degrees of acceptance.

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

Webpack is a module bundling tool meant to transform your Javascript project into bundles. It aims
to transform and bundle modules and their dependencies into static assets. Webpack has a large
collection of plugins and loaders available to perform different operations during the bundling
process.

### More Plugins!

`entry point --> loaders/plugins --> bundles`

Webpack configurations specify the entry point(s) of the app as well as file loaders and output
bundles.

### Babel loader

Use the Babel loader with Webpack to apply Babel transformations to code during the bundling
process. This loader will use the preset and plugins specified in the your .babelrc file during
bundling.


## React Browser Tools

Install the React Devtools extension to be able to inspect the React component tree in the browser.
Edit component state and props, as well.
