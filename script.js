import Char from "./funcs/constructorChar.js";

function removeURL(url) {
  let urlObj = new URL(url, window.location.origin);
  let path = urlObj.pathname;
  return path;
}

function setDefaultChar() {
  const char = new Char();
  let oldFace = removeURL(document.querySelector("#main-image").src);
  let oldBeard = removeURL(document.querySelector("#beard-image").src);

  char.face = oldFace;
  char.beard = oldBeard;

  return char;
}

const char = setDefaultChar();
console.log(char);

function changeFace(faceReq) {
  char.face = `/${faceReq}`
  document
}
function changeBeard(beardReq) {
  if (removeURL(oldBeard) == `/${beardReq}`) {
    return console.log("selected");
  }
}

function setFace(faceReq) {
  if (removeURL(char.face) == `/${faceReq}`) {
    return console.log("selected");
  } else {
    changeFace(faceReq);
  }
}
