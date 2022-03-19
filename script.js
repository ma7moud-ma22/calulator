// بسم الله

let inputBtn = document.querySelectorAll(".inputs span");
let equalBtn = document.getElementById("equal");
let calculationVal = document.getElementById("calculationVal");
let typedProgress = document.getElementById("typedProgress");
let deletAllBtn = document.getElementById("deletAllBtn");
let deletLastLetter = document.getElementById("deletLastLetter");

inputBtn.forEach((span) => {
  span.addEventListener("click", function () {
    let btnValue = this.dataset.val;
    typedProgress.value += btnValue;
  });
});

equalBtn.addEventListener("click", () => {
  if (typedProgress.value != "") {
    if (eval(typedProgress.value) == Infinity) {
      calculationVal.value = "error";
    } else {
      calculationVal.value = eval(typedProgress.value);
    }
  }
});

deletAllBtn.onclick = function () {
  calculationVal.value = "= ";
  typedProgress.value = "";
};
deletLastLetter.addEventListener("click", () => {
  let afterDelet = typedProgress.value;
  typedProgress.value = afterDelet.slice(0, afterDelet.length - 1);
});
