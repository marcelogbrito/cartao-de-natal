const elemCard = document.querySelector("div.card");
const elemClickIcon = document.querySelector("div.click-icon");

elemCard.addEventListener("click", function () {
  elemCard.classList.toggle("is-opened");
  elemClickIcon.classList.toggle("is-hidden");
});

// eslint-disable-next-line no-restricted-globals
screen.lockOrientation('landscape');
