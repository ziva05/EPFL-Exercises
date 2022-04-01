// 8.9: Arrays exist in JavaScript as well!
// var fruits = ["oranges", "apples", "bananas"];
// console.log(fruits);

// Array(3) [ "oranges", "apples", "bananas" ]

// var fruits = ["oranges", "apples", "bananas"];
// var message = "The second value contains apples: " + fruits[1];
// console.log(message);

// var fruits = ["oranges", "apples", "bananas"];
// fruits[1] = "kiwis";
// var message = "The second value now contains kiwis: " + fruits[1];
// console.log(message);


// var fruits = ["oranges", "apples", "bananas"];
// fruits.push("tomatoes");
// console.log(fruits);

var fruits = ["oranges", "apples", "bananas", "kiwis"];
fruits.splice(2,1);
console.log(fruits)