const burger = document.getElementById("burger");
const controll = document.getElementById("controll");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  controll.classList.toggle("active");
});
