const response = require('../model/response')
const {userService} = require('../service')


const readMenu = (req,res) =>{
    userService.readMenu().then(data=>{
        res.json(response({ success: true, payload:data }))
    }).catch(err =>{
        res.json(response({ success: false, message: err })) 
    })
}

const readFood = (req,res) =>{
    const menuId= req.params.menuId
    userService.readFood(menuId).then(data =>{
        res.json(response({ success:true, payload:data}))
    }).catch(err =>{
        res.json(response({success: false ,message:err}))
    })
}
const getFood = (req,res)=>{
    userService.getFood().then(data=>{
        res.json(response({ success: true, payload:data }))
    }).catch(err =>{
        res.json(response({ success: false, message: err })) 
    })
}
module.exports ={
    readMenu,readFood,getFood
}