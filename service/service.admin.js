const { demodb } = require('../db')

const addMenu = (menuName) =>{
    return demodb.addMenu(menuName)
}

const addFood = (foodName,image,price,size,menuId) =>{
     return demodb.addFood(foodName,image,price,size,menuId)
}

const updateMenu = (menuId,menuName) =>{
    return demodb.updateMenu(menuId,menuName)
}

const updateFood = (foodId,foodName,image,price,size,menuId)=>{
    return demodb.updateFood(foodId,foodName,image,price,size,menuId)
}

const addContact = (address,openingTime,phone)=>{
    return demodb.addContact(address,openingTime,phone)
}

const readContact = () =>{
    return demodb.readContact()
}
const readMenuFood = () =>{
    return demodb.readMenuFood()
}

const updateContact = (address,openingTime,phone,contactId) =>{
    return demodb.updateContact(address,openingTime,phone,contactId)
}

module.exports= { 
    addMenu,addFood,updateMenu,updateFood,addContact,readContact,updateContact,readMenuFood
}