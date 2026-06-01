/*Promises: Used to handle asynchrnous tasks. To appropriately react instead of freezing the application when 
asynchronus tasks take place.*/

function fetchData(success){
    return new Promise((resolve, reject) => {
        setTimeout(() => {  //used to show asynchrnous tasks. Is usually implemented by the browser
            if (success) {
              resolve("Download successful!");
              console.log("Resolve has been executed");
            } else {
              reject("Download failed!");
              console.log("Reject has been executed");
            }
        },2000)
    })
}

let data = fetchData(false);
data
  .then((received_then) => {
    console.log("Current status: " + received_then);
  })
  .catch((received_catch) => {
    console.log("Current status: " + received_catch);
  })
  .finally(()=>{
    console.log("Application has ended:)");
  })