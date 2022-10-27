//Set login window to hidden by default
var x = document.getElementById("logIn");
x.style.display = "none";

//Open log in window, close sign up window if it is already open
function openLogin() {
  var x = document.getElementById("logIn");
  var y = document.getElementById("signUp");
  var z = document.getElementById("openLoginBtn");
  var a = document.getElementById("openSigninBtn");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  
  if (z.style.display === "none") {
    z.style.display = "block";
    a.style.display = "block";
  } else {
    z.style.display = "none";
    a.style.display = "none";
  }

  y.style.display = "none";
}

function cancelLogin() {
  var x = document.getElementById("logIn");
  var y = document.getElementById("signUp");
  var z = document.getElementById("openLoginBtn");
  var a = document.getElementById("openSigninBtn");

  x.style.display = "none";
  y.style.display = "none";
  z.style.display = "inline";
  a.style.display = "inline";
}

//Set sign up window to hidden by default
var x = document.getElementById("signUp");
x.style.display = "none";


//Open sign up window, close log in window if it is already open
function openSignup() {
  var x = document.getElementById("logIn");
  var y = document.getElementById("signUp");
  var z = document.getElementById("openLoginBtn");
  var a = document.getElementById("openSigninBtn");

  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  
  if (z.style.display === "none") {
    z.style.display = "block";
    a.style.display = "block";
  } else {
    z.style.display = "none";
    a.style.display = "none";
  }

  x.style.display = "none";
}

function submitAlert() {
  alert("Your report has been submitted. An employee will manually review it before adding it to the app.");
}

function openNav() {
  document.getElementById("myNav").style.width = "25%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}