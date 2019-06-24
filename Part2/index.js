const idInput = document.getElementById("idInput");
const colorInput = document.getElementById("colorInput");

function setCard() {
  const card = document.getElementById(idInput.value);
  card.style.color = colorInput.value;
}

function reset() {
  let cardReset = document.getElementsByTagName("section");
  for (let i = 0; i < cardReset.length; i++) {
    cardReset[i].removeAttribute("style");
  }
}
