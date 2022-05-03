// 1-Create new elements
const myButton = document.getElementById("myButton");
const myText = document.getElementById("myText");
const content = document.getElementById("content");
const title = document.getElementById("title");
const main = document.getElementById("main");
const buttonRemove = document.getElementById("buttonRemove");

// click button
function addParagraph() {
    const newParagraph = document.createElement("p");
    newParagraph.className = "beautiful";
    newParagraph.innerText = myText.value;
    content.appendChild(newParagraph);
}
// call function
myButton.addEventListener("click", addParagraph);

// 2-Removing elements - delete HTML elements from page
// Create div - main 
// Put title and main to create new elements
// Add click button to remove 
// function removeTitle() {
//     main.removeChild(title);
// }

// // call function
// buttonRemove.addEventListener(click, removeTitle);

// 3-Removing elements with change in index.html
// Function remove first element till 0
function removeFirstParagraph() {
    const paragraphs = document.getElementsByClassName("beautiful");
    if (paragraphs.length > 0) {
        content.removeChild(paragraphs[0]);
    }
}
// call function
buttonRemove.addEventListener(click, removeFirstParagraph);
