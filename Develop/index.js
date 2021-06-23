// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const createReadme = require('./utils/createReadme');
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            name: 'welcome',
            message: 'Welcome to ReadMe Generator! Answer a few questions and have a professional ReadMe generated for you! Press enter to continue.'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github Username?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your Github user name.')
                    return false;
                }

            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of this project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please describe your project.')
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmInstall',
            message: 'Would you like to provide install instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'install',
            message: 'What instructions are required to insall your project?',
            when: ({ confirmInstall }) => confirmInstall
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage of this project?',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide the usage of your project.')
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmContribution',
            message: 'Would you like to add contribution guidlines?',
            default: true
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please provide contribution guidelines.',
            when: ({ confirmContribution }) => confirmContribution
        },
        {
            type: 'confirm',
            name: 'confirmTest',
            message: 'Would you like to provide test instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'test',
            message: 'Describe tests for this project.',
            when: ({ confirmTest }) => confirmTest
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license would you like to use?',
            choices: ['General Public License', 'MIT License', 'Apache License']
        }
    ])
}
promptUser()
.then(input => {
    return copyFile(input);
})
// .then(markdown => {
//     return createReadme(markdown);
// })
const questions = [];

// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };
const copyFile = () => {
    return new Promise((resolve, reject) => {
      fs.copyFile('./dist/README.md', err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'ReadMe created!'
        });
      });
    });
  };

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
