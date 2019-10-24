exports.createQuestion = () => {
  const question = {
    message: '提供更改的详细说明：\n ',
    name: 'body',
    type: 'input'
  };

  return question;
};
