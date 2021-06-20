const express = require('express')
const {logger} = require('./logger')
const app = express()

app.get('/', function (req, res) {
    const errorState =  Math.round(Math.random() * 100) > 20 ? 0 : 1
    const delay = Math.round(Math.random() * 100);
    if (errorState) {
        msg = 'RSAP0010E: Severe problem detected'
        logger.error(msg, {delay: delay})
        res.json({msg, delay: delay})
    } else {
        msg = 'RSAP0001I: Transaction OK'
        logger.info(msg, {delay: delay})
        res.json({msg, delay: delay})
    }
})

app.listen(3000, () => {
    console.log('Start on port 3000')
})