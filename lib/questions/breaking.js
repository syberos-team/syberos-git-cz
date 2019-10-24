const chalk = require('chalk');

exports.createQuestion = () => {
  const question = {
    message: `列出所有重大更改\n  ${chalk.red('BREAKING CHANGE')}:`,
    name: 'breaking',
    type: 'input'
  };

  return question;
};
