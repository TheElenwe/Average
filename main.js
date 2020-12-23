let prompt = require('prompt-sync')({sigint: true});
 let num1 = prompt("Enter a number")
 let num2 = prompt("enter number two")
 let num3 = prompt("enter the third number")

num1 = parseFloat(num1);
num2 = parseFloat(num2);
num3 = parseFloat(num3);

let average_score= (  num1 + num2 + num3 ) / 3 ;
console.log("Τhe average of Geometry,Algebra, Physics is :" + average_score );

 
