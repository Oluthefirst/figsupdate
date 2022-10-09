const toggle = document.getElementById("toggle");
const navbar = document.querySelector(".link-house");

toggle.onclick = function () {
  toggle.classList.toggle("active");
  navbar.classList.toggle("active");
};

// window.onscroll = () => {
//   navbar.classList.remove("active");
//   toggle.classList.remove("active");
// }