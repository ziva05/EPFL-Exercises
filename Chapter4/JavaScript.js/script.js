// var fruits = 7;

// var bananas = 101;
// var pears = 78;
// console.log (bananas);
//     console.log (pears);


// var apples = 5;
// console.log(apples);
// apples = 7;
// apples = 11;
// console.log(apples);


// Exercice 04.04
// var fruits = 11;
// console.log(fruits)


// console.log(58.45)

// var apples = 11;
// var oranges = 7;
// var fruits = apples+oranges;
// console.log(fruits);

// // At this point, eat an apple and store the new 
// // amount of apples
// apples = apples - 1;

// // Now, we compute the new amount of fruits
// fruits = apples+oranges;
// console.log(fruits);

//Let's eat an orange too...
// oranges = oranges-1;

// //...and one more apple because we are hungry
// apples = apples-1;

// // We again compute the new amount of fruits
// // and display the result 
// fruits = apples+oranges;
// console.log(fruits);


// var name = "Rick";
// var greetings = "Hello";
// var message = greetings + " " +name;
// console.log(message);

// // CH 04.15 A function that says hello to someone
// // function sayHello(name) {
// //     console.log("Hello " + name);
// // }
// // // Calling the function
// // sayHello("Rick");
// // sayHello("Lory");
// // sayHello("Daryl");

// // // A function that says hello to someone 2
// // function sayHello(name) {
// //     var message = "Hello" + name
// //     return message;
// // }
// // // Calling the function
// // var result = sayHello("Rick");
// // console.log(result);

// // result = sayHello("Lory");
// // console.log(result);

// // result = sayHello("Daryl");
// // console.log(result);

// // Ex CH 4.15 rewrite greater function 
// // console.log("Hello Carole! Comment vas tu?")

// // function greet(name) {
// //     return "Hello " + name;
// // }

// // console.log (greet("Ziva"));

// // // add function 
// // function add(a, b) {
// //     return a + b;
// // }

// // console.log(add(5, 3));

// // Multiply and substract functions

// // function multiply(a, b) {
// //     return a * b;
// // }


// // function substract(a, b) {
// //     return a - b;
// // }
// // console.log(substract(10,2));
// // console.log(multiply(3, 3));

// // function add (a, b){
// //     return a + b;
// // }
// // console.log(add(7, 8));

// // function substract(a, b){
// //     return a - b;
// // }
// // console.log(substract(9, 3));

// // function multiply(a,b){
// //     return a * b;
// // }
// // console.log(multiply(5, 8));

// // Upgrade your temperature converter
// // (celsius * 9/5) + 32 = Farnheit

// // function tempConverter(celsius){
// //     return (celsius * 9/5) + 32;
// // }

// // console.log(tempConverter(21.5));
// // console.log(tempConverter(-7));
// // console.log(tempConverter(11));
// // console.log(tempConverter(0));

// // 04.18 Mixing data types 
// // var aNumber = 5;
// // var aString = "3";
// // var result = aNumber + Number(aString);

// // console.log(result);

// // // Exemple String 
// // function add(a, b) {
// //     var message = "The result is ";
// //     var result = a + b;
// //     return message + result.toString();  
// // }
// // console.log(add(6, 3));

// // function add(a, b) {
// //     var message = "The result is ";
// //     var c = a + b;
// //     return message + c.toString();
// // }

// // console.log(add(5, 3));

// // function chf_to_eur_conversion(chf) {
// //     var msg1 = " The conversion from ";
// //     var msg2 = " CHF is ";
// //     var msg3 = " EUR.";
// //     result = chf * 1.0;
// //     return msg1 + chf.toString() + msg2 + result.toString() + msg3;
// // }

// // console.log(chf_to_eur_conversion(100)); 
// // console.log(chf_to_eur_conversion(40));
// // console.log(chf_to_eur_conversion(600));

// // function speed_convert(mph){
// //     var msg1 = "The conversion from ";
// //     var msg2 = " mph is ";
// //     var msg3 = " kmh.";
// //     result = mph * 1.609344;
// //     return msg1 + mph.toString() + msg2 + result.toString() + msg3;
// // }
     
// // console.log(speed_convert(30));
// // console.log(speed_convert(70));
// // console.log(speed_convert(120));

// // Ex 4.22 convert cm to inch
// function convert(cm) {
// var msg_1 = " centimeters are ";
// var msg_2 = " inches";
// var result = cm / 2.54;
// return cm.toString() + msg_1 + result.toString() + msg_2;

// }

// console.log(convert(2.54));