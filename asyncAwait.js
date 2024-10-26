//example 1
async function checkProductAvailability(productId) {
    const pr = new Promise(function (resolve, reject) {
        if (productId > 100) {
            setTimeout(function () {
                resolve(productId)
            }, 5000)
        } else {
            const err = new Error("Product Id should be above 100")
            reject(err);
        }
    })
    console.log("it won't wait...")
    const prData = await pr;
    console.log("it will wait and print log and result in same time...")
    console.log(prData);
    return prData;
}

checkProductAvailability(102)
.then(function(productId){
    console.log(`Product Id is ${productId}`)
})
.catch(function (err) {
  console.log(err.message);
})

//example2