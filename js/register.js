window.onload = function(){	
	var name = localStorage.getItem("name");
	var email = localStorage.getItem("email");
	var name_split = name.split(' ');

	
	document.getElementById("welcome").innerHTML = "Alright "+ name_split[0] + ", let's get some basic information about you";
	var form = document.forms[0];
	form.elements["name"].value = name;
	form.elements["email"].value = email.substring(0, email.lastIndexOf("."));

	var emailEnding = email.substring(email.lastIndexOf(".") + 1, email.length);
	if (emailEnding == "edu" || emailEnding == "com" || emailEnding == "org" || emailEnding == "net")
		document.getElementById(emailEnding).selected = true;
	else{
		document.getElementById("other").selected = true;
		document.getElementById("other").innerHTML = "." + emailEnding;
	}
}