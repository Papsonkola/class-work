//Class exercise
var x = 5;
var y = 10;
/*
*/

//How to check data type
console.log(typeof(67));
console.log(typeof(67));
console.log(typeof("67"));
console.log(typeof(847.78));
var fruits = ["Banana", "mango", "pear", "orange"]
var fruits = new Array ("banana", "mango", "pear","orange")
console.log(typeof(fruits));
console.log(typeof(fruits2));

//SLICING LIST

document.write(fruits, "<br>")
// let result = fruits.slice(2, 4)
// console.log(result);
document.write(fruits[1], "<br>");
document.write(fruits.length, "<br>");
document.write("i love " +  fruits[3] +" very much ")

/*
comparison operators
== for equal to
<= for less than or equal to 
>= for grster than or equal to 
=== for checking data type 
*/

/*
logical Operators
AND symbol &&
OR symbol
NOT symbol !

conditional Statement 
if (condition)
{
    code to executed if true
}
{
    code to be executed if false
}
*/

// let n1 = 10;
// let n2 = 2;
// let n3 = '10';
// let n4 = 10;

// // console.log(n1==n2);
// // console.log(n1>n2);
// // console.log(n1>=n2);
// // console.log(n1===n2);
// // console.log(n1===n3);
// // console.log(n1===n4);

// if (n1==n2){
//     document.write("n1 is same as n2")
// }
// else {
//     document.write("n1 is not same as n2");
// }

// //More examples
// var user_age = prompt("how old are you: ")

// if (user_age < 18){
//     alert("You are not eligible to apply")
// }

// else if (user_age >=18 && user_age <=60){
//     alert ("You are welcome to my website")
// }

// else {
//     alert("You are too old to apply")
// }

//More Examples
var grade = prompt("What is your score?")

if (grade >= 45 && grade <= 49){
    alert ("Your grade is D")
}
else if (grade < 45){
    alert ("Your grade is F")
}
else if (grade >= 70 && grade == 100){
    alert ("Your grade is A")
}
else if (grade >= 60 && grade <= 69){
    alert ("Your grade is B")
}
else if (grade >= 50 && grade <= 59){
    alert ("Your grade is C")
}
else {
    alert("Input a figure")
}

/* loops are used to execute a block of code a numer of times.
Types of loop
We have two major types of loop
- For 
- While 
For loop is used when you want a condition to be true for a number of time 
OR
loops through a block of code a number of time
While */

