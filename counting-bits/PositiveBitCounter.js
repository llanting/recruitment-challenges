function Count (input) {
  if (input < 0) throw new RangeError('The input must be a positive value')
  const answer = []
  const positions = []
  const reversed = input.toString(2).split('').reverse().join('')
  let numberOne = 0
  for (let i = 0; i < reversed.length; i++) {
    if (+reversed[i] === 1) {
      positions.push(i)
      numberOne++
    }
  }
  answer.push(numberOne)
  return answer.concat(positions)
}

module.exports = { Count }
