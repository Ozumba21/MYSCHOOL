// Show or hide answer
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // change icon
    const icons = faq.querySelector(".faq_icon i");
    if (icons.className === "uil uil-plus") {
      icons.className = "uil uil-minus";
    } else {
      icons.classList = "uil uil-plus";
    }
  });
});

//  show or hide menu

const menu = document.querySelector(" .navbar .container .nav-menu");
const openBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

openBtn.addEventListener("click", () => {
  menu.style.display = "block";
  openBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
});

closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  openBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
});
