const nodemailer = require('nodemailer')
const utils = require('./uitls')
const transporter = nodemailer.createTransport({
  service: utils.common.service,
  auth: utils.common.auth
})

const subject = 'TEST secret santa'
const text = 'hi you must give gift to '
const members = {
  'example@gmail.com': 'example first',
  'example@mail.ru': 'example second'
}
const mails = Object.keys(members)
const values = Object.values(members)

const shuffle = (inputArray) => {
  const input = inputArray.slice()
  for (let i = input.length - 1; i >= 0; i--) {

    const randomIndex = Math.floor(Math.random() * (i + 1))
    const itemAtIndex = input[randomIndex]

    input[randomIndex] = input[i]
    input[i] = itemAtIndex
  }
  if (isShuffling(input, inputArray)) {
    return shuffle(inputArray)
  }
  return input
}

const isShuffling = (input, commonMails) => {
  for (let i = input.length - 1; i >= 0; i--) {
    if (input[i] === commonMails[i]) {
      return true
    }
  }
  return false
}

shuffle(mails)

//console.log(values)

for (let i = mails.length - 1; i >= 0; i--) {
  transporter.sendMail(utils.buildMail(mails[i], subject, text + values[i]),
    function (error, info) {
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent: ' + info.response)
      }
    })
}
