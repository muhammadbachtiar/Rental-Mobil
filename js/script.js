const hamburgerMenu = document.querySelector(".hamburger-menu");

const closeButton = document.querySelector(".close-button");

const menuList =  document.querySelectorAll(".nav-item");

const menu = document.querySelector(".responsive-MenuMobile");

const overlay = document.querySelector(".overlay");

hamburgerMenu.addEventListener("click", () => {
    menu.classList.toggle("active");

    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
});

closeButton.addEventListener("click", () => {
    menu.classList.toggle("active");

    overlay.style.display = "none";
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "auto";
});

menuList.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
      menu.classList.remove("active");
      overlay.style.display = "none";
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "auto";
    });
  });