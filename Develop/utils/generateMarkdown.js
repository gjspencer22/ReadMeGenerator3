const fs = require ('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === 'Apache License'){
    return '![badge](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  };
  if (license === 'General Public License') {
    return '![badge](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(input) {
  return `
  ## ${input.title}

  ## Description
  ${input.description}

  ## Installation
  ${input.install}

  ## Usage
  ${input.usage}

  ## Contribution
  ${input.contribution}

  ## Tests
  ${input.test}

  ## License
  ${input.license}

  ## Github
  ${input.github}

  ## Email
  ${input.email}
`;
}

module.exports = generateMarkdown;
