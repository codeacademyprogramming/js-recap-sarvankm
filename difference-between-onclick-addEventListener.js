const element = document.getElementById('someID');

element.addEventListener('click', () => {

});

element.addEventListener('click', () => {
    
})

element.onclick = function () {
    console.log('clicked to element from second on click');
}

element.addEventListener('click', () => {
    
})
element.addEventListener('click', () => {
    
})
element.addEventListener('click', () => {
    
});

element.addEventListener('keyup', () => {
    
})

const user = {
    firstname: 'Samir',
    age: 30,
    getAge: function () {
        console.log(this.age);
    }
}
user.getAge = function () {
    return 'hello world';
}
user.getAge = function () {
    return 'another func';
}
console.log(user.getAge());


const elements = Array.from(document.getElementsByClassName(".inner"));
elements.forEach(element => {
    element.style.color = 'red';
})