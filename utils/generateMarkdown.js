const { writeFile } = require('fs');
let badge = license => {
  return license == 'The MIT License'
  ?`![The MIT License](https://img.shields.io/badge/license-MIT-green)`
  : license == 'The GPL License'
  ? `![The GPL License](https://img.shields.io/badge/license-GPL-purple)`
  : license == 'Apache License'
  ? `![Apache License](https://img.shields.io/badge/license-Apache-yellow)`
  : license == 'BSD License'
  ? `![BSD License](https://img.shields.io/badge/license-BSD-blue)`
  : '';
};


function generateMarkdown(data) {
   
  let output = `

# ${data.title}
${badge(data.license)}

## Project Description
${data.description}
## Table of Contents
* [Project Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## Contributors
${data.contributing}
## Tests
${data.tests}
##License
#####This project is licensed under
${data.license}
## Questions
Contact me by clicking the below links:
* [Github Link](https://github.com/${data.questions})
* [Email Link](mailto:${data.email})


`;

  writeFile('./utils/README.md', output, err => { if (err) throw err });
}



module.exports = generateMarkdown;
