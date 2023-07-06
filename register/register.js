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

// Validating error messages javascript

// Inputs main validation function to validate
const inputSurnaValid = () => {
  if (surName.value === "") {
  }
};
// Ending

inputSurnaValid();

const inputName = (name) => {
  if (middleName.value === "") {
    alert("please enter name");
  }
};
inputName();

// ending

const emailValid = () => {
  if (emailInput.value === "" || !emailInput.value === validRegex.value) {
    alert("Please enter");
  }
};

emailValid();

// End validation

getId.addEventListener =
  ("click",
  (event) => {
    // Math.random(10);
    alert = Math.random(10);
  });

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

emailInput.addEventListener("change", (event) => {
  setTimeout(() => {}, 2000);
});

signUp.addEventListener("click", (event) => {
  if (surName.value === "") {
    alert("please enter your surname");
  }
});
