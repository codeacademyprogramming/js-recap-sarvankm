const arr = [200, 1, 0, 3, 4, 10, 6, 77, 8, 111, -1, 100];

// some, every -> boolean

const result = arr.every((value) => value >= 0 ? true : false);
const result2 = arr.some((value) => value >= 0 ? true : false);

// pop, push, shift, unshift
console.log(arr.pop());
console.log(arr.push(5));
console.log(arr);

// join
const result3 = arr.join('-');
console.log(result3);

// sort
// const letters = ['z', 'a','e', 'b', 'c'];
// letters.sort();
arr.sort(function (a, b) {
    return b - a;
});

const otherNumbers = [5, 10, 15, 20];
const users = [
    {
        firstname: 'Samir',
        lastname: 'Dadash-zade',
        age: 30
    },
    {
        firstname: 'Agil',
        lastname: 'Atakishiyev',
        age: 23
    },
    {
        firstname: 'Agil1',
        lastname: 'Atakishiyev',
        age: 23
    },
    {
        firstname: 'Agil2',
        lastname: 'Atakishiyev',
        age: 23
    },
    {
        firstname: 'Agil3',
        lastname: 'Atakishiyev',
        age: 23
    },
    {
        firstname: 'Kamran',
        lastname: 'Jabiyev',
        age: 35
    }
]
// map, forEach, filter
// const result4 = otherNumbers.map(function (value) {
//     return value * 2;
// });

// const result5 = otherNumbers.filter((value) => value < 10);

console.clear();

otherNumbers.forEach(function (num) { 
    console.log(num);
});

console.clear();


const result6 = otherNumbers.find((value) => value === 5);
const result7 = users.find((user) => user.age > 5);
const result8 = users.findIndex((user) => user.age > 5);
console.log(result8);