;(function () {
  const countryList = [
    'Colombia',
    'Alemania',
    'Australia',
    'Inglaterra',
    'Chile',
    'Canadá',
    'Italia',
    'España',
    'Inglaterra',
  ]

  const getRandomCountry = () => {
    return countryList[Math.floor(Math.random() * countryList.length)]
  }

  const getDOMElements = () => {
    const divApp = document.querySelector('.country')
    const startBtn = document.querySelector('.btn')

    return {
      divApp: divApp,
      startBtn: startBtn,
    }
  }

  const renderCountry = country => {
    const divApp = getDOMElements().divApp
    divApp.innerText = country
  }

  const shuffleCountries = () => {
    const startBtn = getDOMElements().startBtn
    let lastCountryChoosed = ''
    const countryChoosed = setInterval(() => {
      let randomCountry = getRandomCountry()
      while (lastCountryChoosed === randomCountry) {
        randomCountry = getRandomCountry()
      }
      lastCountryChoosed = randomCountry
      renderCountry(lastCountryChoosed)
    }, 90)
    setTimeout(() => {
      clearInterval(countryChoosed)
      startBtn.disabled = false
      renderCountry('Alemania')
    }, 4000)
  }

  const chooseCountryFn = () => {
    const startBtn = getDOMElements().startBtn
    startBtn.addEventListener('click', () => {
      shuffleCountries()
      startBtn.disabled = true
    })
  }

  chooseCountryFn()
})()
