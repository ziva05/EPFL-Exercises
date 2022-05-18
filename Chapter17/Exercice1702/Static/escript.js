console.log("Script working...");

let username = localStorage.getItem("username");

if(username && username != ""){
  alert("Welcome back," + username);
}else{
  username = prompt("What's your name ?");
  localStorage.setItem("username", username);
  alert("Welcome " + username);
}

const displayAddNotes = (e) =>{
  e.preventDefault();
  hide(document.getElementById('search-form-wrapper'));
  element = document.getElementById('add-note-wrapper');
  show(element);
}

const displaySearch = (e) =>{
  e.preventDefault();
  hide(document.getElementById('add-note-wrapper'));
  element = document.getElementById('search-form-wrapper');
  show(element);
}

// Hide an element
const hideAll = () => {
  hide(document.getElementById('search-form-wrapper'));
	hide(document.getElementById('add-note-wrapper'));
};

// Show an element
const show = (elem) => {
	elem.style.display = 'block';
};

// Hide an element
const hide = (elem) => {
	elem.style.display = 'none';
};

// Toggle element visibility
const toggle = (elem) => {

	// If the element is visible, hide it
	if (window.getComputedStyle(elem).display === 'block') {
		hide(elem);
		return;
	}

	// Otherwise, show it
	show(elem);

};