import{
  
}
// Inputs main validation function to validate
const inputSurnaValid = () => {
  if (surName.value === "") {
      alert("Please enter surname");

  }
};


inputSurnaValid();

const inputName = (name) => {
  if (middleName.value === "") {
    alert("please enter name");
  }
}

inputName();

const emailValid = () => {
  if (emailInput.value === "" || !emailInput.value ===  validRegex.value) {
    alert("Please enter");
  }
}

emailValid();


//Targeting error messages via to appear in (Using this method for now)

// Generalizing the inputs validation using setout time funtionality
surName.addEventListener("change", (event) => {
  setTimeout(() => {
    inputSurnaValid();
  }, 2000);
});

middleName.addEventListener("change", (event) => {
  setTimeout(() => {
    inputName();
  }, 2000);
}

emailInput.addEventListener("change", (event) => {

});







signUp.addEventListener("click", (event) => {
   if (surName.value === "") {
    alert("please enter your surname");
   }
});
