import removeURL from "./urlRemover.js";

export default class Char {
  constructor(head, beard, glass) {
    this.face = head;
    this.beard = beard;
    this.glass = glass;
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
  }
}
