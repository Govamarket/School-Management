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

export {
  surName,
  middleName,
  emailInput,
  generatId,
  password,
  passwordConfirmation,
  registerButton,
  singIn,
  validRegex,
  targetSur,
  targetMidName,
  targetNotMatch,
  targetiD,
  targetidError,
  targetPsw,
  targetLessPsw,
  targetPswConfirm,
  targetPswdLess,
  targetPswError,
}
