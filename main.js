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
    
}