// register user
function register(username) {
  return new Promise((resolve, reject) => {
    // stand-in for register code
    setTimeout(() => {
      if (username === "username") {
        console.log("successful username")
        resolve()
      } else {
        reject(new Error("username is invalid"))
      }
    }, 100)
  })
}

// login user
function login(password) {
  return new Promise((resolve, reject) => {
    // stand-in for login code
    setTimeout(() => {
      if (password === "password") {
        console.log("successful password")
        resolve()
      } else {
        reject(new Error("password is invalid"))
      }
    }, 100)
  })
}

// move files
function move(filename) {
  return new Promise((resolve, reject) => {
    // stand-in for move code
    setTimeout(() => {
      if (filename === "filename") {
        console.log("successful filename")
        resolve()
      } else {
        reject(new Error("filename is invalid"))
      }
    }, 100)
  })
}

// handle and log errors
function handle(error) {
  console.log(error)
}

// top-to-bottom asynchronous function implementation using promise chaining
function testChain(username, password, filename) {
  // to use the returned value, put the value in the arrow function
  // otherwise, just use empty parentheses
  register(username)
  .then(() => {
    console.log("intermediate 1")
    const loginResult = login(password)
    return loginResult
  })
  .then(() => {
    console.log("intermediate 2")
    const moveResult = move(filename)
    return moveResult
  })
  .then(() => {
    console.log("done!")
  })
  .catch((error) => {
    handle(error)
  })
}

// top-to-bottom asynchronous function implementation using async/await
async function testAwait(username, password, filename) {
  try {
    // to use the returned value, declare a variable and set the await function to it
    // otherwise, just use await on its own, without the variable declaration
    await register(username)
    console.log("intermediate 1")
    await login(password)
    console.log("intermediate 2")
    await move(filename)
    console.log("done!")
  } catch (error) {
    handle(error)
  }
}

// tests the function using correct values
testAwait("username", "password", "filename")

// tests the function using incorrect values
// testAwait("usernam", "passwor", "filenam")
