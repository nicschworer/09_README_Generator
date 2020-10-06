// function to generate markdown for README
let licenseURL = ""

function generateMarkdown(data) {
  if (data.license === "MIT") {
    licenseURL = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (data.license === "APACHE 2.0") {
    licenseURL = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (data.license === "GPL 3.0") {
    licenseURL = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (data.license === "BSD 3") {
    licenseURL = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (data.license === "None") {
    licenseURL = "";
  }

  console.log("before md")

  return `# ${data.name}

  ${licenseURL}

## Description 
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation
To install, use the command below:

\` $ ${data.instal} \`


## Usage 
To run the package after you've installed it, run the command below:

\` $ ${data.instruct} \`


## Credits
${data.credit}

----
## Badges

![top](https://img.shields.io/github/languages/top/${data.git}/${data.repo})

![count](https://img.shields.io/github/languages/count/${data.git}/${data.repo})

![downloads](https://img.shields.io/github/downloads/${data.git}/${data.repo}/total)


## Contributing

${data.contribute}


## Tests

${data.tests}

----

## License

${licenseURL}


## Questions

Check out more of my stuff on my [GitHub](https://github.com/${data.git} ).

If you have any questions, feel free to email me at ${data.email}.`


};

module.exports = generateMarkdown;
