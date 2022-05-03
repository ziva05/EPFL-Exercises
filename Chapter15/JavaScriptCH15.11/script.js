

// 15.11. Exercise: Get rid of these!
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

function removeLastParagraph() {
    const paragraphs = document.getElementsByClassName("beautiful");
    if(paragraphs.lenght > 0) {
        const lastPosition = paragraphs.lenght - 1;
        content.removeChild(paragraphs[lastPosition]);
 }
}

myButton.addEventListener("click", addParagraph);
buttonRemove.addEventListener("click", removeLastParagraph);
