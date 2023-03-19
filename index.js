const express = require('express')
const app = express()

const port = process.env.PORT || 5000;
const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
    res.send('Running codecademy-Server')
})
app.get('/courses', (req, res) => {
    res.send('Running codecademy-Server')
})

app.listen(port, () => {
    console.log('running on port', port);
})

