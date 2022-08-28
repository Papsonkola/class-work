// function multiply(p1,p2){
//     z = p1 + "x" + p2 + "=";
//     return seun = z + p1*p2
// }

// document.write(multiply(10,2));

// function greet(){
//     ask = prompt("What is your name?")
//     return resp = alert("Welcome " + ask)
// }
// document.write(greet)


/* MATHS IN JS
Math.PI
Math.sqrt
Math.pow
Math.ceil
Math.floor
Math.random
Math.max
Math.min
Math.round
*/
// document.write(Math.PI,"<br>");
// document.write(Math.sqrt(64), "<br>");
// document.write(Math.pow(3,5), "<br>");
// document.write(Math.round(6.7),"<br>")
// document.write(Math.ceil(6.7),"<br>");
// document.write(Math.ceil(6.3),"<br>");
// document.write(Math.floor(6.3),"<br>");
// document.write(Math.random(),"<br>");
// document.write(Math.random() * 11, "<br>")
// document.write(Math.max(4,3,2,1), "<br>");
// document.write(Math.min(5,3,56,2),"<br>");




// document.getElementById("square").innerHTML=Math.sqrt(81);


document.write(new Date(), "<br>" );
document.write(new Date(2021,0,07,12,34,59),"<br>")

//to display the date alone
let a = new Date (2021,0,07,12,34,59,00)
document.write(a.toDateString(),"<br>")

/* TO get information from a date object, use the "get" method
getFullYear()
getMonth()
*/
let b = new Date();
document.write(b.getFullYear(),'<br>');
document.write(b.getMonth(),'<br>');
document.write(b.getDate(),'<br>');
document.write(b.getDay(),'<br>');
document.write(b.getHours(),'<br>');
document.write(b.getMinutes(),'<br>');
document.write(b.getSeconds(),'<br>');
document.write(b.getMinutes(),'<br>');
document.write(b.getSeconds(),'<br>');
document.write(b.getMilliseconds(),'<br>');

//To display the days as a string, use Array (place them in a list)
let days = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday", "Friday","Saturday"];
document.write(days[b.getDay()])

/* The UTC method (Universal Time Cordinate)
getUTCFullYear
getUTCMonth()
getUTCDate()
getUTCDay()
getUTCHours()
getUTCMinutes()
*/
document.write(a.getUTCFullYear(),"<br>")