// require modules 
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

// function to create new svg file using inquirer and fs
function createLogo(response) {
    const svg = setShape(response);
    fs.writeFile(fileName, svg, () => console.log('Generated logo.svg'));
}