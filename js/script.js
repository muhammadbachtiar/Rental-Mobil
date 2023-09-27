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

if (window.matchMedia("(min-width: 1200px)").matches){
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;

  $(".next-button-carousel").on("click", function () {
    if (scrollPosition < (carouselWidth - cardWidth * 4)) { 
      scrollPosition += cardWidth;  
      $(".carousel-inner").animate({ scrollLeft: scrollPosition },600); 
    }
  });

  $(".previous-button-carousel").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $(".carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
} if ((window.matchMedia("(min-width: 576px) and (max-width: 1199px)").matches)) {
  
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;

  $(".next-button-carousel").on("click", function () {
    if (scrollPosition < (carouselWidth - cardWidth * 3)) { 
      scrollPosition += cardWidth;  
      $(".carousel-inner").animate({ scrollLeft: scrollPosition },600); 
    }
  });

  $(".previous-button-carousel").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $(".carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });

}