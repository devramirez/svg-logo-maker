// import modules required
const fs = require('fs');
const inquirer = require('inquirer');

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

  // <text> tag gives rise to text alignment, text-content/text-color taken in from user prompt and gives default font size of "40"
  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
  // Closing </g> tag
  svgString += "</g>";
  // Closing </svg> tag
  svgString += "</svg>";

  // using fs to generate svg file
  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

// function initiates inquirer to prompt user with questions 
function promptUser() {
    inquirer
    .prompt([
        // text to display
        {
            type: "input",
            message: "Enter what text to display in your logo: (Only up to three characters allowed)",
            name: "text",
        },
        // text color for shape
        {
            type: "input",
            message: "Choose text color: (Enter either color keyword(snow) or a hexadecimal(#ffffff))",
            name: "textColor"
        },
        // shape choice
        {
            type: "list",
            message: "What shape would you like your logo to be?",
            choices: ["Circle", "Square", "Triangle"],
            name: "shape"
        },
    ])
    .then((answers) => {
        // error handling for prompt
        if(answers.text.length > 3) {
            console.log("Value must be no more than 3 characters long");
            promptUser();
        } else {
            writeToFile("logo.svg", answers)
        }
    });
}

promptUser();