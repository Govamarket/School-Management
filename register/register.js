// using javascript to create html text nodes will be highlighted soon after
const surName = document.querySelector("#surname");
const middleName = document.querySelector("#middlename");
const emailInput = document.querySelector("#email");
const generatId = document.querySelector("#studentid");
const password = document.querySelector("#pswd");
const passwordConfirmation = document.querySelector("#pswd2");
const registerButton = document.querySelector("#signup");
const singIn = document.querySelector("#signin");
// const inputFunction = document.querySelector("input");
const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// const getId = document.querySelector(".gitid");
// var style = document.createElement("style");

//Targeting error messages via to appear in (Using this method for now)
const targetSur = document.querySelector(".emptysurname");
const targetMidName = document.querySelector(".mid-empty");
const targetMail = document.querySelector(".emptymail");
const targetNotMatch = document.querySelector(".notMatch");
const targetiD = document.querySelector(".getid");
const targetidError = document.querySelector(".id-error");
const targetPsw = document.querySelector(".emptypsw");
const targetLessPsw = document.querySelector(".pswLessThan");
// const targetPswF = document.querySelector(".psw-error");
const targetPswConfirm = document.querySelector(".emptyconfirm");
const targetPswdLess = document.querySelector(".lessThan");
const targetPswError = document.querySelector(".pswd-error");

// Generalizing the inputs validation using setout time funtionality with add.eventlistner
surName.addEventListener("change", (event) => {
  setTimeout(() => {
    inputSurnaValid();
  }, 2000);
});

middleName.addEventListener("change", (event) => {
  setTimeout(() => {
    inputMiddleName();
  }, 2000);
});

emailInput.addEventListener("change", (event) => {
  setTimeout(() => {
    emailValidator();
  }, 2000);
});

password.addEventListener("change", (event) => {
  setTimeout(() => {
    paswordValid();
  }, 2000);
});

passwordConfirmation.addEventListener("change", (event) => {
  setTimeout(() => {
    pasconfirmValid();
  }, 2000);
});

// Validating error messages javascript

// Inputs main validation function to validate
const inputSurnaValid = () => {
  if (surName.value == "") {
    // targetSur.innerHTML = "Fill the input field";
    surName.style.backgroundColor = "#FFFFFF";
    surName.style.color = "black";
    // targetSur.style.paddingTop = "3px";
    targetSur.style.color = "tomato";
    targetSur.style.fontSize = "12px";
    targetSur.style.textAlign = "center";
    targetSur.style.fontWeight = "arial";
    return false;
  } else {
    surName.style.background = "green";
    surName.style.color = "#fff";
    targetSur.style.display = "none";
    targetSur.style.fontWeight = "arial";
  }
};

inputSurnaValid();

const inputMiddleName = () => {
  if (middleName.value == "") {
    middleName.style.background = "#FFFFFF";
    middleName.style.color = "black";
    // targetMidName.innerHTML = "Fill the input field";
    // targetMidName.style.paddingTop = "3px";
    targetMidName.style.fontWeight = "arial";
    targetMidName.style.color = "tomato";
    targetSur.style.fontWeight = "arial";
    targetMidName.style.fontSize = "12px";
    targetMidName.style.textAlign = "center";
    return false;
  } else {
    middleName.style.background = "green";
    middleName.style.color = "#FFFFFF";
    targetMidName.style.display = "none";
  }
};

inputMiddleName();

const emailValidator = () => {
  if (emailInput.value == "") {
    emailInput.style.background = "#FFFF";
    emailInput.style.color = "black";
    // targetMail.innerHTML = "Add valid email";
    targetMail.style.fontWeight = "arial";
    // targetMail.style.paddingTop = "3px";
    targetMail.style.color = "tomato";
    targetMail.style.fontSize = "12px";
    targetMail.style.textAlign = "center";
    targetSur.style.fontWeight = "arial";
    return false;
  } else if (!emailInput.value.match(validRegex)) {
    emailInput.style.background = "red";
    emailInput.style.color = "#FFFF";
    // targetNotMatch.innerHTML = "Please enter a valid email address";
    targetMail.style.visibility = "hidden";
    targetNotMatch.style.color = "tomato";
    targetNotMatch.style.textAlign = "center";
    targetNotMatch.style.fontWeight = "arial";
    targetNotMatch.style.fontSize = "12px";
    return false;
  } else {
    emailInput.style.background = "green";
    emailInput.style.color = "white";
    targetMail.style.visibility = "hidden";
    targetNotMatch.style.visibility = "hidden";
  }
};

emailValidator();

const paswordValid = () => {
  if (password.value == "") {
    password.style.background = "#FFFF";
    password.style.color = "black";
    // targetPsw.innerHTML = "Please enter your password";
    targetPsw.style.color = "red";
    targetPsw.style.textAlign = "center";
    targetPsw.style.fontSize = "12px";
    targetPsw.style.fontWeight = "arial";
    // targetPsw.style.paddingTop = "3px";
    return false;
  } else if (password.value.length < 6 || password.value.length > 10) {
    targetPsw.style.visibility = "hidden";
    // targetLessPsw.innerHTML = "Must be at least 6 characters";
    password.style.background = "red";
    password.style.color = "white";
    targetLessPsw.style.fontSize = "12px";
    targetLessPsw.style.textAlign = "center";
    targetLessPsw.style.color = "tomato";
    return false;
  } else {
    targetPsw.style.visibility = "hidden";
    targetLessPsw.style.visibility = "hidden";
    password.style.background = "green";
    password.style.color = "white";
  }
};
paswordValid();

const pasconfirmValid = () => {
  if (passwordConfirmation.value == "") {
    // targetPswConfirm.innerHTML = "Confirm Password";
    targetPswConfirm.style.fontSize = "12px";
    targetPswConfirm.style.color = "tomato";
    targetPswConfirm.style.textAlign = "center";
    // targetPswConfirm.style.marginBottom = "7px";
    // targetPswConfirm.style.paddingTop = "3px";
    passwordConfirmation.style.background = "#fff";
    passwordConfirmation.style.color = "black";
    return false;
  } else if (
    !passwordConfirmation.value.match(password.value) ||
    !password.value.match(passwordConfirmation.value)
  ) {
    // targetPswError.innerHTML = "Password does not match";
    targetPswError.style.color = "red";
    targetPswError.style.fontSize = "12px";
    targetPswError.style.fontFamily = "arial";
    targetPswError.style.textAlign = "center";
    // targetPswError.style.paddingTop = "3px";
    targetPswError.style.marginBottom = "1vh";
    targetPswConfirm.style.visibility = "hidden";
    passwordConfirmation.style.background = "red";
    passwordConfirmation.style.color = "#FFF";
    return false;
  } else {
    targetPswError.style.visibility = "hidden";
    targetPswConfirm.style.visibility = "hidden";
    passwordConfirmation.style.background = "green";
    passwordConfirmation.style.color = "#fff";
  }
};

pasconfirmValid();

const generatStudentId = () => {
  if (generatId.value == "") {
    // targetiD.innerHTML = "Click the red button to generate id";
    generatId.style.background = "white";
    targetiD.style.fontSize = "12px";
    targetiD.style.color = "tomatoes";
    // targetiD.style.paddingTop = "3px";
    targetLessPsw.style.fontFamily = "arial";
  }
};

registerButton.addEventListener("click", (event) => {
  if (
    surName.value == "" ||
    middleName.value == "" ||
    emailInput.value == "" ||
    passwordConfirmation.value == "" ||
    generatId.value == "" ||
    password.value == "" ||
    passwordConfirmation.value == ""
  )
    inputSurnaValid();
  inputMiddleName();
  emailValidator();
  paswordValid();
  pasconfirmValid();
  {
    alert("field the empty input");
    surName.style.background = "red";
    surName.style.color = "#ccc";
    middleName.style.background = "red";
    middleName.style.color = "#ccc";
    emailInput.style.background = "red";
    emailInput.style.color = "#ccc";
    generatId.style.background = "red";
    generatId.style.color = "#ccc";
    password.style.background = "red";
    password.style.color = "#ccc";
    passwordConfirmation.style.background = "red";
    passwordConfirmation.style.color = "#ccc";
  }
});

// Validation of all fields
