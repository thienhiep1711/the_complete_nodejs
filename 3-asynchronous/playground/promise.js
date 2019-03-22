
var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject("Arguments must be numbers");
      }
    }, 1500)
  })
}

asyncAdd(100,'5').then((result) => {
  console.log("Result:", result )
  return asyncAdd(result, 33);
}).then((result) => {
  console.log("Should be 45", result)
}).catch((errorMessage) => {
  console.log(errorMessage);
})

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hey it's work");
//     // reject("Unable to fulfill promise");
//   }, 2500);
 
// })

// somePromise.then((message) => {
//   console.log("Success:", message);
// }, (errorMessage) => {
//   console.log("Error:", errorMessage);
// })