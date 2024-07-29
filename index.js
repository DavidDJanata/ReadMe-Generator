// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';
import renderLicenseBadge from './utils/generateMarkdown.js';
import renderLicenseLink from './utils/generateMarkdown.js';
import renderLicenseSection from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Project name: ",
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project: ",
    },
    {
        type: "input",
        name: "install",
        message: "Installation instructions: ",
    },
    {
        type: "input",
        name: "useage",
        message: "Useage information: ",
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter contribution guidelines: ",
    },
    {
        type: "input",
        name: "tests",
        message: "Enter test instructions: ",
    },
    {
        type: "list",
        name: "license",
        message: "Select license: ",
        // Only 3 licenses for simplicity's sake - More could be added later on
        choices: ['None', 'Apache License 2.0', 'GNU General Public License 3.0', 'MIT License']
    },
    {
        type: "input",
        name: "githubName",
        message: "Enter GitHub name: ",
    },
    {
        type: "input",
        name: "email",
        message: "Enter email address: ",
    },
]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log('README.md created'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readMeContent = generateMarkdown(answers)
        writeToFile('README.md', readMeContent);
    }
)};

// Function call to initialize app
init();
