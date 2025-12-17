const emotionText = document.querySelector(".emotion h1");

const happyBTN = document.querySelector(".btn-happy");
const mediumBTN = document.querySelector(".btn-medium");
const sadBTN = document.querySelector(".btn-sad");

happyBTN.onclick = () => {
  emotionText.textContent = "😊";
  happyBTN.classList.add("glow");
};

mediumBTN.onclick = () => {
  emotionText.textContent = "😐";
  mediumBTN.classList.add("glow");
};

sadBTN.onclick = () => {
  emotionText.textContent = "😢";
  sadBTN.classList.add("glow");
};
