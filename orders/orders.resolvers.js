const ordersModel = require('./orders.model')
//no longer need root values, instead use the orders model and functions within to access orders data 
//now resolver returns the function call data 

module.exports = {
    Query: {
        orders: () => {return ordersModel.getAllOrders()},
    }
}




