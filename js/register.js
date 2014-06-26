window.onload = function(){	
	var name = localStorage.getItem("name");
	var email = localStorage.getItem("email");
	var name_split = name.split(' ');

	
	document.getElementById("welcome").innerHTML = "Alright "+ name_split[0] + ", let's get some information about you";
	var form = document.forms[0];
	form.elements["name"].value = name;
	form.elements["email"].value = email.substring(0, email.lastIndexOf("."));

	var emailEnding = email.substring(email.lastIndexOf(".") + 1, email.length);
	document.getElementById(emailEnding).selected = true;
}