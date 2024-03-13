const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.get('/test', (req, res) => {
    res.send('you went to test');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})