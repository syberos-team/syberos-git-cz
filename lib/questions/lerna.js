const {getAllPackages, getChangedPackages, isLerna} = require('../util/lerna');

exports.createQuestion = (state) => {
  if (!isLerna(state)) {
    return null;
  }

  const changedPackages = getChangedPackages(state);
  const allPackages = getAllPackages(state);

  const question = {
    choices: allPackages,
    default: changedPackages,
    message: `该提交已影响检测到的软件包 (${changedPackages.length}) 个\n`,
    name: 'packages',
    type: 'checkbox'
  };

  return question;
};
