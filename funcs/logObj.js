export default function logObj(char) {
  var output = [];
     for (var property in char) {
    if (char[property] instanceof HTMLImageElement) {
         
         output.push(property + ": " + char[property].src + "; ")
    }
     }
}
