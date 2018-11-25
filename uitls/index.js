const common = {
  service: 'mail.ru', //or gmail, ... yahoo,
  auth: {
    user: 'username',
    pass: 'password'
  },
  from: '<from@mail.ru>',
}

function buildMailOptions (to, subject, text) {
  return {
    from: common.from,
    to: to,
    subject: subject,
    text: text
  }
}

module.exports = {
  'buildMail': buildMailOptions,
  'common': common
}
