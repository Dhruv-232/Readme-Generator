// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const generateMd = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub user name?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is the title of this project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Write a description of the project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Which people have worked on this project?',
        name: 'team'
    },
    {
        type: 'input',
        message: 'What dependencies need to be installed for this project?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What is the command to run this project?',
        name: 'command'
    },
    {
        type: 'input',
        message: 'What is your contact e-mail address?',
        name: 'email'
    },
    {
        type: 'list',
        message: 'Choose the license for this project',
        name: 'license',
        choices:  ['MIT', 'BSD3', 'LGPL', 'Apache', 'Other', 'None'],
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data); 
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        console.log("data =", data)
        var fileName = 'README.md';
        writeToFile(fileName, generateMd({...data}))
    });
}

// Function call to initialize app
init();
