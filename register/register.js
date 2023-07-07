// using javascript to create html text nodes will be highlighted soon after
const surName = document.querySelector("#surname");
const middleName = document.querySelector("#middlename");
const emailInput = document.querySelector("email");
const generatId = document.querySelector("#studentid");
const password = document.querySelector("#pswd");
const passwordConfirmation = document.querySelector("#pswd2");
const signUp = document.querySelector("#signup");
const singIn = document.querySelector("#signin");
const inputFunction = document.querySelectorAll("input");
const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const getId = document.querySelector(".gitid");
var style = document.createElement("style");

// Error messages using dom manipulation
const surEmptyMsg = document.querySelector(".emptymsg");
const surError = document.querySelector(".sur-error");

// middle name error messages
const emptymdMsg = document.querySelector(".mid-empty");
const middleErrorMsg = document.querySelector(".midleromsg");

// Email error messages
const emailEmpty = document.querySelector(".emptymail");
const emailErro = document.querySelector(".email-error");

// const student error messages
const studentEmpty = document.querySelector(".emptyinput");
const studentErrorMsg = document.querySelector(".id-error");

// password error messages
const pasEmpty = document.querySelector(".emptypsw");
const pasError = document.querySelector(".psw-error");
const pasLessThan = document.querySelector(".pswLessThan");

// Confirm password error messages
const confirmEmpty = document.querySelector(".emptyconfirm");
const confirmError = document.querySelector(".pswd-error");
const confirmLess = document.querySelector(".lessThan");

//Targeting error messages via to appear in (Using this method for now)

// Generalizing the inputs validation using setout time funtionality with add.eventlistner
surName.addEventListener("change", (event) => {
  setTimeout(() => {
    inputSurnaValid();
  }, 2000);
});

middleName.addEventListener("change", (event) => {
  setTimeout(() => {
    inputName();
  }, 2000);
});




// Validating error messages javascript

// Inputs main validation function to validate
const inputSurnaValid = () => {
  if (surName.value == "") {
    surEmptyMsg.style.visibility = "visible";
    surError.style.visibility = "hidden";
  }else{
    surEmptyMsg.style.visibility = "hidden";
    surError.style.visibility = "visible";
  }
};

inputSurnaValid();



const inputMiddleName = (name) => {
  if (middleName.value == "") {
    emptymdMsg.style.visibility = "visible";
  }
};
inputName();




signUp.addEventListener("click", (event) => {
  if (
    surName.value == "" ||
    middleName.value == "" ||
    emailInput.value == "" ||
    generatId.value == "" ||
    password.value == "" ||
    passwordConfirmation.value == "" ||
    signUp.value == "" ||
    singIn.value == "" ||
    inputFunction.value == "" ||
    validRegex.value == ""
  ) {
    inputSurnaValid();
  }
});

// Validation of all fields

