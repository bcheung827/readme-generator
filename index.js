// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    //Title of Project
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a title to proceed');
                return false;
            }
        }
    },
    //Project Description
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of the project',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a project description to proceed');
                return false;
            }
        }
    },
    //Licensing
    {
        type:'list',
        name:'license',
        message:'Please choose which licensing the project has',
        choices:['Apache','Boost'],
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please choose a license');
                return false;
            }
        }
    },
    //Installation
    {
        type:'input',
        name:'installation',
        message:'Please describe the steps to install this project',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide a description to proceed');
                return false;
            }
        }
    },
    //Usage
    {
        type:'input',
        name:'usage',
        message:'Please provide an explanation of how this app is used',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide an explanation to proceed');
                return false;
            }
        }
    },
    //Contribution
    {
        type:'input',
        name:'contribution',
        message:'Please describe how the user can contribute to this project',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please describe contributions to proceed');
                return false;
            }
        }
    },
    //Test
    {
        type:'input',
        name:'testing',
        message:'Please explain how to test this project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide explanation to proceed');
                return false;
            }
        }
    },
    //Github Username
    {
        type:'input',
        name:'github',
        message:'What is your Github username?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter username to proceed');
                return false;
            }
        }
    },
    //Email Address
    {
        type:'input',
        name:'email',
        message:'What is your email?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter email to proceed');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
        throw err;
        console.log('Finished! Your information has been successfully transferred to the ReadMe.')
    })
 };

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("./utils/README.md", generateMarkdown(userInput));
    })
 };

// Function call to initialize app
init();
