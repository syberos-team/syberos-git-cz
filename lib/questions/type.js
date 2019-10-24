const pad = require('pad-right');

const typeToListItem = ({types, disableEmoji}, type) => {
  const {description, emoji, value} = types[type];
  const prefix = emoji && !disableEmoji ? emoji + '  ' : '';

  return {
    name: prefix + pad(value + ':', 12, ' ') + description,
    value
  };
};

exports.createQuestion = (state) => {
  const {config} = state;
  const question = {
    choices: config.list.map((type) => typeToListItem(config, type)),
    message: '选择您要提交的更改类型：',
    name: 'type',
    type: 'list'
  };

  return question;
};
