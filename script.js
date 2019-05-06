document.getElementById("nameBox").addEventListener("blur", validateName);
function validateName(){
	var x = document.forms["myForm"]["myName"].value;
	var xLetters = /^[-\sa-zA-Z]+$/;
	if (x.length < 2 || !x.match(xLetters)){
		document.getElementById("nameBox").style.border = "2px solid red";
		document.getElementById("name").innerHTML = "Please enter your name.";
		return false;
	} else {
		document.getElementById("nameBox").style.border = "";
		document.getElementById("name").innerHTML = "";
	}
}
document.getElementById("zipBox").addEventListener("blur", validateZip);
function validateZip(){
	var y = document.forms["myForm"]["myZip"].value;
	if (y.length != 5 || isNaN(y)){
		document.getElementById("zipBox").style.border = "2px solid red";
		document.getElementById("zip").innerHTML = "Please enter your 5 digit zipcode.";
		return false;
	} else {
		document.getElementById("zipBox").style.border = "";
		document.getElementById("zip").innerHTML = "";
	}
}
document.getElementById("emailBox").addEventListener("blur", validateEmail);
function validateEmail(){
	var z = document.forms["myForm"]["myEmail"].value;
	var at = z.indexOf("@");
	var dot = z.lastIndexOf(".");
	if (z == null || z == "" || z.length < 6 || at < 1 || at == z.length-1 || dot < at+2 || dot+2 >= z.length) {
		document.getElementById("emailBox").style.border = "2px solid red";
		document.getElementById("email").innerHTML = "e.g. name@provider.com";
		return false;
	} else {
		document.getElementById("emailBox").style.border = "";
		document.getElementById("email").innerHTML = "";
	}
}
document.getElementById("passBox").addEventListener("blur", validatePass);
function validatePass(){
	var p = document.forms["myForm"]["myPass"].value;
	var p2 = document.forms["myForm"]["myPass2"].value;
	if (p == null || p == "" || p.length < 8 || p.length > 16) {
		document.getElementById("passBox").style.border = "2px solid red";
		document.getElementById("pass").innerHTML = "Password must contain between 8 and 16 characters";
		return false;
	} else {
		document.getElementById("passBox").style.border = "";
		document.getElementById("pass").innerHTML = "";
	}
}
document.getElementById("passBox2").addEventListener("blur", validatePass2);
function validatePass2(){
	var p = document.forms["myForm"]["myPass"].value;
	var p2 = document.forms["myForm"]["myPass2"].value;
	if (p2 != p) {
		document.getElementById("passBox").style.border = "2px solid red";
		document.getElementById("passBox2").style.border = "2px solid red";
		document.getElementById("pass").innerHTML = "Passwords do not match.";
		document.getElementById("pass2").innerHTML = "Passwords do not match.";
		return false;
	} else if (p2.length < 8 || p2.length > 16) {
		document.getElementById("passBox").style.border = "2px solid red";
		document.getElementById("passBox2").style.border = "2px solid red";
		document.getElementById("pass2").innerHTML = "Password must contain between 8 and 16 characters.";  	
  } else {
		document.getElementById("passBox2").style.border = "";
		document.getElementById("pass2").innerHTML = "";
	}
}
function validateForm(){
	var x = document.forms["myForm"]["myName"].value;
	var xLetters = /^[A-Za-z\s]*$/;
	if (x.length < 2 || !x.match(xLetters)){
		return false;
	}
	var y = document.forms["myForm"]["myZip"].value;
	if (y.length != 5 || isNaN(y)){
		return false;
	}
	var z = document.forms["myForm"]["myEmail"].value;
	var at = z.indexOf("@");
	var dot = z.lastIndexOf(".");
	if (z == null || z == "" || z.length < 6 || at < 1 || at == z.length-1 || dot < at+2 || dot+2 >= z.length) {
		return false;
	}
	var p = document.forms["myForm"]["myPass"].value;
	var p2 = document.forms["myForm"]["myPass2"].value;
	if (p == null || p == "" || p.length < 8 || p.length > 16) {
		return false;
	}
	var p = document.forms["myForm"]["myPass"].value;
	var p2 = document.forms["myForm"]["myPass2"].value;
	if (p2 != p) {
		return false;
	}
}