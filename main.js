 // alert("Hello world")
// console.log('Hello World')
// // mdn is the best documentation for javascript

// ========SETTING UP VARIABLES=============
const age1 = 30;
let age = 31;
console.log(age);
// var has global scope. its not mostly used
// you cant initialize const without giving it a value. 
// use const unless you are sure you will want to change your variable later in the code

// =========DATA TYPES==========
// String, Numbers, Boolean, null, undefined
// semicolons in JS are optional
const name = 'John';
const age2  = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; 

console.log(typeof name)
console.log(typeof isCool)

// There is no float or decimal type in javascript, its just a  number. 
// ========STRINGS=============
// concotenation
console.log('My name is ' + name + ' and I am' + age);
// Template String
console.log(`My name is ${name} and I am ${age}`);

hello = `My name is ${name} and I am ${age}`;
console.log(hello);

// properties and methods. Properties dont have parentheses at the end. Mehods have
const s = 'Hello world';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5));
console.log(s.substring(0,5).toUpperCase());
// split into an array
console.log(s.split(''));
// more meaningful use of split
const list = 'technology, computers, it, code';
console.log(list.split(', ')) //we put the separators inside the brackets. in this case the seperator is comma space. 

//comments
/* Multi
line
comments*/

/* ====== ARRAYS ======= */
// Arrays are variables that hold multiple values. 
// we can create by using a constructor
const numbers = new Array(1,2,3,4,5)
console.log(numbers);

//we can create arrays using this other method. this is the main way of creating arrays.
const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits);

// in javascript we can create arrays with values of different data types
const mixedArray = ['apples', 'oranges', 'pears', 10, true];

console.log(fruits);

// adding values to an array
fruits[3] = 'grapes'
console.log(fruits);

// adding values to the end of the array. 
fruits.push('mangoes');
console.log(fruits);

// adding values to in the beginning
fruits.unshift('strawberries');
console.log(fruits);

// to remove the first last one
fruits.pop();
console.log(fruits);

// to check whether something is an array
console.log(Array.isArray('hello'));//will show false
console.log(Array.isArray(fruits));//will show true

// to get the index of a certain value
console.log(fruits.indexOf('oranges'));

/*==============OBJECT LITERALS===========*/ 
// Continue from 30.12
// One can creat an object, array within an object
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30, 
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street:  '50 main street',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);
console.log(person.firstName);
console.log(person.firstName, person.lastName)
console.log (person.address.city);
console.log(person.hobbies[1]);

const { firstName, lastName } = person;
console.log(firstName);
// we can add a property to person object

person.email = 'jo@gmail.com';
console.log(person)

// ======= CREATING AN ARRAY WITH OBJECTS INSIDE IT
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist Appointment',
        isCompleted: false
    }
]

console.log(todos)
console.log(todos[1].text)

// ========== JSON
// - We can format the array to JSON
const todoJson = JSON.stringify(todos)
console.log(todoJson);

// FOR LOOP
for (let i = 0; i<=10; i++){
    console.log(i);
}

for (let i = 0; i<=10; i++){
    console.log('For loop number: ' + i);
}

// while loop
// For this, we set the variable outside the brackets
 
let i = 0;
while (i < 10) {
    console.log('While Loop Number: ' + i);
    i++
}

// using for loop to loop through the an array
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

for(let todo of todos){
    console.log(todo.text)
}

// ========HIGH ORDER ARRAY METHODS========
todos.forEach(function(todo){
    console.log(todo.text);
});

//map
const todoText = todos.map(function(todo){
    return todo.text;
});

console.log(todoText); // returns an array with all texts.

//filter
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});// Returns an array with objects which have isCompleted being equal to true

console.log(todoCompleted);
//we can also display the texts where to do is completed. 
const todoTextCompleted = todos.filter(function(todo){
    return todo.text;
}).map(function(todo){
    return todo.text;
})

console.log(todoCompleted);



/* CONDITIONALS */
const k = '10';

if(k===10){
    console.log('x is 10');
}

// tenary operator
const t = 11;
const color = t > 10 ? 'red' : 'blue';
console.log(color);

// switch statements

const fruit = 'fr';

switch (fruit) {
    case 'mango':
        console.log('Its a Mango');
        break;
    case 'passion':
        console.log('Its a Passion fruit');
        break;
    case 'Guava':
        console.log('Its a Guava');
        break;

    case 'Orange':
        console.log('Its an orange');
        break;
    default:
        console.log('It\'s neither of the options');
        break;
}

// FUNCTIONS
function addNums (num1, num2){
   console.log(num1 + num2); 
}

addNums(5,3);

// You can pass default values
function mulNums(num1 = 1, num2 = 1) {
    console.log(num1 * num2);
}

mulNums();

// arrow functions
// -- Instead of using the keyword function we name the function as a variable. 

const  divNums = (num1 = 1, num2 =1) => {
    return num1 / num2;
}

console.log(divNums(5,5));

// -- if you want to return something you dont neet to use the return keyword i.e if you dont want to use curly braces. 

// if you  there is only one line of code inside the function, you dont need to use curly braces 
const remNums =(num1, num2) => num1 % num2;

console.log(remNums(5,2));

// if you are using only one parameter, you dont need parenthesis;
console.log(addNums(5));

const addNum = num1 => num1 + 5;

// using arrow functions with for each
todos.forEach((todo)=> console.log(todo));

// ============OBJECT ORIENTED PROGRAMMING===========
//Constructor function
function Person (firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);//Here we are using date object, which takes a string parameter, hence converting as string to a date object.     
    // this.getBirthYear = function (){
    //     return this.dob.getFullYear();    
    // }
    // this.getFullName = function() {
    //     return `${this.firstName} ${this.lastName}`;
    // }
}


// using prototypes to add methods to your constructor function
Person.prototype.getBirthYear = function () { 
    return this.dob.getFullYear();    

 }

 Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;

 }
// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person2.firstName);
console.log(person2.dob.getDay());

console.log(person1.getBirthYear());

console.log(person1.getFullName());

// es6
// Use of classes (recommended way)

class Persona {
    constructor(firstNamw, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);//Here we are using date object, which takes a string parameter, hence converting as string to a date object.     
    }
    getBirthYear () {
        return this.dob.getFullYear();    
    }

   
}




// MANIPULATING THE DOM
// Single element
    const form = document.getElementById('my-form');
    console.log(document.querySelector('.container'));
    console.log(document.querySelector('h1')); //will select only the fist h1 since its a single element selector. 

// Multiple element
    console.log(document.querySelectorAll('.item'));//this is the preferred one
    // console.log(document.getElementByClassName('item'));

// console.log(document.getElementByTagName('li'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

// manipulating the dom
const ul = document.querySelector('.items');

// ul.remove();// remove all
//ul.lastElementChild.remove(); //remove the first element of of ul
ul.firstElementChild.remove();

// changing the text
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Peter';
ul.lastElementChild.innerHTML = '<h5>Hello</h5>'; //to add html dynamically you add it with innerhtml

// // changing styling
// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// // Events
// // btn.addEventListener('click', (e) => {
// //     e.preventDefault(); //to avoid flushing
// //     console.log('click');
// //     console.log(e.target);
// //     console.log(e.target.className);
// //     document.querySelector('#my-form').style.background = '#ccc';
// //     document.querySelector('body').classList.add('bg-dark');
// //     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';

// // });

// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault(); //to avoid flushing
//     console.log('click');
//     console.log(e.target);
//     console.log(e.target.className);
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';

// });

// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault(); //to avoid flushing
//     console.log('click');
//     console.log(e.target);
//     console.log(e.target.className);
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';

// });

// form app
const MyForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

MyForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        // set time out functions takes two parameters, the first one is the function to be executed, the second one is the time in milliseconds
        setTimeout(()=> msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        
        userList.appendChild(li);

        // clear the fields.
        nameInput.value = '';
        emailInput.value='';
    }

}
