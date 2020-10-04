// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}

## Description 

${data.description}


## Table of Contents

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

${data.instal}


## Usage 

${data.instruct}


## Credits

${data.credit}


## License

${data.license}

---
## Badges

![top](https://img.shields.io/github/languages/top/${data.git}/${data.repo})

![count](https://img.shields.io/github/languages/count/${data.git}/${data.repo})

![downloads](https://img.shields.io/github/downloads/${data.git}/${data.repo}/total)


## Contributing

${data.contribute}


## Tests

${data.tests}`;
}

module.exports = generateMarkdown;
