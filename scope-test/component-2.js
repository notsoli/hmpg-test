// component two
const two = (() => {
  // public value
  const title = "two"

  // private value
  const password = "super hidden password!"

  // return things so other files can use them
  return {
    title: title
  }
})()
