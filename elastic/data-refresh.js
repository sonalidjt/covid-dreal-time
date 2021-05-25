require('log-timestamp')
const axios = require('axios')
const client = require('./connection')

const getData = async () => {
  all = await axios.get(`https://corona.lmao.ninja/v2/countries?yesterday=`, {
    headers: {
      'Content-Type': ['application/json', 'charset=utf-8'],
    },
  })
  data = all.data
  data.map(async (each) => {
    if (each.continent === '') return
    country = {
      iso2: each.countryInfo.iso2,
      iso3: each.countryInfo.iso3,
      updated: each.updated,
      name: each.country,
      time: Date.now(),
      cases: each.cases,
      todayCase: each.todayCases,
      deaths: each.deaths,
      todayDeaths: each.todayDeaths,
      recovered: each.recovered,
      todayRecovered: each.todayRecovered,
      active: each.active,
      critical: each.critical,
      casesPerOneMillion: each.casesPerOneMillion,
      deathsPerOneMillion: each.deathsPerOneMillion,
      tests: each.tests,
      testsPerOneMillion: each.testsPerOneMillion,
      population: each.population,
      continent: each.continent,
      oneCasePerPeople: each.oneCasePerPeople,
      oneTestPerPeople: each.oneTestPerPeople,
      undefined: each.undefined,
      activePerOneMillion: each.activePerOneMillion,
      recoveredPerOneMillion: each.recoveredPerOneMillion,
      criticalPerOneMillion: each.criticalPerOneMillion,
      countryId: each.countryInfo._id,
      latitude: each.countryInfo.lat,
      longitude: each.countryInfo.long,
      location: {
        lat: each.countryInfo.lat,
        lon: each.countryInfo.long,
      },
      countryFlag: each.countryInfo.flag,
    }
    //console.log(country)
    const response = await client.index({
      index: 'covid',
      id: each.countryInfo._id,
      body: country,
    })
    console.log(response)
  })
}
//getData()
setInterval(getData, 300000)
