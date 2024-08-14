import Char from "./funcs/constructorChar.js";
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

