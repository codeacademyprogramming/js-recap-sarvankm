const str = "4444";
console.log(isNaN(+str) ? 'can not convert str' : +str);
console.log(Number(str));
console.log(parseInt(str));

const num = 100;

const obj = {
    firstname: 'Fazil',
    lastname: 'Fazilov',
    toString: function () { 
        return this.firstname + " " + this.lastname;
    }
};

console.log(String(obj));
console.log('salam dunya');