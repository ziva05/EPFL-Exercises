

// 15.10. Removing Elements
// const myButton = document.getElementById("myButton");
// const myText = document.getElementById("myText");
// const content = document.getElementById("content");
// const title = document.getElementById("title");
// const main = document.getElementById("main");
// const buttonRemove = document.getElementById("buttonRemove")
 

// function addParagraph() {
//     const paragraph = document.createElement("p");
//     paragraph.className = "beautiful";
//     paragraph.innerText = myText.value;
//     content.appendChild(paragraph); 
// }

// function removeTitle() {
//     main.removeChild(title);
// }

// myButton.addEventListener("click", addParagraph);
// buttonRemove.addEventListener("click", removeTitle);


// other option 
const myButton = document.getElementById("myButton");
const myText = document.getElementById("myText");
const content = document.getElementById("content");
const title = document.getElementById("title");
const main = document.getElementById("main");
const buttonRemove = document.getElementById("buttonRemove")


function addParagraph() {
    const paragraph = document.createElement("p");
    paragraph.className = "beautiful";
    paragraph.innerText = myText.value;
    content.appendChild(paragraph); 
 
}
// change the text in HTML

function removeFirstParagraph() {
    const paragraphs = document.getElementsByClassName("beautiful");
 if (paragraphs.lenght > 0) { 
     content.removeChild(paragraphs[0]);
 }
}

myButton.addEventListener("click", addParagraph);
buttonRemove.addEventListener("click", removeFirstParagraph);
