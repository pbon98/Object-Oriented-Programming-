function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
  numLegs: 4,
  eat: function() {
    console.log("miam miam")
  },
  describe: function() {
    console.log("my name is " + this.name)
  }
  };