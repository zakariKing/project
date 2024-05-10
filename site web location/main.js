let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const sr = ScrollReveal({
  distance: "60px",
  duration: 1200,
  delay: 0,
  reset: true,
});

sr.reveal(".text", { delay: 300, origin: "top" });
sr.reveal(".form-container form", { delay: 700, origin: "left" });
sr.reveal(".heading", { delay: 600, origin: "top" });
sr.reveal(".ride-container .box", { delay: 500, origin: "top" });
sr.reveal(".services-container .box", { delay: 600, origin: "top" });
sr.reveal(".contact-container .box", { delay: 600, origin: "top" });
sr.reveal(".last", { delay: 400, origin: "bottom" });
sr.reveal(".res-form-container form", { delay: 400, origin: "left" });