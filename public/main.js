console.log("javascript");
//////////////////////
const checking = document.querySelector(".checking");
const form1 = document.querySelector(".form1");
const btn1 = document.querySelector(".btn-new");
const texting = document.querySelector(".texting");
const phil = document.querySelector(".phil");
const result = document.querySelector(".result");
const proxy = "https://cors-anywhere.herokuapp.com";
const Url = "http://localhost:3000/";
// const Url = "http://localhost:3000/weather";
let check = "true";
let sentence;

checking.addEventListener("click", e => {
  if (check) {
    form1.classList.remove("hide");
    form1.classList.add("show");
    check = false;
    checking.textContent = "clear";
    return;
  }

  if (!check) {
    texting.value = "";
    result.classList.remove("show");
    result.classList.add("hide");
    return;
  }
});

btn1.addEventListener("click", e => {
  sentence = texting.value;

  sendData(sentence)
    .then(res => {
      console.log(res.data.data);
      // result.classList.remove("hide");
      // result.classList.add("show");
      phil.textContent = res.data.data;
    })
    .catch(err => {
      console.error(err);
    });
  result.classList.remove("hide");
  result.classList.add("show");
});

// const sendData = sentence => {
//   axios.post(Url, {
//     sentence
//   });
// };

const sendData = sentence =>
  axios({
    method: "post",
    url: Url,
    data: { sentence }
  });
// /////////////////////////////////
