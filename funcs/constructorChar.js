import removeURL from "./urlRemover.js";

// if user.character > 4
// cannot create

export default class Char {
  constructor(head, beard, glass) {
    this.face = head;
    this.beard = beard;
    // this.glass = glass;
  }

  selectAtribute(oldInfo, req) {
    if (oldInfo == `/${req}`) {
      return console.log("already selected");
    }
  }

  changeAtribute(dir, newAtribute, type) {
    if (type == "face") {
      this.face.src = newAtribute;
    } else {
      this.beard.src = newAtribute;
    }

    console.log(removeURL(this.face.src), removeURL(this.beard.src));
  }
}
