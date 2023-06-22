// alert("hello world");

let allVarible = (click) => {
    
    const navBar = document.querySelector(".navbar");
    const navList = document.querySelector(".nav-lists");
    const dropDown = documnet.querySelector(".dropdown");
    const dropDownMenu = document.querySelector(".dropdown-menu");
    const burgerIcon = document.querySelector(".burger");
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const studentId = document.querySelector("#student");
    const passWord = document.querySelector('#psw');
    const password2 = document.querySelector('#psw2');
    const signUp = document.querySelector('#signup');
    const signIn = document.querySelector('#signin');   


    // working on the script funtion and implementations

    if (dropDownMenu.value == 0) {
        document.styleSheets.visibility = 'visible';
    }else{
        document.styleSheets.visibility = 'hidden';
    }

}

allVarible();

