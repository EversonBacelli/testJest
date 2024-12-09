const express = require('express')
const consign = require('consign')



const app = express()
consign({cwd: 'src', verbose:false})
    .include('./config/middleware.js')
    .include('./config/routes.js')
    .into(app)



app.get('/', (req, res) => {
    res.status(200).send();
})



module.exports = app;