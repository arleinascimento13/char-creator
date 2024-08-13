function removeURL(url) {
  let urlObj = new URL(url, window.location.origin);
  let path = urlObj.pathname;
  return path;
}

function changeFace(faceReq) {
  let oldFace = document.querySelector("#main-image").src;

  if (removeURL(oldFace) == `/${faceReq}`) {
    return console.log("selected");
  }

  return (document.querySelector("#main-image").src = faceReq);
}

function changeBeard(beardReq) {
  let oldBeard = document.querySelector
}