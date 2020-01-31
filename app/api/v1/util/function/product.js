const _ = require('lodash')

// Return Function
sum = (num1, num2) => {
    if(!_.isNumber(num1) || !_.isNumber(num2)) {
        throw new Error('Not an Valid Input')
    } 
    return num1 + num2
}

//Callback Function
sumcb = (num1, num2, callback) => {
    if(!_.isNumber(num1) || !_.isNumber(num2)) {
        throw new Error('Not an Valid Input')
    } 
    callback(num1 + num2)
}

//Promise Function
sumpromise = (num1, num2) => {
    return new Promise((revoke, reject) => {
        if(!_.isNumber(num1) || !_.isNumber(num2)) {
            reject(new Error('Not an Valid Input'))
        } 
        revoke(num1 + num2)
    })
}

absolute = (number) => {
    if(!_.isNumber(number)) throw new Error('Not an valid Input')
    return number >= 0 ? number : -number 
}

greeting = (username) => {
    if(_.isUndefined(username)) throw new Error('Not an valid Input')
    return 'Welcome Home ' + username
}

module.exports = {
    sum: (num1, num2) => sum(num1, num2),
    sumcb: (num1, num2, callback) => sumcb(num1, num2, callback),
    sumpromise: (num1, num2) => sumpromise(num1, num2),
    absolute: (number) => absolute(number),
    greeting: (username) => greeting(username)
}