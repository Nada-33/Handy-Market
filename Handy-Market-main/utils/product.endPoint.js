const {roles} = require('../MiddleWare/auth.md')

const endPoint = {
    product :[roles.Seller],
    admin : [roles.Admin]

}

module.exports = endPoint