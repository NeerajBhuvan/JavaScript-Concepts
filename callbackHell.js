// Simulating async operations with setTimeout

// function checkProductAvailability(productId, callback) {
//     setTimeout(() => {
//       console.log(`Checked availability for product ID: ${productId}`);
//       console.log(callback);
//       callback(productId);
//     }, 1000);  // Simulating 1 second delay
//   }

//   function addToCart(productId, callback) {
//     setTimeout(() => {
//       console.log(`Added product ID: ${productId} to the cart`);
//       console.log(callback);
//       callback(productId);
//     }, 1000);  // Simulating 1 second delay
//   }

//   function applyDiscount(productId, callback) {
//     setTimeout(() => {
//       console.log(`Applied discount for product ID: ${productId}`);
//       console.log(callback);
//       callback(productId);
//     }, 1000);  // Simulating 1 second delay
//   }

//   function proceedToCheckout(productId, callback) {
//     setTimeout(() => {
//       console.log(`Proceeded to checkout for product ID: ${productId}`);
//       console.log(callback);
//       callback();
//     }, 1000);  // Simulating 1 second delay
//   }

//   // Callback Hell Example
//   checkProductAvailability(101, function(productId) {
//     console.log("Called Func before addToCart")
//     addToCart(productId, function(productId) {
//       applyDiscount(productId, function(productId) {
//         proceedToCheckout(productId, function() {
//           console.log("All  steps completed. Ready for payment!");
//         });
//       });
//     });
//   });

//promise
function checkProductAvailability(productId) {
  const pr = new Promise(function (resolve, reject) {
    if (productId > 100) {
      setTimeout(function () {
        resolve(productId)
      }, 1000);
    } else {
      const err = new Error("Product Id should be above 100")
      reject(err);
    }
  })
  return pr;
}

function addToCart(productId) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(productId);
      console.log(`Added product ID: ${productId} to the cart`);
    }, 1000);
  })
}

function applyDiscount(productId) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(productId);
      console.log(`Applied discount for product ID: ${productId}`);
    }, 1000);
  })
}

function proceedToCheckout(productId) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("All  steps completed. Ready for payment!")
      console.log(`Proceeded to checkout for product ID: ${productId}`);
    }, 1000);
  })
}

checkProductAvailability(102)
  .then(function (productId) {
    return addToCart(productId)
  })
  .then(function (productId) {
    return applyDiscount(productId)
  })
  .then(function (productId) {
    return proceedToCheckout(productId)
  })
  .then(function (output) {
    console.log(output);
  })
  .catch(function (err) {
    console.log(err.message);
  })
