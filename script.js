import Char from "./funcs/constructorChar.js";
import removeURL from "./funcs/urlRemover.js";

function setDefaultChar() {
  const char = new Char();
  let oldFace = removeURL(document.querySelector("#main-image").src);
  let oldBeard = removeURL(document.querySelector("#beard-image").src);

  char.face = oldFace;
  char.beard = oldBeard;

  return char;
}

const char = setDefaultChar();

function setFace(type, newAtribute) {
  console.log(char.face, newAtribute, type)
  if (type == "face") {
    char.changeAtribute(char.face, newAtribute, type);
  } else {
    char.changeAtribute(char.beard, newAtribute, type);
  }
};

setFace("face", "assets/face2.png");

// console.log(char.face, document.querySelector("#main-image"));