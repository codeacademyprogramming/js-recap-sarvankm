// const number = 100;
// const str = "hello world";
// const und = undefined;

// truthy values: -Infinite, +Infinite, "string", true, {}, [], function
// falsy values: NaN, undefined, 0, '', false

// console.log(number || 5); // 100
// console.log(100 > 50 && und); // undefined
// console.log(und || str); // hello world
// console.log(str && number); // 100
// console.log(number < 200 && number > 50 && true); // true


// const num = 100;

// function someFunc () {
//     function anotherFunc () {
//         console.log(num);
//     }
//     anotherFunc();
// }

// someFunc();

// let number = 10;

// const foo = n => {
//     number *= 10;
//     console.log(n);
// }

// console.log(number);
// foo(20);
// foo(20);
// foo(20);
// foo(20);
// foo(20);
// console.log(number);

const arr = [1,2,3,4];
arr[0] = 100;
arr = "";
arr.pop();
arr.push();
arr.shift();
arr.unshift();