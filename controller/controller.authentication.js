const response = require('./../model/response')
const { authService } = require('../service')


const register = (req, res) => {
    const username = req.body.name
    const email = req.body.email
    const password = req.body.password
    const phone = req.body.phone

    authService.register(username, email, password,phone).then(data => {
        res.json(response({ success: true, message: "reigster success" }))
    }).catch(err => {
        res.json(response({ success: false, message: err }))
    })
}

const login = (req, res) => {
    const email = req.body.email
    const password = req.body.password

    authService.login(email, password).then(data => {
      //  console.log("data", data)
        if (data.length == 0) {
            res.json(response({ success: false, message: "email and password not match" }))
        }
        res.json(response({ success: true, payload: data }))
    }).catch(err => {
        res.json(response({ success: false, message: err }))
    })
}



module.exports = {
    register, login
}