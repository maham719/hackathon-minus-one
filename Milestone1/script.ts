
const btnMinus = document.querySelector<HTMLElement>("#btn-minus");
const section = document.querySelector<HTMLElement>("#section");
const btnPlus = document.querySelector<HTMLElement>("#btn-plus");

let clicked: boolean = false;

btnMinus?.addEventListener("click", function () {
    if (!clicked) {
        section!.style.display = "none";
        btnPlus!.style.display = "block";
        btnMinus!.style.display = "none";
        clicked = true;
    }
});

btnPlus?.addEventListener("click", function () {
    if (clicked) {
        section!.style.display = "block";
        btnMinus!.style.display = "block";
        btnPlus!.style.display = "none";
        clicked = false;
    }
});
