const express = require('express');
const router = require("./src/routes/route-list.js");
const app = new express();



const cors = require('cors')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const hpp = require('hpp')
const rateLimit = require('express-rate-limit')



const limiter = rateLimit({
    windowMS: 15 * 60 * 1000,
    max: 100
})


app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())
app.use(limiter)




app.use("/api/v1", router);

// undefined route handle
app.use('*', (req, res) =>{

    res.status(404)
    .json({status: "failed", data: "Not Found!"})

});


module.exports = app;