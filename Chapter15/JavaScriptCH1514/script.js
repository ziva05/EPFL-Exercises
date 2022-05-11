// 15.14. Exercise: A persistent item list

// Recover the value in the text list and target the element
const myText = document.getElementById("myText");
const myButton = document.getElementById("myButton");
const buttonRemove = document.getElementById("buttonRemove")
const buttonClearAll = document.getElementById("buttonClearAll")
const content = document.getElementById("content");


// Add or create a new element HTML to the list
function addParagraph() {
    const newParagraph = document.createElement("p");
    newParagraph.innerText = myText.value;
    newParagraph.className = "beautiful";
    content.appendChild(newParagraph); 
}
myButton.addEventListener("click", addParagraph);

// Remove a new element from the bottom of the list 
function removeFirstParagraph() {
    const oldParagraphs = document.getElementsByClassName("beautiful");
    if (oldParagraphs.length > 0) {
        const lastPosition = oldParagraphs.length - 1;
        content.removeChild(oldParagraphs[lastPosition]);
    }
}
buttonRemove.addEventListener("click", removeFirstParagraph);

// Clear all the elements
function removeAll() {
    content.innerHTML = "";
}
buttonClearAll.addEventListener("click", removeAll);


// Save to the local storage



