// Exercice compteur
// var apples = 7;
// var oranges = 3;
// if (apples >= oranges {
//    console.log("There are more apples than oranges");
//    console.log("...or the same amount!");
// }
// console.log("The program terminated succesfully");)

// Chapitre 05.02
// var day = true;
// var night = false;

// console.log(day);
// console.log(night);

// var secretNumber = 5;
// var guess = 3;
// console.log(secretNumber == Number(guess));

// Calcul frais de port 
// function delivery(total, country = "CH"){
//     var delivery = 0
//     if(country == "CH"){
//         if(total <= 50){
//             console.log("Les frais de port sont de 20.-");
//         }  
//     }
//     else if (total <= 100) {
//        console.log("Les frais de port sont de 10.-");
//     }
//     else if (total <= 150) {
//        console.log("Les frais de port sont de 5.-");
//     }
//     else {
//       console.log("Les frais de port sont gratuits !");
//     }
//     else if country == "FR" || country == "DE"{ 
//         if total <= 50{ 
//             console.log("Les frais de port sont de 30.-");
//         }
//     else if {
//       console.log("Les frais de port sont de 20.-");}
//     }
//     else if {
//     console.log("Nous ne livrons pas dans cette zone !");
//     }
  
  
// // Get user input
// var total = Number(prompt("Quel est le montant total de la commande ?"));
// var country = prompt("Quel est le pays de destination ( CH FR ou DE ) ?");

// calculDelivery(total,country);

// Exercice 8 les Collections
// var coworking = {nom: "Powerhouse", 
//             ville: "Lausanne",
//             pays: "Suisse",
//             anneeOuverture: 2020,
//             }

// console.log(coworking["anneeOuverture"])
// console.log(coworking["ville"])
// console.log(coworking["nom"])
// console.log(coworking.anneeOuverture)

// var cars = ["Ford", "Volvo", "BMW"]
// for(i = 0; i < cars.length; i = i + 1) {
//     console.log(cars[i])
//     }

// var apples = 7;
// var oranges = 3;

// if (apples>= oranges) {
//     console.log("There are more apples than oranges...");
//     console.log("...or the same amount!");
// }

// console.log("The program terminated successfully");

// # Ex 5.16 ... or Else!
// var apples = 3;
// var oranges = 11;
// # if apples >= oranges {
//     console.log("There are less apples than oranges...");
//     console.log("...or the same amount!");
    
// } else{
//     console.log("There are more apples than oranges.")
// }
// Practice your JS-fu:
// var number1 = 3;
// var number2 = 2;
// var result = number1 + number2;
// if (result > 10) {
//     console.log("The result is greater than 10");
// } else {
//     console.log("The result is not greater than 10");
// }
// console.log("Try me again!");

// // Ex 5.21 Chaining conditions with JavaScript
// var weather = "sunny";
// if (weather == "raining"){
//     console.log("Take an umbrella.");
// } else if (weather == "sunny") {
//     console.log("Take sunglasses.");
// } else if (weather == "snowing") {
//     console.log("Take gloves.");
// } else {
//     console.log("Stay home.");
// }

// Ex. write JavaScript 
// var number1 = 10; 
// var number2 = 40; 
// var result = number1 - number2;

// if (result > 10) {
//     console.log("The result is greater than 10.");
// } else if (result > 0) {
//     console.log("The result is greater than 0 but not than 10.");
// } else if (result == 0) {
//     console.log("The result is zero.");
// } else {
//     console.log("This is a negative number.");
// }
// console.log("You can try it again!");

// 5.22 ex. A useful Greeter
// function greet(gender){
//     if (gender == "male"){
//         return "Hello Sir! Welcome back.";
//     } else if (gender == "female"){
//         return "Hello Madam! Welcome back.";
//     } else {
//         return "Hello. Welcome back.";
//     }
// }

// // from this line we are testing the function:
// console.log(greet("male"));
// console.log(greet("female"));
// console.log(greet("not specified"));

// 5.25 AND JavaScript version:
// var weather = "sunny"
// var temperature = "warm"

// if (weather == "sunny" && temperature == "warm") {
//     console.log("Take sunglasses and a T-shirt");
// }

// Ex 5.25 
// var number_1 = 4;
// var number_2 = 5;

// if (number_1 > 10 && number_2 > 10){
//     console.log("Both numbers are great than 10.");
// } else {
//     console.log("At least one of the numbers you entered is not greater than 10.");
// }

// Ex 5.26 Use AND!
// var weather = "sunny";
// var temperature = "warm";

// if (weather == "raining" && temperature == "cold"){
//     console.log("Take an umbrella and a warm jacket.");
// }
// else if (weather == "raining" && temperature == "warm"){
//     console.log("Take an umbrella an a T-shirt.");
// }
// else if (weather == "sunny" && temperature == "cold"){
//     console.log("Take sunglasses and a warm jacket.");
// }
// else if (weather == "sunny" && temperature == "warm"){
//     console.log("Take sunglasses and a T-Shirt.");
// } else {
//     console.log("Stay home!");
// }

// 5.29 Saying OR
// var a = 8;
// var b = 12;

// if (a > 10 || b > 10){
//     console.log("At least one of the two numbers is greater than 10!");
//    } else {
//        console.log("Both numbers are not greater than 10.");
//    }

// // 5.31 Your own AND and OR
// var number = 30;
// var color = "blue";

// if (number > 10 && color == "blue"){
//     console.log("The test is false");
  
// }
// else if (number > 10 || color == "blue"){
//     console.log("The test is true"); 
// }

// 5.32 Ex: Guess the number and the color

// var secretNumber = 12;
// var secretColor = "red";

// if (secretNumber == 12 && secretColor == "red"){
//     console.log("You've found both the secret number and the secret color!");
// }
// else if (secretNumber == 12 || secretColor == "red"){
//     console.log("You found at least one of the secrets!");
// } else {
//     console.log("You didn't find any of the secrets!");
//     console.log("Better luck next time!");
// }
// console.log("Try again!");