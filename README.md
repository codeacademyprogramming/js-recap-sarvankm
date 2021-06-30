# P217-FE-ReactJS-js-recap

### Resources

## Working with js objects their methods and so on
* https://javascript.info/object
* https://javascript.info/constructor-new
* https://javascript.info/optional-chaining
* https://javascript.info/object-methods
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
* https://www.w3schools.com/js/js_objects.asp
* https://www.w3schools.com/js/js_object_definition.asp
* https://www.w3schools.com/js/js_object_properties.asp
* https://www.w3schools.com/js/js_object_methods.asp
* https://www.w3schools.com/js/js_object_display.asp
* https://www.w3schools.com/js/js_object_accessors.asp
* https://www.w3schools.com/js/js_object_constructors.asp
* https://www.w3schools.com/js/js_object_prototypes.asp
* https://www.w3schools.com/js/js_object_es5.asp


## Global objects in js
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
* https://javascript.info/date
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

## Extra resources
* https://medium.com/@luke_smaki/javascript-es6-classes-8a34b0a6720a


## Arrays
* https://www.w3schools.com/js/js_arrays.asp
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

## Strings
* https://www.w3schools.com/js/js_string_methods.asp
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

## Functions
* https://javascript.info/function-basics

## Function expressions
* https://javascript.info/function-expressions

## Arrow functions
* https://javascript.info/arrow-functions-basics

## Callback Functions
* https://code-boxx.com/javascript-callback-functions/
* https://www.w3schools.com/js/js_callback.asp

## IIFE
* https://javascript.info/var


## Callback functions
* https://code-boxx.com/javascript-callback-functions/
* https://www.w3schools.com/js/js_callback.asp

### Task
Implement following array methods by yourself: filter, map, forEach, some, every, reverse. All of the functions should accept arrays as a parameter and a callback function, and as in array methods you must provide correct arguments to callbacks
Example reverse function
```js
  function reverse(arr) {
    const result = [];
    for (let i = arr.length; i >= 0; i--) {
      result.push(arr[i]);
    }
    return result;
  }
  reverse([2,3,4,56,5,8]) // expected output is [8, 5, 56, 4, 3, 2]
