const express = require('express')
const cors = require('cors')
const app = express()
const importCountries = require('./assets/countries')
//require('dotenv').config()

const countries = importCountries.countries()

// middlewares

app.use(express.static(__dirname + '/public'))
app.use(cors())

// routes

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

// get all countries

app.get('/api/countries', (req, res) => {
  res.send(countries)
})

// english endpoint

app.get('/api/countries/en/ByShortName/:name', (req, res) => {
  const country = countries.find((c) => c.enShortName.toLowerCase() == req.params.name.toLowerCase())
  if (!country) res.status(400).send('error')
  res.send(country)
})

app.get('/api/countries/en/ByFullName/:name', (req, res) => {
  const country = countries.find((c) => c.enFullName.toLowerCase() == req.params.name.toLowerCase())
  if (!country) res.status(400).send('error')
  res.send(country)
})

// slovenian endpoint

app.get('/api/countries/si/ByShortName/:name', (req, res) => {
  const country = countries.find((c) => c.siShortName.toLowerCase() == req.params.name.toLowerCase())
  if (!country) res.status(400).send('error')
  res.send(country)
})

app.get('/api/countries/si/ByFullName/:name', (req, res) => {
  const country = countries.find((c) => c.siFullName.toLowerCase() == req.params.name.toLowerCase())
  if (!country) res.status(400).send('error')
  res.send(country)
})

// country code endpoint

app.get('/api/countries/ByCountryCode/:code', (req, res) => {
  const country = countries.find((c) => c.countryCode.toLowerCase() == req.params.code.toLowerCase())
  if (!country) res.status(400).send('error')
  res.send(country)
})

// flag endpoints

app.get('/api/countries/FlagByCountryCode/:code/64', (req, res) => {
  const countryCode = req.params.code.toLowerCase()
  //res.set('Content-Type', 'application/octet-stream')
  //res.set('Content-Disposition', 'attachment;filename=' + countryCode + '.png')
  res.sendFile(__dirname + '/public/flags/64/' + countryCode + '.png')
})

app.get('/api/countries/FlagByCountryCode/:code/256', (req, res) => {
  const countryCode = req.params.code.toLowerCase()
  //res.set('Content-Type', 'application/octet-stream')
  //res.set('Content-Disposition', 'attachment;filename=' + countryCode + '.png')
  res.sendFile(__dirname + '/public/flags/256/' + countryCode + '.png')
})

app.get('/api/countries/FlagByCountryCode/:code/512', (req, res) => {
  const countryCode = req.params.code.toLowerCase()
  //res.set('Content-Type', 'application/octet-stream')
  //res.set('Content-Disposition', 'attachment;filename=' + countryCode + '.png')
  res.sendFile(__dirname + '/public/flags/512/' + countryCode + '.png')
})

app.get('/api/countries/FlagByCountryCode/:code/1024', (req, res) => {
  const countryCode = req.params.code.toLowerCase()
  //res.set('Content-Type', 'application/octet-stream')
  //res.set('Content-Disposition', 'attachment;filename=' + countryCode + '.png')
  res.sendFile(__dirname + '/public/flags/1024/' + countryCode + '.png')
})

app.get('/api/countries/FlagByCountryCode/:code/1920', (req, res) => {
  const countryCode = req.params.code.toLowerCase()
  //res.set('Content-Type', 'application/octet-stream')
  //res.set('Content-Disposition', 'attachment;filename=' + countryCode + '.png')
  res.sendFile(__dirname + '/public/flags/1920/' + countryCode + '.png')
})

app.get('/api/countries/FlagByCountryCode/:code/2560', (req, res) => {
  const countryCode = req.params.code.toLowerCase()
  //res.set('Content-Type', 'application/octet-stream')
  //res.set('Content-Disposition', 'attachment;filename=' + countryCode + '.png')
  res.sendFile(__dirname + '/public/flags/2560/' + countryCode + '.png')
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server running on port ${port}`))
