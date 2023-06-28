// require modules 
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

// function to create new svg file using inquirer and fs
function createLogo(response) {
    const svg = setShape(response);
    fs.writeFile(fileName, svg, () => console.log('Generated logo.svg'));
}

// initialize, ask questions then createLogo using responses and catch any errors
function init() {
    inquirer
    .prompt(questions)
    .then((response) =>{
        createLogo(response);
    })
    .catch(err => {
        console.log(err)
    });
}

init()