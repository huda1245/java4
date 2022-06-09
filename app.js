// chapterno31to34

// ansno1
// var dateNow = new Date();
// document.write(dateNow);
// ansno2
// var dateNow = new Date();
// mlist = [ "January", "Febmliruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// var monthNow = dateNow.getMonth();
// document.write("Current Month: " + mlist[monthNow]); 
// ansno3
// var dateNow = new Date();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var dayNow = dateNow.getDay();
// document.write("Today is " + dayNames[dayNow]);

// ansno4
// var dateNow = new Date();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var dayNow = dateNow.getDay();
// if(dayNames[dayNow] === "Sun" || dayNames[dayNow] === "Sat"){
//     document.write("It's Fun day");
// }


// ansno5
// var dateNow = new Date();
// var date = dateNow.getDate();
// if(date < 16){
//     document.write("“First fifteen days of the month");
// } 
// else{
//     document.write("Last days of the month");
// }

// ansno6
// var dateNow = new Date();
// var millisec = dateNow.getTime();
// document.write("Current Date: " + dateNow + "<br>");
// document.write("Elapsed milliseconds since January 1, 1970: " + millisec + "<br>");
// document.write("Elapsed minutes since January 1, 1970: " + (millisec/(1000*60)) + "<br>");

// ansno7
// var dateNow = new Date();
// var hourNow = dateNow.getHours();
// if(hourNow < 12){
//     document.write("Its AM");
// }
// else{
//     document.write("Its PM");
// }

// ansno8
// var dateNow = new Date();
// var laterDate = new Date("Dec 31, 2020");
// document.write(laterDate);

// ansno9
// var today = new Date();
// var todayMilli = today.getTime();
// var lastRamadan = new Date("Apr 4, 2022");
// var ramazanMilli = lastRamadan.getTime();
// var diffMilliSec = todayMilli - ramazanMilli;
// var daysPast = diffMilliSec/(1000*60*60*24);
// daysPast = Math.floor(daysPast);
// document.write(daysPast + " days have passed since 1st Ramazan, 2022");

// ansno10
// var today = new Date();
// var todayMilli = today.getTime();
// var year2015 = new Date("Jan 01, 2015");
// var year2015Milli = year2015.getTime();
// var diffMilliSec = todayMilli - year2015Milli;
// var secondsPast = diffMilliSec/(1000);
// secondsPast = Math.floor(secondsPast);
// document.write("On reference date: " + today + "<br>")
// document.write(secondsPast + " seconds had passed since beginning of 2015");

// ansno11

// var today = new Date();
// var hourAgo = today.getHours();
// hourAgo = hourAgo-1
// document.write("current date: " + today + "<br>");
// today.setHours(hourAgo);
// document.write("1 hour ago, it was " + today);

// ansno12
// var today = new Date();
// var yearsAgo = today.getFullYear();
// yearsAgo = yearsAgo-100;
// document.write("current date: " + today + "<br>");
// today.setFullYear(yearsAgo);
// document.write("100 years back, it was " + today);

// ansno13
// var age = +prompt("Enter your age");
// var today = new Date();
// var yearNow = today.getFullYear();
// var birthYear = yearNow - age;
// document.write("Your age is " + age + "<br>");
// document.write("Your birth year is " + birthYear);

// ansno14
// var customerName = "Huda Shahzad";
// var today = new Date();
// mlist = [ "January", "Febmliruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// var currentMonth = today.getMonth();
// var noOfUnits = 410;
// var unitCost = 16;
// var netAmount = noOfUnits * unitCost;
// var lateCharges = 150;
// var grossAmount = netAmount + lateCharges;
// document.write("K-Electric Bill" + "<br>" + "<br>");
// document.write("Customer Name: " + customerName + "<br>");
// document.write("Month: " + mlist[currentMonth] + "<br>");
// document.write("No of units: " + noOfUnits + "<br>");
// document.write("Charges per unit: " + unitCost + "<br>" + "<br>");
// document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>");
// document.write("Late Payment Surcharge: " + lateCharges + "<br>");
// document.write("Gross Amount Payable (after Due Date): " + grossAmount + "<br>");

// Chapter 35-38

// ansno1
// function tellTime(){
//     var dateNow  = new Date();
//     document.write(dateNow); 
// }
// tellTime();

// ansno2
// function  greeting(){
//     var firstName = prompt("Enter your first name: ");
//     var lastName = prompt("Enter your last name: ");
//     alert("Hello " + firstName + " " + lastName);
// }
// greeting();

// ansno3
// function sum(){
//     var firstNumber = +prompt("Enter first number: ");
//     var secondNumber = +prompt("Enter second number: ");
//     alert(firstNumber + " + " + secondNumber + " = " + (firstNumber + secondNumber));
// }
// sum();

// ansno4
// function calculator(num1,num2,op){
//     if(op === "+"){
//         alert(num1 + " + " + num2 + " = " + (num1 + num2));
//     }
//     else if(op === "-"){
//         alert(num1 + " - " + num2 + " = " + (num1 - num2));
//     }
//     else if(op === "*"){
//         alert(num1 + " x " + num2 + " = " + (num1 * num2));
//     }
//     else if(op === "/"){
//         alert(num1 + " / " + num2 + " = " + (num1 / num2));
//     }
//     else{
//         alert("Wrong Operator");
//     }
// }
// var firstNumber = +prompt("Enter first number: ");
// var operator = prompt("Choose your operator: + - * / ");
// var secondNumber = +prompt("Enter second number: ");
// calculator(firstNumber,secondNumber,operator);


// ansno5
// function square(num){
//     alert("Square of " + num + " is " + (num*num));
// }
// var number = +prompt("Enter number for square: ");
// square(number);


// ansno6
// function factorial(num) {
//     var answer = 1;
//     if (num === 0 || num === 1) {
//         return answer;
//     } else {
//         for (var i = num; i >= 1; i--) {
//             answer = answer * i;
//         }
//         return answer;
//     }
// }
// var number = +prompt("Enter number for factorial: ");
// answer = factorial(number)
// alert("The factorial of " + number + " is " + answer);


// ansno7
// function counting(start,end){
//     for(var i = start; i <= end; i++ ){
//         document.write(i + " ");
//     }
// }
// var start = +prompt("Enter start number for counting:");
// var end = +prompt("Enter end number for counting:");
// counting(start,end);

// ansno8
// ansno9
// ansno10
