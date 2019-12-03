const {demodb} = require('../db')


const readMenu = () =>{
    return demodb.readMenu()
}

const readFood = (menuId) =>{
   return demodb.readFood(menuId)
}

const getFood = ()=>{
   return demodb.getFood()
}

module.exports = {
   readMenu,readFood,getFood
}