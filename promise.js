const cart = ["Shirt", "Pant", "Shoe"];

createOrder(cart)
    .then(function(orderId) {
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo){
        console.log(paymentInfo);
    })
    .catch(function(err){
        console.log(err.message);
    })

function createOrder() {
    const pr = new Promise(function (resolve, reject) {
        //create orderId
        //validate Order
        if (!validateCart(cart)) {
            const err = new Error("Cart is not Valid");
            reject(err);
        }
        const orderId = 12398;
        if (orderId) {
            setTimeout(function () {
                resolve(orderId)
            }, 5000);
        }
    })
    return pr;
}

function validateCart(cart) {
    if (cart.length > 0) {
        return true;
    } else {
        return false;
    }
}

function proceedToPayment(orderId) {
    return new Promise(function(resolve, reject) {
        resolve(`Your order id is ${orderId} and Payment is Successful!!!`)
    });
}