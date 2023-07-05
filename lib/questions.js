// import colorKeywords array to check if chosen color matches list
const colorKeywords = require('./colorKeywords.js');

// inquirer will prompt user with questions about shape, color, and text
const questions = [
    // asking the desired shape
    {
        name: 'shape',
        message: 'What is the shape of your logo?',
        type: 'list',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    // asking the color of the shape
    {
        name: 'shapeColorChosen',
        message: 'What color would you like the shape to be?',
        type: 'list',
        choices: ['color keyword', 'hexadecimal']
    },
    // chosen color will need to validate with colorKeywords array
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color keyword',
        when: (answers) => {
            if(answers.shapeColorChosen === 'color keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (let i = 0, len = colorKeywords.length; i < len; i++) {
                if(answerLowercase.indexOf(colorKeywords[i]) != -1) {
                    return true;
                }}
                return console.log('\n Please enter a valid color keyword')
        }
    },
    // hexadecimal to validate hexadecimal with RegEx pattern
    {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape hexadecimal number (#CCCCCC)",
        when: (answers) => {
            if(answers.shapeColorChoice === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log("\n Please enter a valid hexadecimal")
            }
            return true;
        }
    },
    // validate user response to limit characters to 3
    {
        name: 'text',
        message: 'Write the desired text for shape chosen: (limited to three characters)',
        type: 'input',
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log("\n Text must be three characters or less, please try again!");
            }
            return true;
        }
    },
    // user choses text color based on hex or colorKeyword
    {
        name: 'textColorChoice',
        message: 'What is your desired text color? Choose a color format: ',
        type: 'list',
        choices: ['color keyword', 'hexadecimal']
    },
    // colorKeyword validated with colorKey array
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color keyword',
        when: (answers) => {
            if(answers.textColorChoice === 'color keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
                return true;
            }}
            return console.log("\n Please enter a valid color keyword")
        }
    },
    // hex is validated with RegEx pattern
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text hexadecimal number (#FFFFFF)',
        when: (answers) => {
            if(answers.textColorChoice === 'hexidecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log("\n Please enter a valid hexadecimal")
            }
            return true;
        }
    },
];
module.exports = questions;