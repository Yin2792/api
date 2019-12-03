const { adminService } = require('../service')
const response = require('../model/response')
const multer = require('multer')

const maxSize = 20480000;


const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/uploads');
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + file.originalname);
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: maxSize }
}).single('foodImage')

const addMenu = (req, res) => {
    const menuName = req.body.menuName
    adminService.addMenu(menuName).then(data => {
        res.json(response({ success: true, message: "success" }))
    }).catch(err => {
        res.json(response({ success: false, message: err }))
    })
}

const addFood = (req, res) => {
    upload(req, res, function (err) {
        if (err) {
            console.log(err, 'multer error')
            res.json(response({ success: false, message: err }))
        }
        else {
            const foodName = req.body.foodName
            const price = req.body.price
            const size = req.body.size
            const menuId = req.body.menuId
            const image = req.file.filename
            adminService.addFood(foodName, image, price, size, menuId).then(data => {
                res.json(response({ success: true, message: "success" }))
            }).catch(err => {
                res.json(response({ success: false, message: err }))
            })
        }
    })
}

const updateMenu = (req, res) => {
    const menuId = req.params.menuId
    const menuName = req.body.menuName    
    adminService.updateMenu(menuId, menuName).then(data => {
        res.json(response({ success: true, message: "success" }))
    }).catch(err => {
        res.json(response({ success: false, message: err }))
    })
}

const updateFood = (req, res) => {
    upload(req, res, function (err) {
        if (err) {
            console.log(err, 'multer error')
            res.json(response({ success: false, message: err }))
        }
        else {
            let image=''
            if(req.file==null){
                image=null
            }
            else{
                image=req.file.filename
            }
            const foodId = req.params.foodId
            const foodName = req.body.foodName
            const price = req.body.price
            const size = req.body.size
            const menuId = req.body.menuId
            adminService.updateFood(foodId, foodName, image, price, size, menuId).then(data => {
                res.json(response({ success: true, message: "success" }))
            }).catch(err => {
                res.json(response({ success: false, message: err }))
            })
        }
    })
}

const addContact = (req, res) => {
    const address = req.body.address
    const openingTime = req.body.openingTime
    const phone = req.body.phone
    adminService.addContact(address, openingTime, phone).then(data => {
        res.json(response({ success: true, message: "success" }))
    }).catch(err => {
        res.json(response({ success: false, message: err }))
    })
}

const readContact = (req,res) =>{
    adminService.readContact().then(data=>{
        res.json(response({ success:true , payload:data }))
    }).catch(err =>{
        res.json(response({success:false, message:err}))
    })
}

const updateContact = (req,res) =>{
    const contactId=req.params.contactId
     const address = req.body.address
     const openingTime = req.body.openingTime
     const phone = req.body.phone
    adminService.updateContact(address,openingTime,phone,contactId).then(data =>{
        res.json(response({ success:"true", message:"success"}))
    }).catch(err =>{
        res.json(response({success:false, message:err}))
    })
}
const readMenuFood=(req,res)=>{
    adminService.readMenuFood().then(data=>{
        res.json(response({ success:true , payload:data }))
    }).catch(err =>{
        res.json(response({success:false, message:err}))
    })
}
module.exports = {
    addMenu, addFood, updateMenu, updateFood, addContact, readContact,updateContact,readMenuFood
}