#!/usr/bin/env node

const fs = require("fs");
const yaml = require("js-yaml");
const gitClone = require("git-clone");
const inquirer = require("inquirer");

const appDir = `${__dirname}/../`;
const currDir = process.cwd();
const config = yaml.safeLoad(fs.readFileSync(`${appDir}/config.yaml`, "utf8"));
const QUESTIONS = [
  {
    name: "project-name",
    type: "input",
    message: "Project name:",
    validate: input => {
      if (/^([A-Za-z][A-Za-z\-\_\d]*)$/.test(input)) return true;
      else
        return "Project name should starts with a letter and may only include letters, numbers, underscores or dashes.";
    },
  },
  {
    name: "generator",
    type: "list",
    message: "Which generator did you want to use as template?",
    choices: Object.keys(config),
  },
];

main();

async function main() {
  var answers = await inquirer.prompt(QUESTIONS);
  const projectName = answers["project-name"];
  const generatorName = answers["generator"];

  if (!Array.isArray(config[generatorName])) {
    gitClone(config[generatorName].repository, `${currDir}/${projectName}`, { shallow: true });
  } else {
    var answer = await inquirer.prompt([
      {
        name: "generator",
        type: "list",
        message: `Which ${generatorName} configuration do you want?`,
        choices: config[generatorName].map(o => o.name),
      },
    ]);

    var generator = config[generatorName].find(o => o.name == answer["generator"]);
    gitClone(generator.repository, `${currDir}/${projectName}`, { shallow: true });
  }
}
