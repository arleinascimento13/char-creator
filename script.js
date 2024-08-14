import Char from "./funcs/constructorChar.js";
import logObj from "./funcs/logObj.js";
import removeURL from "./funcs/urlRemover.js";

function setDefaultChar() {
  const char = new Char();
  let oldFace = document.querySelector("#main-image");
  let oldBeard = document.querySelector("#beard-image");

  char.face = oldFace;
  char.beard = oldBeard;

  return char;
}

const char = setDefaultChar();

function setFace(type, newAtribute) {
  if (type == "face") {
    char.changeAtribute(char.face, newAtribute, type);
  } else {
    char.changeAtribute(char.beard, newAtribute, type);
  }
}

document.addEventListener("click", function (event) {
  const button = event.target.closest(".style-button");
  if (button && button.closest(".container")) {
    const img = button.querySelector(".image-style-button");

    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt");
    return setFace(alt, src);
  }
  const buttonSend = event.target.closest(".send-button");
  if (buttonSend) {
    console.log(logObj(char));
  }
});
