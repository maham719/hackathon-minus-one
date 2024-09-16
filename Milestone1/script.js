var btnMinus = document.querySelector("#btn-minus");
var section = document.querySelector("#section");
var btnPlus = document.querySelector("#btn-plus");
var clicked = false;
btnMinus === null || btnMinus === void 0 ? void 0 : btnMinus.addEventListener("click", function () {
    if (!clicked) {
        section.style.display = "none";
        btnPlus.style.display = "block";
        btnMinus.style.display = "none";
        clicked = true;
    }
});
btnPlus === null || btnPlus === void 0 ? void 0 : btnPlus.addEventListener("click", function () {
    if (clicked) {
        section.style.display = "block";
        btnMinus.style.display = "block";
        btnPlus.style.display = "none";
        clicked = false;
    }
});
