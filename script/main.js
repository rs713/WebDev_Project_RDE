function validateForm() {

  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (fname == "" || lname == "") {
	  alert("First and last names are required");

  }

  if (email == "") {
    alert("Please enter a valid email address");

  }
	
  if (message == "") {
    alert("Please enter your query before submitting");

  }

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
	  alert("Please enter a valid email address");

  }

}
