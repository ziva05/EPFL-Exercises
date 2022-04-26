// 14.05. Variables & data types
// var price = 12.15;
// var message = "Something fun";
// console.log(price);
// console.log(message);

// var temperature;
// console.log(temperature);

// var temperature = 41.3;
// console.log(temperature);

// var temperature = null;
// console.log(temperature);

// var message = "Hello\n\t\"World\"!";
// console.log(message)

// var name = "World";
// var greetings = "Hello";
// var message = greetings + " " + name + "!";
// console.log(message)

// 14.06. Functions in JavaScript
// function sayHello() {
//     console.log("Hello");
// }
// function greet(name) {
//     console.log("Hello " + name);

function addTwoNumbers(a, b) {
    return a + b;
 }

 addTwoNumbers(); 

// sayHello();
// greet("World");
// console.log(addTwoNumbers(5,2));

// var multiply = function(x,y) {
//     return x * y;
// }
// var result = multiply(5, 3);
// console.log(result);

 function call(msgBefore, msgAfter, fn) {
    console.log(msgBefore);
     fn();
   console.log(msgAfter);
// }

// function display() {
//     console.log("Called inside the function!");
// }
// call("Before", "After", display);

 function call(msgBefore, msgAfter, fn) {
    console.log(msgBefore);
    fn();
    console.log(msgAfter);
 }

 call("hello there", "how are you")


// call("Before", "After", function() {
//     console.log("Called inside the function!")
// })

// 14.07. Arrays
// var values = [13, "Hello", -5.6, "blue"];
// console.log(values);

// Accessing values
// var values = [13, "Hello", -5.6, "blue"];
// var firstElement = values[0];
// var secondElement = values[1];

// console.log(firstElement);
// console.log(secondElement);

// var values = [13, "Hello", -5.6, "blue"];
// console.log(values[10]);

// var values = [13, "Hello", -5.6, "blue"];
// values[1] = "Goodbye";
// console.log(values);

// Array size
// var values = [13, "Hello", -5.6, "blue"];
// console.log(values.length);

// var values = [13, "Hello", -5.6, "blue"];
// var lastElement = values[values.length -1];
// console.log(lastElement);

// Adding a value
// var values = [13, "Hello", -5.6, "blue"];

// values.push(100);
// console.log(values);

// values.unshift("ECMAScript");
// console.log(values);

// values.splice(1, 0, 65);
// console.log(values);

// Removing a value 
// var values = [13, "Hello", -5.6, "blue"];

// var lastValue = values.pop();
// console.log(lastValue);
// console.log(values);

// var firstValue = values.shift();
// console.log(firstValue);
// console.log(values);

// var secondValue = values.splice(1,1);
// console.log(secondValue);
// console.log(values);

// Finding a value
// var values = ["Nick", "Robert", "Alice", "Julia", "Robert", "Sylvia"];

// var julia = values.indexOf("Julia");
// console.log(julia)

// var jim = values.indexOf("Jim");
// console.log(jim)

// var robert = values.indexOf("Robert");
// console.log(robert);

// Merging
// var firstTeam = ["Bob", "Jim"];
// var secondTeam = ["Alice", "Julia"];

// var bothTeams = firstTeam.concat(secondTeam);
// console.log(bothTeams);
// console.log(firstTeam);

// Converting an array to a string
// var colors = ["Blue", "Red", "Green"];

// var colorString = colors.toString();
// console.log(colorString);

// colorString = colors.join(" - ");
// console.log(colorString);

// Converting a string to an array
// var colorString = "Blue,Red,Green";
// var colors = colorString.split(",");
// console.log(colors);

// Sorting
// var scores = [10, 1, 45, 7, 3];

// var sortedScores = scores.sort();
// console.log(sortedScores);

// var reversedScores = scores.reverse();
// console.log(reversedScores);

// var scores = [10, 1, 45, 7, 3];
// var sortedScores = scores.sort(function(a, b){
//     return a - b;
// });

// console.log(sortedScores);

// 14.08. Objects
// var album = {
//     band: "Nirvana",
//     title: "Nevermind",
//     year: 1991,
//     tracks: 12
// }
// console.log(album)

// Accessing values
// var album = {
// band: "Nirvana",
// title: "Nevermind",
// year: 1991,
// tracks: 12
// }

// // var title = album.title;
// // console.log(title);

// // var year = album["year"];
// // console.log(year);

// var yearKey = "year";
// var year = album[yearKey];
// console.log(year);

// year = album.yearKey; // Look for the "yearKey" key
// console.log(year); // undefined -> "yearKey" key is not defined

// Adding a key-value
// var album = {
//     band: "Nirvana",
//     title: "Nevermind",
//     year: 1991,
//     tracks: 12
// }

// album.genre = "Grunge";
// album["producer"] = "Butch Vig";

// console.log(album);

// Removing a property and its value
// var album = {
// band: "Nirvana",
// title: "Nevermind",
// year: 1991,
// tracks: 12
// }
// album.title = null;
// console.log(album);

// var album = {
//     band: "Nirvana",
//     title: "Nevermind",
//     year: 1991,
//     tracks: 12
//     }
// delete album.title;
// console.log(album);

// 14.09. Conditional logic
// if statement, switch statement, ternary operator

// If-else
// var name = "Luke"; 

// if (name == "Luke") {
//     console.log("Use the Force.");
// } else {
//     console.log("Move along.");
// }

// Switch
// var day = 3;

// switch(day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;    
//     case 4:
//         console.log("Thursday");
//         break
//     case 5:
//         console.log("Friday");
//         break;
//     default:
//         console.log("It's the weekend!");
// }

// var day = 4;

// switch (day) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log("Week day");
//         break;
//     case 6:
//     case 7:
//         console.log("Weekend");
//         break;
//     default:
//         console.log("Not a valid day");
// }

// Ternary operator
// <condition> ? <value if true> :  <value if false>
// var hour = 9;
// var timeOfDay = "";

// timeOfDay = hour < 12 ? "before lunch" : "after lunch";

// console.log(timeOfDay);

// 14.10. Loops
// For … next
// var people = [
//     "Tim",
//     "Jony",
//     "Angela",
//     "Craig"
// ];

// for (var i = 0; i < people.length; i++) {
//     var person = people[i];
//     console.log(i+ ". " + person);
// }

// While
// var people = [
// "Tim",
// "Jony",
// "Angela",
// "Craig"
// ];

// var i = 0;
// while (i < people.lenght) {
//     var person = people[i];
//     console.log(i+ ". " + person);
//     i++; // Don't forget to increment the index 
//         // or you'll create an infinite loop!
// }

// For … in
// var album = {
//     band: "Nirvana",
//     title: "Nevermind",
//     year: 1991,
//     tracks: 12
// }
// for (var key in album) {
//     console.log(key + ": " + album[key]);
// }

// 14.11. The peculiar case of equality in JavaScript
// var string = "42";
// var number = 42;
// // returns true beacuse the values are equal
// console.log(string == number);

// // returns false beacuse the data types are not the same
// console.log(string === number);

// 14.12. Prototypes
// Adding a method to an object
// var person = {
//     name: "Bob", 
//     age: 27,
//     sayHi: function() {
//         console.log("Hi. I'am Bob.");
//     }
// }

// Calling the sayHi method on the person object person.sayHi();

// Using this
// var person = {
//     name: "Bob", 
//     age: 27,
//     sayHi: function() {
//         console.log("Hi. I'm " + this.name + ".");
//     }
// }
// person.sayHi();

// var person = {
//     name: "Bob", 
//     age: 27,
//     sayHi: function() {
//         console.log("Hi. I'm " + this.name + ".");
//     }, 
//     callMe: function() {
//         console.log(this);
//     }
// }

// person.callMe();

// Make one, make two, make many
// Represent an enemy 
// var enemy = {
//     healthPoints: 150,
//     strenght: 20,
//     threaten: function() {
//         console.log("I'm going to destroy you!");
//     },
//     callForHelp: function() {
//         console.log("Come help me!");
//     }
// }
// The enemy threaten the player enemy.threaten();
// The enemy calls for more baddies to the rescue enemy.callForHelp();

// Represent an enemy 
// var enemy = {
//     healthPoints: 150,
//     strength: 20,
//     threaten: function() {
//         console.log("I'm going to destroy you!");
//     },
//     callForHelp: function() {
//         console.log("Come help me!");
//     }
// }

// // Represent a second enemy
// var enemyTwo = {
//     healthPoints: 150,
//     strength: 20, 
//     threaten: function() {
//         console.log("I'm going to destroy you!");
//     },
//     callForHelp: function() {
//         console.log("Come help me!");
//     }
// }

// // Represent a third enemy
// var enemyThree = {
//     healthPoints: 150,
//     strength: 20,
//     threaten: function() {
//         console.log("I'm going to destroy you!");
//     },
//     callForHelp: function() {
//         console.log("Come help me!");
//     }
// }


function Enemy(healthPoints, strength) {
    this.healthPoints = healthPoints;
    this.strength = strength;
    this.threaten = function() {
        console.log("I'm going to destroy you!");
    }
    this.callForHelp = function() {
        console.log("Come help me!");
    }
}
var meenie = new Enemy(150,20);
var miny = new Enemy(160, 15);
var moe = new Enemy(110, 30);

meenie.callForHelp();
console.log("Moe has " + moe.healthPoints + " health points.");
miny.threaten();
console.log(meenie);

// ... 
meenie.healthPoints = 100
console.log(meenie.healthPoints);

meenie.name = "Meenie";
console.log(meenie.name);

// Sharing methods
// function Person(name) {
//     this.name = name;
//     this.sayHello = function() {
//         console.log("Hello! I am " + this.name);
//     }
// }

// var maggie = new Person("Maggie");
// var glenn = new Person("Glenn");

// maggie.sayHello();
// glenn.sayHello();

// console.log(maggie.sayHello === glenn.sayHello);

// function Person(name) {
//     this.name = name;
// }

// Person.prototype.sayHello = function() {
//     console.log("Hello I am " + this.name);
// }

// var maggie = new Person("Maggie");
// var glenn = new Person("Glenn");

// // Check that it still works
// maggie.sayHello();

// // Check that the method is now shared
// console.log(maggie.sayHello === glenn.sayHello);

// 14.13. Variables revisited
// var MY_CONSTANT = 42

// const
// const pi = 3.1415;
// pi = 14.15;

// const album = {
//     band: "Nirvana",
//     title: "Nevermind",
//     year: 1991,
//     tracks: 12
// }

// album.tracks = 13;
// album.producer = "Butch Vig";

// console.log(album);

// const album = { band: "Nirvana", title: "Nevermind"}
// album = { band: "The Doors", title: "Strange Days"};
// // TypeError: Assignment to constant variable.

// let
// let age = 39;
// let song = "Welcome to the jungle";

// console.log(age);
// console.log(song);

// age = 40;
// song = "November Rain";

// console.log(age);
// console.log(song);

// function showMessage() {
//     for (var i = 0; i < 3; i++) {
//         var message = "Step" + i;
//         console.log(message);
//     }
//     console.log(message);
// // }

// showMessage();

// String interpolation
// const message = "Hello";
// const name = "Rick";

// // Using concatenation
// let greeting = message + " " + name + "!";
// console.log(greetings);

// // Using interpolation
// greetings = `${message} ${name}!`;
// console.log(greetings);

// console.log(`two plus two equals ${2 + 2}.`);

// 14.14. Arrow function expressions
// Simplifying the function syntax
// function sayHello(to) {
//     console.log(`Hello ${to}`);
//   }
//   const sayHello = (to) => {
//     return `Hello ${to}`;
//   }
//   const sayHello = to => `Hello ${to}`;

// const sayHello = to => `Hello ${to}`;

// console.log(sayHello("Sasha"));

// const add = (x, y) => x + y;

// console.log(add(3, 2));

// const displayMsg = () => console.log("Hey");

// displayMsg();

// const sayHi = to => {
//     const msg = `Hello ${to}.`;
//     console.log(msg);
//   }
  
//   sayHi('Tyreese');

//   The strange case of binding this
// const person = {
//     firstName: "Daryl",
//     friends: [
//         "Rick", 
//         "Michonne",
//         "Glenn"
//     ],
//     showFriends: function() {
//         function formatString(friendName) {
//             return `${friendName} is a friend of ${this.firstName}`
//         }
//         for (let i = 0; i < this.friends.length; i++) {
//             console.log(formatString(this.friends[i]));
//         }
//     }
// }

// person.showFriends();

// ...code omitted for brevity...
// showFriends: function() {
//     const that = this;
//     function formatString(friendName) {
//       return `${friendName} is a friend of ${that.firstName}`
//     }
//     for (let i = 0; i < this.friends.length; i++) {
//       console.log(formatString(this.friends[i]));
//     }
//   }
// // ...code omitted for brevity...

// person.showFriends();

// Using arrow function syntax inside inner functions
// const person = {
//     firstName: 'Daryl',
//     friends: [
//       'Rick',
//       'Michonne',
//       'Glenn'
//     ],
//     showFriends: function() {
//       const formatString = friendName => `${friendName} is a friend of ${this.firstName}`;
  
//       for (let i = 0; i < this.friends.length; i++) {
//         console.log(formatString(this.friends[i]));
//       }
//     }
//   }
  
//   person.showFriends();

// //   When not to use the arrow function syntax
// // Because arrow function expressions don't have their own this, you should avoid using 
// // them as object methods: you couldn't refer to the current object using this within them.
// const functionName = (params) => {
    // function body
//   }

//   14.15. Classes in ES2015
// The class syntax
// // Person constructor function 
// function Person(name) {
//     this.name = name;
// }

// // Add sayHi to the Person prototype 
// Person.prototype.sayHi = function() {
//     console.log(`Hello! I'm ${this.name}.`);
// }

// //  Test a Person object 
// const lori = new Person("Lori");
// lori.sayHi();

// Person class
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
    // Add sayHi to the Person class
//     sayHi() {
//         console.log(`Hello! I'm ${this.name}.`);
//     }
// }
// // Test a Person object
// const lori = new Person("Lori");
// lori.sayHi();

// // Test 
// const andrea = new Person ("Andrea");
// console.log(lori.sayHi === andrea.sayHi);

function sayHello(){
    console.log("Hello how are you"); 
}

sayHello(); 


function weather(){
    console.log("The weather is beautiful");
}

weather(); 

function whatClothsToWear(weather){

    if(weather == "Sunny"){
        console.log("Put the T-shirt.");
    } else if(weather == "Rainy"){
        console.log("Put a jacket.");
    } else if(weather == "Snowy"){
        console.log("Put your glowes.");
    }
}
whatClothsToWear("Rainy"); 
