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

//Q1 & 2)

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














