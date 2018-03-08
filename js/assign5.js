function validate() {
  var valid = false;

  if (valPassword()) {
    if (valRePassword()) {
      if (valFName()) {
        if (valLName()) {
          if (valTel()) {
            valid = true;
          }
        }
      }
    }
  }

  return valid;
}

function valPassword() {
  var valid = false;
  var password = document.querySelector("#form-password").value.trim();
  var errorArea = document.querySelector("#invalidPassword");
  var pattern1 = /[0-9]/;
  var pattern2 = /[a-z]/;
  var pattern3 = /[A-Z]/;

  if (password === "" && password != null) {
    document.querySelector("#form-password").style.border = "2px solid red";
    errorArea.innerHTML = "X Password can not be empty.";
  } else if (password.length < 8) {
    document.querySelector("#form-password").style.border = "2px solid red";
    errorArea.innerHTML = "X Password must be at least 8 characters.";
  } else if (!(pattern1.test(password))) {
    document.querySelector("#form-password").style.border = "2px solid red";
    errorArea.innerHTML = "X Password must contain a number.";
  } else if (!(pattern2.test(password))) {
    document.querySelector("#form-password").style.border = "2px solid red";
    errorArea.innerHTML = "X Password must contain a lowercase character.";
  } else if (!(pattern3.test(password))) {
    document.querySelector("#form-password").style.border = "2px solid red";
    errorArea.innerHTML = "X Password must contain an uppercase character.";
  } else {
    document.querySelector("#form-password").style.border = "2px solid gray";
    errorArea.innerHTML = "";
    valid = true;
  }

  return valid;
}

function valRePassword() {
  var valid = false;
  var password = document.querySelector("#form-password").value.trim();
  var rePassword = document.querySelector("#form-repassword").value.trim();
  var errorArea = document.querySelector("#invalidRePassword");

  if (rePassword != password) {
    document.querySelector("#form-repassword").style.border = "2px solid red";
    errorArea.innerHTML = "X Passwords do not match.";
  } else {
    document.querySelector("#form-repassword").style.border = "2px solid gray";
    errorArea.innerHTML = "";
    valid = true;
  }

  return valid;
}

function valFName() {
  var valid = false;
  var name = document.querySelector("#form-fname").value.trim();
  var errorArea = document.querySelector("#invalidFName");
  var pattern1 = /[a-zA-Z]/;
  var pattern2 = /[^a-zA-Z\-'"]/;

  if (name === "") {
    document.querySelector("#form-fname").style.border = "2px solid red";
    errorArea.innerHTML = "X First Name can not be empty.";
  } else if (!(pattern1.test(name))) {
    document.querySelector("#form-fname").style.border = "2px solid red";
    errorArea.innerHTML = "X First Name must contain a letter.";
  } else if (pattern2.test(name)) {
    document.querySelector("#form-fname").style.border = "2px solid red";
    errorArea.innerHTML = "X First Name can only contain letters, and \"-\" or '.";
  } else {
    document.querySelector("#form-fname").style.border = "2px solid gray";
    errorArea.innerHTML = "";
    valid = true;
  }

  return valid;
}

function valLName() {
  var valid = false;
  var name = document.querySelector("#form-lname").value.trim();
  var errorArea = document.querySelector("#invalidLName");
  var pattern1 = /[a-zA-Z]/;
  var pattern2 = /[^a-zA-Z\-'"]/;

  if (name === "") {
    document.querySelector("#form-lname").style.border = "2px solid red";
    errorArea.innerHTML = "X Last Name can not be empty.";
  } else if (!(pattern1.test(name))) {
    document.querySelector("#form-lname").style.border = "2px solid red";
    errorArea.innerHTML = "X Last Name must contain a letter.";
  } else if (pattern2.test(name)) {
    document.querySelector("#form-lname").style.border = "2px solid red";
    errorArea.innerHTML = "X Last Name can only contain letters, and \"-\" or '.";
  } else {
    document.querySelector("#form-lname").style.border = "2px solid gray";
    errorArea.innerHTML = "";
    valid = true;
  }

  return valid;
}

function valTel() {
  var valid = false;
  var tel = document.querySelector("#form-tel").value.trim();
  var errorArea = document.querySelector("#invalidTel");
  var pattern1 = /^\d{3}-\d{3}-\d{4}$/ ;

  if (tel.length != 12) {
    document.querySelector("#form-tel").style.border = "2px solid red";
    errorArea.innerHTML = "X Phone Number must be 10 digits long.";
  } else if (!(pattern1.test(tel))) {
    document.querySelector("#form-tel").style.border = "2px solid red";
    errorArea.innerHTML = "X Phone Number must be in the format \"000-000-000\".";
  } else if ((tel.substr(0,3) === "000")) {
    document.querySelector("#form-tel").style.border = "2px solid red";
    errorArea.innerHTML = "The area code can not be \"000\".";
  } else if ((tel.substr(4,3) === "000") && (tel.substr(8,12) === "0000")) {
    document.querySelector("#form-tel").style.border = "2px solid red";
    errorArea.innerHTML = "The Phone Number can not be all 0\"s.";
  } else {
    document.querySelector("#form-tel").style.border = "2px solid gray";
    errorArea.innerHTML = "";
    valid = true;
  }

  return valid;
}
