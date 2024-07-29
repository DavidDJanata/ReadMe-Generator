// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';

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
    //TODO: 
        /*
        * License & badge
        * Github username
        * email address
        */
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
