// import modules required
const fs = require('fs');
const inquirer = require('inquirer');
const setShape = require('./lib/shapes.test.js');

// import shape classes 
const {Triangle, Square, Circle } = require('./lib/shapes.js')

// function writes the SVG file using inquirer to prompt user 
function writeToFile(fileName, answers) {
    let svgString = "";
    svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  // <g> tag wraps <text> tag so that user font input layers on top of polygon -> not behind
  svgString += "<g>";
  // Takes user input for shape choice and inserts it into SVG file
  svgString += `${answers.shape}`;

  // conditional statment checks user input from color array 
  let shapeChoice;
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }

  


}




// function to create new svg file using inquirer and fs
// function createLogo(response) {
//     const svg = setShape(response);
//     fs.writeFile(fileName, svg, () => console.log('Generated logo.svg'));
// }

// initialize, ask questions then createLogo using responses and catch any errors with callback 
// function init() {
//     inquirer
//     .prompt(questions)
//     .then((response) => {
//         createLogo(response);
//     })
//     .catch(err => {
//         console.log(err)
//     });
// }

// init();