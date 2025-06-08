// 1. Greet a User

// function greet(name) {
//     console.log(`Hello ${name}`);
    
// }


// 2. Add Two Numbers

// function sum(a,b) {
//     return a + b;
// }

// console.log(sum(3,4));


// 3. Check Even or Odd

// function isEven(number) {
//     if(number%2==0){
//         console.log("Even");
        
//     }else{
//         console.log("Odd");
        
//     }
// }

// isEven(4)



// 4. Find the Square of a Number


// function square(number) {
//     return number*number;
// }

// console.log(square(3));


// 5. Convert Celsius to Fahrenheit

// function convertCelsiustoFahrenheit(n) {
//     convert = (n * 9/5) + 32;
//     console.log(convert);
    
// }

// convertCelsiustoFahrenheit(45)


// 6. Find the Larger of Two Numbers

// function max(a,b) {
//     if (a>b) {
//         console.log(`${a} is greater`);
        
//     }else{
//         console.log(`${b} is greater`);
        
//     }
// }

// max(10,100)


// 8. Check if a Number is Prime

// function isPrime(n) {
//     if(n%2==0){
//         console.log(`True! ${n} is Prime Number`);
        
//     }else{
//         console.log(`False! ${n} is not a Prime Number`);
        
//     }
// }


// isPrime(10)



// Faulty Calculater

// let a = prompt("Enter your number 1")
// let b = prompt("Enter your number 2")
// let c = prompt("Enter your operator")

// if (a+b && c=="+") {
//     console.log(a-b);
    
// }else if(a*b && c=="*"){
//     console.log(a-b);
    
// }else if(a-b && c=="-"){
//     console.log(a/b);
    
// }else if(a/b && c=="/"){
//     console.log(a**b);
    
// }else{
//     console.log("Enter the correct Number");
    
// }



let a = Number(prompt("Enter your number 1"));
let b = Number(prompt("Enter your number 2"));
let operator = prompt("Enter your operator (+, -, *, /)");

let result;

// 10% chance to give a wrong answer
let isFaulty = Math.random() < 0.1;

if (operator === "+") {
    result = a + b;
} else if (operator === "-") {
    result = a - b;
} else if (operator === "*") {
    result = a * b;
} else if (operator === "/") {
    result = a / b;
} else {
    alert("Invalid operator!");
}

// If faulty, mess up the result a bit
if (isFaulty) {
    // Add or subtract a small random number to mess it up
    let fakeResult = result + Math.floor(Math.random() * 10) + 1;
    console.log("🛑 Faulty Result:", fakeResult);
} else {
    console.log("✅ Correct Result:", result);
}
