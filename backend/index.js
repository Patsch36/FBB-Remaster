require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
var qs = require('qs')
const axios = require('axios')

const APIURL = "https://api.openweathermap.org/data/2.5/weather";
const DETAILSURL = "https://api.openweathermap.org/data/2.5/onecall"

app.get('/', (req, res) => {

    let url = APIURL

    if(req.url.includes("lat"))
      url = DETAILSURL

    res.set('Access-Control-Allow-Origin', '*')

    let query = req.query
    query.APPID = process.env.APIkey
    let queryString = qs.stringify(query)

    axios(`${url}?${queryString}`)
      .then((response) => {
        res.send(response.data)
      })
})


app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})