// Differences between `let` and `const`
// 1
// const user;
// let user;
// user = {};


// 2
// const number = 5;
// number += 100;

// let username = 'Samir';
// username += 'Dadash-zade';
// username = ''

// Similarities between let and const
// 1 - both of them are block scoped(for, if, try-catch, function)



// Differences between `const`,`let` and `var`
// 1 - `const` and `let` are block scoped (`for`, `if`,`try-catch`, `function`) but var is `function` scoped not block
// 2 - `const` and `let` can not be used before initialization, but you can use `var` before initialization
// 3 - you can use same variable name when you declare with `var`, but you can not use same name with `const` and `let`

// var someVar = 'something';
// var someVar = 'another thing';
// console.log(someVar);
