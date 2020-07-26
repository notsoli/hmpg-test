// component one
const one = (() => {
  // public value
  const title = "one"

  // public function
  function add(valueOne, valueTwo) {
    return valueOne + valueTwo
  }

  // private function
  function secret() {
    return "oooooo, secret!"
  }

  // return things so other files can use them
  return {
    title: title,
    add: add
  }
})()
