/*To avoid chains of .then and .catch the async and await allow for cleaner readability allowing to 
read the code like it were syncrnous*/
function fetchUserData(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("User data fetched successfully");
      } else {
        reject("404 File not found");
      }
    }, 2000);
  });
}

async function getUserData() {
  try {
    console.log("Fetching user data...");
    let data = await fetchUserData(true);
    console.log(data);
  } catch (error) {
    console.log("Error in fetching user data:", error);
  }
}
getUserData();

function fetchPostData(postSuccess) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (postSuccess) {
        resolve("Post data fetched successfully");
      } else {
        reject("404 Post not found");
      }
    },3000);
  });
}

function fetchCommentData(commentSuccess) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (commentSuccess) {
        resolve("Comment data fetched successfully");
      } else {
        reject("404 Comment not found");
      }
    },4000);
  });
}

async function getData(){
    try{
        console.log("Fetching data...");
        //for multiple promises a Promise.all can also be used
        const post = await fetchPostData(true);
        const comment = await fetchCommentData(true);
        console.log(post);
        console.log(comment);
    }
    catch(error){
        console.log("Error:",error);
    }
}
getData();