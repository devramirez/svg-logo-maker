// import colorKeywords array to check if chosen color matches list
const colorKeywords = require('./colorKeywords.js');

// inquirer will prompt user with questions 
const questions = [
    {
        name: 'shape',
        message: 'What is the shape of your logo?',
        type: 'list',
        choices: ['Circle,', 'Square', 'Triangle'],
    },
]