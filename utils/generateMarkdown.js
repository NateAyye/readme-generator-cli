// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, userName, projectName) {
  if (!license) return '';
  return `![GitHub](https://img.shields.io/github/license/${userName}/${projectName})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license, projectName, userName) {
  if (!license) return '';
  return `[${license} License](https://github.com/${userName}/${projectName}/blob/main/LICENSE)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, projectName, userName) {
  if (!license) return '';
  return `## License
Refer to the ${renderLicenseLink(
    license,
    projectName,
    userName,
  )} file within the root of the repository;
    `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = data.license === 'none' ? false : data.license;
  const { userName, title } = data;
  return `# ${title}

${renderLicenseBadge(license, userName, title)}

## Description

${data.description}

## Table of Contents

 - [Installation](#installation)
 - [Usage](#usage)
 - [Contribution](#contribution)
 - [Tests](#tests)
${license ? ' - [License](#license)' : ''}
 - [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

## Contribution

${data.contribution}

## Tests

${data.tests}

${renderLicenseSection(license, title, userName)}

## Questions 

Want to know me a little bit bette more? [${userName}'s Profile](https://github.com/${userName}) 

Want to get in contact with me?
  - Send an email to ${data.email}  
`;
}

module.exports = generateMarkdown;
