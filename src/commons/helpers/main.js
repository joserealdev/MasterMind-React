const getButtonsValues = () => [
  { text: '7' },
  { text: '8' },
  { text: '9' },
  { text: '4' },
  { text: '5' },
  { text: '6' },
  { text: '1' },
  { text: '2' },
  { text: '3' },
  { text: '0' }
]

const getInputValues = () => [
  { text: '', id: 'inp0' },
  { text: '', id: 'inp1' },
  { text: '', id: 'inp2' },
  { text: '', id: 'inp3' }
]

const getRandomNumbers = (vMin = 0, vMax = 9) => {
  const rndmNumbers = []
  while (rndmNumbers.length < 4) {
    const num = Math.floor(Math.random() * (vMax - vMin + 1) + vMin)
    if (rndmNumbers.indexOf(num) === -1) rndmNumbers.push(num)
  }
  console.log(rndmNumbers)
  return rndmNumbers
}

export { getButtonsValues, getInputValues, getRandomNumbers }
