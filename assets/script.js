const modal = document.querySelector("#modal");
const boton = document.querySelectorAll(".footer .buttonSH");
const btnClose = document.querySelector(".modal__content-close");

for (let i = 0; i < boton.length; i++) {
  boton[i].addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("vissible");
  });
}

btnClose.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("vissible");
});
