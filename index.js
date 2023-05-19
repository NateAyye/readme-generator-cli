const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const licenseTypes = {
  MIT: 'mit',
  'Apache-2.0': 'apache-2.0',
  'AGPL-3.0': 'agpl-3.0',
  'BSD-2-Clause': 'bsd-2-clause',
  'BSD-3-Clause': 'bsd-3-clause',
  'BSL-1.0': 'bsl-1.0',
  'CC0-1.0': 'cc0-1.0',
  'EPL-2.0': 'epl-2.0',
  'GPL-2.0': 'gpl-2.0',
  'GPL-3.0': 'gpl-3.0',
  'LGPL-2.1': 'lgpl-2.1',
  'MPL-2.0': 'mpl-2.0',
  Unlicense: 'unlicense',
};

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the Title of the project?',
    default: 'kabab-case',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description of the project?',
    default: 'Consice explanation and goals of this project',
  },
  {
    type: 'input',
    name: 'install',
    message: 'How will someone install this project?',
    default:
      'Example: First clone the repository with `git clone <repo-url>`...',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How will this project be used?',
    default: 'Provide Usage information.',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What are the guidelines for contributing to this project?',
    default:
      'Basic Rules for contributing to this repo are gonna be held to standards with the [Contributor Convenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) Standards.\n',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How will the users test this project?',
    default: 'Example: run `npm run test` etc...',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which License are you using for this project?',
    choices: ['none', ...Object.keys(licenseTypes)],
    default: 0,
  },
  {
    type: 'input',
    name: 'userName',
    message: 'What is your Github username?',
    default: '(github-username)',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your Email address?',
    default: '(github-username)',
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    if (err) console.log(`\x1B[7;31;49m ×ERROR\x1B[0m: ${err.message}`);
  });
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile('README.md', answers);
  });
}

// Function call to initialize app
init();
