import Observer from "./observer.js";
import "./analytics.js"; // This import is necessary to run the code in analytics.js

const pinkBtn = document.getElementById("pink-btn");
const blueBtn = document.getElementById("blue-btn");

pinkBtn.addEventListener("click", () => {
  const data = "🎀 Click on pink button! 🎀";
  Observer.notify(data);
});

blueBtn.addEventListener("click", () => {
  const data = "🦋 Click on blue button! 🦋";
  Observer.notify(data);
});
