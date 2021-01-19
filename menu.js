let show = true;

const menuSection = document.querySelector('.menu-section');
const menuToggle = menuSection.querySelector('.menu-toggle');

menuToggle.addEventListener("click", () => {

  document.body.style.overflow = show ? "hidden" : "initial";

  menuSection.classList.toggle('open', show);
  show = !show;
});