//Set login window to hidden by default
var x = document.getElementById("logIn");
x.style.display = "none";

//Open log in window, close sign up window if it is already open
function openLogin() {
  var x = document.getElementById("logIn");
  var y = document.getElementById("signUp");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  
  y.style.display = "none";
}

//Set sign up window to hidden by default
var x = document.getElementById("signUp");
x.style.display = "none";


//Open sign up window, close log in window if it is already open
function openSignup() {
  var x = document.getElementById("signUp");
  var y = document.getElementById("logIn");
  
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
	y.style.display = "none";
}

function submitFunc() {
	var x = document.getElementById("inputEmail");
	if (var x === "") {
		alert("Please enter an email");
		return false;
	}
	else {
		return true;
	}
}