const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const open = require("open");
const generateMarkdown = require("./utils/generateMarkdown");

const writeToFile = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
{
    type: "input",
    message: "What is your github username?",
    name: "git"
},
{
    type: "input",
    message: "What is the name of the github repo?",
    name: "repo"
},
{
    type: "input",
    message: "What is your email address?",
    name: "email"
},
{
    type: "input",
    message: "What is the name of your project?",
    name: "name"
},
{
    type: "input",
    message: "Please enter the desciption of your project.",
    name: "description"
},
{
    type: "input",
    message: "What command is needed to install your application?",
    name: "instal",
    default: "npm i"
},
{
    type: "input",
    message: "What command should be used to run your app?",
    name: "instruct",
    default: "node"
},
{
    type: "input",
    message: "Give credit where credit's due.",
    name: "credit",
    default: "N/A"
},

{
    type: "list",
    message: "Which license would you like to use?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
},
{
    type: "input",
    message: "How should people contribute?",
    name: "contribute",
    default: "N/A"
},
{
    type: "input",
    message: "What tests have you built for your app? How do you run them?",
    name: "tests",
    default: "N/A"
},
];

// function to initialize program
async function init() {
    const answers = await inquirer.prompt(questions);
    const htmlString = generateMarkdown(answers);
    await writeToFile("README.md", htmlString, (err) => console.log(err));    
};

// function call to initialize program
init();

