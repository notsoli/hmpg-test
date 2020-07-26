// controller

// public values
console.log(one.title)
console.log(two.title)

// private values
console.log(two.password)

// public functions
console.log(one.add(3, 5))

// private functions
try {
  console.log(one.secret())
} catch (error) {
  console.log(error.message)
}
