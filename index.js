#!/usr/bin/env node

const inquirer = require('inquirer');
const fs = require('fs');

const CHOICES = fs.readdirSync(`${__dirname}/templates`);
const CURR_DIR = process.cwd();

const QUESTIONS = [
  {
    name: 'base-project-choice',
    type: 'list',
    message: 'What base project template would you like to generate?',
    choices: CHOICES
  },
  {
    name: 'project-name',
    type: 'input',
    message: 'Project name:',
    validate: function (input) {
      if (/^([A-Za-z][A-Za-z\-\_\d]*)$/.test(input)) return true;
      else return 'Project name may only include letters, numbers, underscores and dashes, and should starts with a letter.';
    }
  }
];

inquirer.prompt(QUESTIONS)
  .then(answers => {
      const projectChoice = answers['base-project-choice'];
      const projectName = answers['project-name'];
      const templatePath = `${__dirname}/templates/${projectChoice}`;

      fs.mkdirSync(`${CURR_DIR}/${projectName}`);

      createDirectoryContents(templatePath, projectName, projectName, projectChoice);
    });

function createDirectoryContents (templatePath, newProjectPath, projectName, projectChoice) {
  const filesToCreate = fs.readdirSync(templatePath);
  filesToCreate.forEach(file => {
    const origFilePath = `${templatePath}/${file}`;

    // get stats about the current file
    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      const contents = fs.readFileSync(origFilePath, 'utf8');
      var appName = /base-app/g;
      if (projectChoice === "rails") {
        appName = /BaseApp/g;
        projectName = constantizeString(projectName);
      }
      result = contents.replace(appName, projectName);
      const writePath = `${CURR_DIR}/${newProjectPath}/${file}`;
      fs.writeFileSync(writePath, result, 'utf8');
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${CURR_DIR}/${newProjectPath}/${file}`);

      // recursive call
      createDirectoryContents(`${templatePath}/${file}`, `${newProjectPath}/${file}`, projectName, projectChoice);
    }
  });
}

function constantizeString(string) {
  return capitalizeFirstLetter(toCamelCase(string));
}

function toCamelCase(string) {
  string  = string.replace(/\b(\w)/g, captureUppercase);
  string = string.replace(/_(\w)/g, captureUppercase);
  string =  string.replace(/-(\w)/g, captureUppercase)
  return string.replace(/\s+/g, '');
}

function captureUppercase(match, capture) {
  return capture.toUpperCase();
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}