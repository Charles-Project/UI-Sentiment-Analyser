// const wordToTest = require("plugging-sentiment-charles");
const checking = document.querySelector(".checking");
const form1 = document.querySelector(".form1");
const btn1 = document.querySelector(".btn-new");
const texting = document.querySelector(".texting");
const result = document.querySelector(".result");
let check = "true";
let sentence;

checking.addEventListener("click", () => {
  form1.classList.remove("hide");
  form1.classList.add("show");
});

btn1.addEventListener("click", () => {
  console.log(sentence);
  if (check === "true") {
    btn1.textContent = "Clear Text!";
    sentence = texting.value;
    console.log(sentence);
    //wordToTest(sentence)
    //result.textContent = `Result: `;
    result.classList.remove("hide");
    result.classList.add("show");
    check = "false";
    return;
  }
  if (check === "false") {
    result.classList.remove("show");
    result.classList.add("hide");
    btn1.textContent = "Analyse Text!";
    check = "true";
    texting.value = "";
  }
});
