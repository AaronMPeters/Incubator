function go(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	if (name.length == 0 || email.length == 0 || password.length == 0){
		alert("Please fill in all fields!");
		return;
	}

	localStorage.setItem("name", name);
	localStorage.setItem("email", email);
	localStorage.setItem("password", password);

	window.location.href = 'register.html';
}

function leavePassword(){
	document.getElementById("go_button").style.opacity = 1.0;
}