// 15.03. Selecting elements
// a)
// const title = document.getElementById("title");
// const myButton = document.getElementById("myButton");
// const nonExisting = document.getElementById("nonExisting");

// console.log(title);
// console.log(myButton);
// // console.log(nonExisting);

// if (nonexisting == null) {
//     console.log("This element doesn't exist!");
// } else {
//     console.log(nonexisting);
// }

// b)

// const title = document.getElementById("title");
// const paragraphs = document.getElementsByClassName("paragraph")

// console.log(title);
// console.log(paragraphs);

// for (let i = 0; i < paragraphs.length; i++) {
//     const para = console.log(paragraphs[i]);
// }

// const title = document.getElementById("title");
// const paragraphs = document.getElementsByTagName("p");

// console.log(title);
// console.log(paragraphs);

// for (let i = 0; i < paragraphs.length; i++) {
// console.log(paragraphs[i]);
// }

// 15.04. Updating values
// const title = document.getElementById("title");
// const myButton = document.getElementById("myButton")
// const myText = document.getElementById("myText")

// title.innerHTML = "The title has changed!";
// myButton.value = "This has changed too";

// myText.value = "A new value";

// 15.05. Handling events
const title = document.getElementById("title");
const myButton = document.getElementById("myButton");
const myText = document.getElementById("myText");

function changeTitle() {
    title.innerText = myText.value;
}

myButton.addEventListener("click", changeTitle);