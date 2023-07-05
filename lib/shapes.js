// constructor function and parent class that will extend to children classes
class Shape {
    constructor() {
        this.color = "";
    };
    // shape class takes in setColor function
    setColor(colorVar) {
        this.color = colorVar;
    }
};

// triangle class inherits properties defined in Shape class
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

// square class inherits properties defined in Shape class
class Square extends Shape {
    render() {
      // Returns polygon with color input
      return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
  }
  
  // Circle class inherits properties defined in Shape class
  class Circle extends Shape {
    render() {
      // Returns polygon with color input
      return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
  }

module.exports = {Triangle, Square, Circle};