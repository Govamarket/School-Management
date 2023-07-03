  const surName = document.querySelector("#surname");
  const middleName = document.querySelector("#middlename");
  const emailInput = document.querySelector("email");
  const generatId = document.querySelector("#studentid");
  const password = document.querySelector("#pswd");
  const passwordConfirmation = document.querySelector("#pswd2");
  const signUp = document.querySelector("#signup");
  const singIn = document.querySelector("#signin");
  const inputFunction = document.querySelectorAll("input");
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Inputs main validation function to validate
const inputSurnaValid = () => {
  if (surName.value === "") {
      alert("Please enter surname");
  }
};

//Targeting error messages via to appear in (Using this method for now)

// Generalizing the inputs validation using setout time funtionality
surName.addEventListener("change", (event) => {
  setTimeout(() => {
    inputSurnaValid();
  }, 2000);
});


inputSurnaValid();





signUp.addEventListener("click", (event) => {
   if (surName.value === "") {
    alert("please enter your surname");
   }
});
