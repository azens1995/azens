#!/usr/bin/env node
const pkgJSON = require('./package.json');
const chalk = require('chalk');

console.log(`
NAME: ${pkgJSON.name},
VERSION: ${pkgJSON.version},
AUTHOR: ${pkgJSON.author},
INFO: ${pkgJSON.description}
`);

console.log(`
${chalk.bgBlue.bold(` Eklak Dangaura - Software Engineer `)}

${chalk.italic(`Hi, this is Eklak. I am a Software Engineer from Nepal.
With 6+ years of experience in various technology, I am now learning
to create a CLI application.
`)}

If you want to connect with me, you can find me here:

${chalk.hex(`#1da1f2`).bold.inverse(` Twitter `)} ${chalk.dim(
  `https://twitter.com/perleklak`
)}
${chalk.hex(`#6cc644`).bold.inverse(` Github `)} ${chalk.dim(
  `https://githuib.com/azens1995`
)}
`);
