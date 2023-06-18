var selectedItemId = null;

function changeColor(itemId) {
  var item = document.getElementById(itemId);

  if (selectedItemId !== null) {
    var selectedItem = document.getElementById(selectedItemId);
    selectedItem.style.backgroundColor = ""; // Remove a cor de fundo do item selecionado anteriormente
  }

  item.style.backgroundColor = "hsl(25, 97%, 53%)";
  item.style.color = "white"; // Atribui a cor de fundo ao item selecionado atualmente
  selectedItemId = itemId; // Atualiza o ID do item selecionado atualmente
}

const ratingContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".thanks-container");
const btnSubmit = document.getElementById("btn-submit");
const rates = document.querySelectorAll(".btn");
const result = document.getElementById("result");
const active = document.querySelector(".active");
let ratePoint = null;

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    console.log(`rating selected: ${rate.innerHTML}`);
    ratePoint = rate.innerHTML;
    result.innerHTML = ratePoint;
    activeClass();
    rate.classList.add("active");
  });
});

btnSubmit.addEventListener("click", () => {
  console.log(`click btn-submit`);
  if (ratePoint != null) {
    thanksContainer.classList.remove("hidden");
    btnSubmit.disabled = true; // Desabilita o botão "SUBMIT" após o clique
    console.log(`You selected ${ratePoint} out of 5`);
  }
});

function activeClass() {
  const active = document.querySelectorAll(".active");
  active.forEach((el) => {
    el.classList.remove("active");
  });
}
