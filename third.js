// LOOP
// var num = "";
// var n;

// for (n = 1; n<11; n++){
//     // num = num + n + " ";
//     num = num + n +"<br>";
//     num+=n + "<br>"
// }
// document.write(num); 

// var table = prompt("Enter num");
var table = 3;
var t;

for (t=1; t<=12; t++){
    document.write(table + "x" + t + "=" + table*t + "<br>");
}
//FOR loop can also be used to loop through a list of text and not numbers alone
 var phone = ['tecno', ' gionee', 'oppo', 'samsung', 'infinix', 'iphone']
 document.write (phone, "<br>");
//  document.write (phone[3], "<br>")

 //How to display all the items in a list

 var list = "";
 var p;

 for (p = 0; p < phone.length; p++){
    // list += p + "" + phone [p] + "<br>"
    // list = list + p + " " + phone[p] + "<br>"
    list = list + phone[p] + "<br>"
 }
 document.write(list)

 var list =""

 /*The while loop has ther following snytax:
 while (condition) {
    code block to be executed
 }
 */

 var i = 1;
 while (i<=10){
    console.log(i)
    i++
    
 }