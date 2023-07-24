// using javascript to create html text nodes will be highlighted soon after
const surName = document.querySelector("#surname");
const middleName = document.querySelector("#middlename");
const emailInput = document.querySelector("#email");
const generatId = document.querySelector("#studentid");
const password = document.querySelector("#pswd");
const levelValid = document.querySelector("#level");
const registerButton = document.querySelector("#signup");
const singIn = document.querySelector("#signin");
const getMainId = document.querySelector("#get");
const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Generalizing the inputs validation using setout time funtionality with add.eventlistner
surName.addEventListener("change", (event) => {
  setTimeout(() => {
    inputSurnaValid();
  }, 2000);
});

generatId.addEventListener("change", (event) => {
  generatStudentId();
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

levelValid.addEventListener("change", (event) => {
  setTimeout(() => {
    LevelValidation();
  }, 2000);
});
password.addEventListener("change", (event) => {
  setTimeout(() => {
    paswordValid();
  }, 2000);
});



getMainId.addEventListener("click", (event) => {
  if (getMainId.value == "") {
    alert("Please enter");
    getMainId.concat(emailValidator);
    getMainId.innerHTML = "";
    getMainId.style.color = "red";
    
  }
});

// Validating error messages javascript

// Inputs main validation function to validate
const inputSurnaValid = () => {
  if (surName.value == "") {
    surName.style.backgroundColor = "#FFFFFF";
    surName.style.color = "black";
    return false;
  } else {
    surName.style.background = "green";
    surName.style.color = "#fff";
  }
};

inputSurnaValid();

const inputMiddleName = () => {
  if (middleName.value == "") {
    middleName.style.background = "#FFFFFF";
    middleName.style.color = "black";
    return false;
  } else {
    middleName.style.background = "green";
    middleName.style.color = "#FFFFFF";
  }
};

inputMiddleName();

const emailValidator = () => {
  if (emailInput.value == "") {
    emailInput.style.background = "#FFFF";
    emailInput.style.color = "black";
    return false;
  } else if (!emailInput.value.match(validRegex)) {
    emailInput.style.background = "red";
    emailInput.style.color = "#FFFF";
    return false;
  } else {
    emailInput.style.background = "green";
    emailInput.style.color = "white";
  }
};

emailValidator();

const paswordValid = () => {
  if (password.value == "") {
    password.style.background = "#FFFF";
    password.style.color = "black";
    return false;
  } else if (password.value.length < 6 || password.value.length > 10) {
    password.style.background = "red";
    password.style.color = "white";
    return false;
  } else {
    password.style.background = "green";
    password.style.color = "white";
  }
};
paswordValid();

const LevelValidation = () => {
  if (levelValid.value == "") {
    levelValid.style.background = "#fff";
    levelValid.style.color = "black";
    return false;
  } else {
    levelValid.style.background = "green";
    levelValid.style.color = "#fff";
  }
};

LevelValidation();

const generatStudentId = () => {
  if (generatId.value == "") {
    generatId.style.background = "white";
    generatId.style.color = "black";
    return false;
  } else {
    generatId.concat(emailInput.value);
    generatId.innerHTML = "";
    generatId.style.color = "black";  
    r
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
  LevelValidation();
  generatStudentId();
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
    levelValid.style.background = "red";
    levelValid.style.color = "#ccc";
  }
});

// Validation of all fields
