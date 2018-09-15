// console.log("Finish this and enjoy the weekend!");

// Section 1. Variables & Datatypes
// A. Q + A
    // 1. var = value; (by setting the variable = to its value)
    // 2. var = newValue; (by defining the with the new value)
    // 3. varNew = varOld; (by setting the new variable to = the existing varaible)
    // 4. declare: setting the variable in our scope
    //    define: putting a variable in place 
    //    assign: giving a variable a value
    // 5. the act of writing out the process to execute a given request
    //    in words rather than code with the idea being that doing so will
    //    (does) make the process of executing the request in code easier.
    // 6. 70% thinking 30% typing

// B. Strings

//Q1)

let firstVariable;
firstVariable = "Hello World";
firstVariable = 15;
let secondVariable = firstVariable;
secondVariable = "World, Hello!"
console.log(firstVariable);

//Q2)

let yourName = "Tomas";
console.log("Hello my name is " + yourName);

//C. Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(true != false);
console.log(false == false == false == false == false == false == true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a < b < c);
console.log(a <= a < d);
console.log(48 == '48');

//D. The farm

const animal = "dog";
    if(animal === "cow"){
        console.log("mooooo");
    } else {
        console.log("Hey! You're not a cow.")
    }

//E. Driver's Ed

const canIDrive = (age) => {
    if(age >= 16) {
        console.log("Here are the keys.")
    } else {
        console.log("Sorry, you're to young.")
    }
};

canIDrive(18);

//Section 2. Loops

//A. The basics

//Q1)

for(let i = 0; i <= 10; i++){
    console.log(i);
};


//Q2)

for(let i = 10; i <= 400; i++){
    console.log(i);
};

//Q3)

for(let i = 12; i <= 4000; i+= 3){
    console.log(i);
};

//B. Get even

for(let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        console.log(`${i} <-- is an even number.`);
    }
};

//C. Give me Five

//Q1 & Q2)

for(let i = 1; i <= 100; i++){
    if(i % 5 === 0){
        console.log(`I found a ${i}. High five!`);
    } else if(i % 3 === 0){
        console.log(`I found a ${i}. Three is a crowd`);
    }
};

//D. Savings account

//Q1)

let bankAccount = 0;
for(let i = 1; i <= 10; i ++){
    bankAccount += i
};
console.log(bankAccount);

//Q2)

let payRaise = 0;
for(let i = 1; i <= 100; i ++){
    payRaise += i * 2;
};
console.log(payRaise);


//E. Multiples of 3 and 5 (Already Answerd in previous homework/labs)

// Section 2. Arrays & Control flow

// A. Talk about it:
    // 1. elements (the position of an element is its index)
    // 2. No
    // 3. A list of things

// B. Easy Does it

const quotes = ["Hi", "Hey", "Yoo!"];

// C. Accessing elements

const randomThings = [1, 10, "Hello", true];

//Q1)

randomThings[0];
console.log(randomThings[0]);

//Q2 & Q3)
randomThings[2] = "World";
console.log(randomThings[2]);

//D. Change values

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

//Q1)

ourClass[2];
console.log(ourClass[2]);

//Q2)

ourClass[4] = "Octocat";
console.log(ourClass[4]);

//Q3)

ourClass.push("Cloud City");
console.log(ourClass);

//E. Mix It Up

const myArray = [5, 10, 500, 20]

//Q1

myArray.push("Egon");
myArray.push("Come On Man! I want to go home! jk jk but really...")
console.log(myArray);

//Q2

myArray.shift();
console.log(myArray);

//Q3

myArray.unshift("Bob Marley");
console.log(myArray);

//Q4

myArray.pop();
console.log(myArray);

//Q5

myArray.reverse();
console.log(myArray);

//F. Biggie Smalls

const bigLittleNum = (num) => {
    if(num <= 99){
        console.log("little number");
    } else if(num >= 100){
        console.log("big number");
    }
};

bigLittleNum(15);

// G. Monkey in the Middle

const findMonkey = (num) => {
    if(num < 5){
        console.log("little number");
    } else if(num > 10){
        console.log("big number");
    } else {
        console.log("monkey");
    }
};

findMonkey(5);

// H. What's in Your Closet

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

//Q1

console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);

//Q2

kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset);

//Q3

kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);

//Q4

console.log(thomsCloset[0][0]);

//Q5

console.log(thomsCloset[1][0]);

//Q6

console.log(thomsCloset[2][2]);

//Q7

console.log(`Thom is wearing a ${thomsCloset[0][0]}, ${thomsCloset[1][0]}, and ${thomsCloset[2][2]}!`);

//Q8

thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset[1][2]);

// Section 4. Functions

// A. printGreeting (Already done per homework instructions)

// B. printCool

const printCool = (name) => {
    console.log(`${name} is cool`);
};
printCool("Captain Reynolds");


























