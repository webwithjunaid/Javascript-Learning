// 1. Print numbers from 1 to 10.

// for(i = 1;  i <= 10; i++){
//     console.log(i);
    
// }


// 2. Print all even numbers from 1 to 20.

// for(i = 0; i<=20; i+=2){
//     console.log(i);
    
// }



// 3. Print all numbers from 10 to 1 (in reverse).


// for(i = 10; i>=1; i--){
//     console.log(i);
    
// }


// 4. Print the multiplication table of 5 (e.g., 5, 10, 15, ..., 50).

// for(i = 1; i<=10; i++){
//     sum = i*5;
//     console.log(`5 * ${i} = ${sum}`);
    
// }


// 5. Guess the number game


// let num;

// while (num!=="1234") {
//     num = prompt("Enter your number")
// }

// console.log("Congratulation! You guess the correct number..");



// Step 1: Generate a random number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

// Step 2: Initialize guess and attempt counter
let guess;
let attempts = 0;

// Step 3: Use a while loop to keep asking until the guess is correct
while (guess !== secretNumber) {
  // Ask the user for a guess
  guess = Number(prompt("Guess a number between 1 and 10:"));
  attempts++;

  if (guess === secretNumber) {
    alert(`🎉 Correct! You guessed the number in ${attempts} attempt(s).`);
  } else {
    alert("❌ Wrong guess. Try again!");
  }
}