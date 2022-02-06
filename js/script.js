const hamburger = document.querySelector('.fa-bars');
const navUl = document.querySelector(".nav-ul")

hamburger.addEventListener("click", () => {
    navUl.classList.toggle("open");
  

  });
  