const { demodb } = require("../db")
const { produceToken } = require("../security/token")
const response = require('../model/response')
const bcrypt = require('bcrypt');


const register = (username, email, password,phone) => {
    const hash = bcrypt.hashSync(password, 10);
    return demodb.register(username, email, hash,phone)
}

const login = (email, password) => {
    return demodb.login(email, password).then(res => {
        if (res.length && bcrypt.compareSync(password, res[0].password)) {
            const payload = {
                name: res[0].username,
                email: res[0].email,
               
            }
            const token = produceToken(payload);
            const data = {
                token: token,
                username: res[0].name
            }
            return data
        }
        else {
            return []
        }
    }).catch(err =>{
        console.log(err)
    } )
}






module.exports = { register, login }