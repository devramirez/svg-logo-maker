// function will set the shape user is asked in inquirer prompt

const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

function setShape(response){
    if(response.shape === 'Circle') {
        let userShape = new Circle(response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }

    if(response.shape === 'Square') {
        let userShape = new Square(response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }

    if(response.shape === 'Triangle') {
        let userShape = new Triangle(response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }
};