// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  }
  else if (license === "Apache License 2.0") {
    return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  }
  else if (license === "GNU General Public License 3.0") {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  }
  else if (license === "MIT License") {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  }
  else if (license === "Apache License 2.0") {
    return 'https://opensource.org/licenses/Apache-2.0';
  }
  else if (license === "GNU General Public License 3.0") {
    return 'https://opensource.org/license/gpl-3-0';
  }
  else if (license === "MIT License") {
    return 'https://opensource.org/licenses/MIT'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  }
  else if (license === "Apache License 2.0") {
    return 'https://opensource.org/licenses/Apache-2.0';
  }
  else if (license === "GNU General Public License 3.0") {
    return 'https://opensource.org/license/gpl-3-0';
  }
  else if (license === "MIT License") {
    return 'https://opensource.org/licenses/MIT'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Install Instructions
  ${data.install}
  ## Useage Information
  ${data.useage}
  ## Contribution
  ${data.conribution}
  ## Test Instructions
  ${data.tests}
  ## License
  ${data.license}
  ## Contact
  ${data.githubName}
  ${data.email}
`;
}

export default generateMarkdown;
