// Input 
var fullName = document.getElementById('fullName');
var homeAdd = document.getElementById('homeAdd');
var phoneNumber = document.getElementById('phoneNumber');
var emailAdd = document.getElementById('emailAdd');
var password = document.getElementById('password');
var confPass = document.getElementById('confPass');
var myForm = document.getElementsByClassName('myForm');
var button = document.getElementById('submitbutton');
var reg = /^([a-z\d\.-]{3,})@([a-z]+)\.([a-z]{2,6})$/;
var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
var num = 8;

function formValidation() {
    console.log(fullName.value.length)
    // Full Name Validation
    // check if is empty
    if (fullName.value == "") {
        alert("Please fill in the Full Name field");
        return false;
    }
    // check for length
    else if ((fullName.value.length < 2) || (fullName.value.length > 20)) {
        alert("Full Name lenght must be between 2 and 20 characters ");
        return false;
    }
    // check if letters only
    else if (!isNaN(fullName.value)) {
        alert("Only characters are allowed");
        return false;
    }
    // Homme Address Validation
    // check if empty
    else if (homeAdd.value == "") {
        alert("Please fill in the Home Address field");
        return false;
    }
    // Phone Number Validation
    // check if empty
    else if (phoneNumber.value == "") {
        alert("Please fill in the Phone Number field");
        return false;
    }
    // check if numbers only
    else if (isNaN(phoneNumber.value)) {
        alert("Only digits are allowed");
        return false;
    }
    //  check for length
    else if (!(phoneNumber.value.length == 8)) {
        alert("Phone Number must be 8 digits only");
        return false;
    }
    // E-mail Address Validation
    // check if empty
    else if (emailAdd.value == "") {
        alert("Please fill in the E-mail Address field");
        return false;
    }
    // check if address is valid 
    else if (reg.test(emailAdd.value) === false) {
        alert("The E-mail Address is not valid");
        return false;
    }
    // Password Validation
    // check if empty
    else if (password.value == "") {
        alert("Please fill in the password field ");
        return false;
    }
    // check if password is valid
    else if (re.test(password.value) == false) {
        alert("The password must contain lowercase , uppercase and numbers");
        return false;
    }
    // Password confirmation
    else if (confPass.value == "") {
        alert("Please fill in the password confirmation");
        return false;
    }
    else if (password.value != confPass.value) {
        alert("Confirmed Password does not match Password");
        return false;
    }
}

button.addEventListener('click', () => formValidation());