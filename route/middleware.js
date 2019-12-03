const { verifyToken} = require("../security/token")
const response = require("../model/response")


const authMiddleware = (req,res,next) =>{
    const authorization = req.headers['authorization']
    const authFail = response({success:false,message:"Not authorized user"})
    if(!authorization){
        return res.json(authFail)
    }
   else if(! authorization.split(" ")[1]){
    return res.json(authFail) 
   }
  
   else {
      return verifyToken(`${authorization.split(" ")[1]}`, (error, data) => {
          if(error) {
              return res.json(response({success:false,message:error.message}))
          }
          else {
               console.log(" data1234 ", data)
              next()
          }
      })
  }
}

module.exports = authMiddleware