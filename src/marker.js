class Marker {
  constructor(size, color, remainingInk) {
    this.size = size,
      this.color = color,
      this.remainingInk = remainingInk
  }

  write(string) {
    let noSpaces = string.split(" ").join("");

    let difference = (noSpaces.length - this.remainingInk);
    
    this.remainingInk -= noSpaces.length;
 
    return string.substring(0, (string.length - difference));
  }
}

module.exports = Marker
