// alert("hello world");

// const allVarible = () => {
    
//     const navBar = document.querySelector(".navbar");
//     const navList = document.querySelector(".nav-lists");
//     const dropDown = documnet.querySelector(".dropdown");
//     const dropDownMenu = document.querySelector(".dropdown-menu");
//     const burgerIcon = document.querySelector(".burger");
//     const nameInput = document.querySelector("#name");
//     const emailInput = document.querySelector("#email");
//     const studentId = document.querySelector("#student");
//     const passWord = document.querySelector('#psw');
//     const password2 = document.querySelector('#psw2');
//     const signUp = document.querySelector('#signup');
//     const signIn = document.querySelector('#signin');   


//     // working on the script funtion and implementations

//     if (dropDownMenu.value == 0) {
//         document.styleSheets.visibility = 'visible';
//     }else{
//         document.styleSheets.visibility = 'hidden';
//     }

// }

// allVarible();


const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-lists");
    const navLinks = document.querySelectorAll(".nav-lists li");
    // the toggle navigation
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      // Animate links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinksFade 0.5s ease forwards ${
            index / 7 + 1.5
          }s`;
        }
      });
      // Burger animation
      burger.classList.toggle("toggle");
    });
  };

  navSlide();
  
