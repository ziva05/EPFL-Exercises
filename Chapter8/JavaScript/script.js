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

// Add
// var fruits = ["oranges", "apples", "bananas"];
// fruits.push("tomatoes");
// console.log(fruits);

// Remove
// var fruits = ["oranges", "apples", "bananas", "kiwis"];
// fruits.splice(2,1);
// console.log(fruits)

// var fruits = ["oranges", "apples", "bananas", "kiwis"];
// fruits.splice(2,2);
// console.log(fruits);

// Sort
// var fruits = ["oranges", "apples", "bananas", "kiwis"];
// fruits.sort();
// console.log(fruits);

// Reverse
// var fruits = ["oranges", "apples", "bananas", "kiwis"];
// fruits.reverse();
// console.log(fruits);

// Count
// var fruits = ["oranges", "apples", "bananas", "kiwis"];
// var fruitsCount = fruits.length;
// console.log(fruitsCount);

// 8.10 Exercise: Your favorite dishes
// Create a JavaScript array to store your 3 favorite dish:
// var favouriteDish = ["bananas", "salads", "soups"];
// List each of them in the console on their own separate line
// console.log(favouriteDish[0]);
// console.log(favouriteDish[1]);
// console.log(favouriteDish[2]);

// // Display the count of your favorite dishes:
// var favouriteDish = ["bananas", "salads", "soups"];
// var dishCount = favouriteDish.length;
// console.log(dishCount);

// // Add a 4th dish to the array:
// var favouriteDish = ["bananas", "salads", "soups"];
// favouriteDish.push("fresh avocades");
// console.log(favouriteDish);

// // Display the count once more within "I have x favorite dishes":
// var favouriteDish = ["bananas", "salads", "soups", "fresh avocades"];
// var dishCount = favouriteDish.length;
// message = "I have " + dishCount.toString() + " favorite dishes.";

// console.log(dishCount); 
// console.log(message);

// // Remove the 2nd one:
// var favouriteDish = ["bananas", "salads", "soups", "fresh avocades"];
// favouriteDish.splice(2,1);
// console.log(favouriteDish);

// // Sort them in alphabetical order:
// var favouriteDish = ["bananas", "salads", "fresh avocades"];
// favouriteDish.sort();
// console.log(favouriteDish);

// // Display as an array in the console:
// var favouriteDish = ["bananas", "salads", "fresh avocades"];
// console.log(favouriteDish);

// Display the count again:
// var favouriteDish = ["bananas", "salads", "fresh avocades"];
// var dishCount = favouriteDish.length;
// console.log(dishCount);

// Create a JavaScript array to store your 3 favorite sports: 
var favouriteSports = ["swimming", "running", "bikinig"];

// List each of them in the console on their own separate line
console.log(favouriteSports[0]);
console.log(favouriteSports[1]);
console.log(favouriteSports[2]);

// Display the count of your favorite sports: 
var sportsCount = favouriteSports.length;
console.log(sportsCount);

// Add a 4th sports to the array:
favouriteSports.push("climbing");
console.log(favouriteSports);

// Display the count once more within "I have x favorite sports":
var SportsCount = favouriteSports.length;
message = "I have " + SportsCount.toString() + " favorite sports.";

console.log(SportsCount); 
console.log(message);

// Remove the 2nd one:
favouriteSports.splice(2,1);
console.log(favouriteSports);

// Sort them in alphabetical order:
favouriteSports.sort();
console.log(favouriteSports);

// Display the count again:
var sportsCount = favouriteSports.length;
console.log(sportsCount);

