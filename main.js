const checking = document.querySelector(".checking");
const form1 = document.querySelector(".form1");

checking.addEventListener("click", () => {
  form1.classList.remove("hide");
  form1.classList.add("show");
});
