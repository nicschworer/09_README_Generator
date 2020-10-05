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
    message: "what is the name of the github repo?",
    name: "repo"
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
    message: "What are the intsallation instructions for your application?",
    name: "instal",
    default: "N/A"
},
{
    type: "input",
    message: "What are the instructions on how to use your app?",
    name: "instruct",
    default: "N/A"
},
{
    type: "input",
    message: "Give credit where credit's due.",
    name: "credit",
    default: "N/A"
},
{
    type: "input",
    message: "Give credit where credit's due.",
    name: "credit",
    default: "N/A"
},
{
    type: "input",
    message: "Did you use any licenses?",
    name: "license",
    default: "N/A"
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
    await fs.writeFileSync("README.md", htmlString, (err) => console.log(err));

    console.log(answers);
};

// function call to initialize program
init();

