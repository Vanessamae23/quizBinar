const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const path = require('path')
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))



app.get('/', (req, res) => {
    res.render('home')
})

app.get('/product', (req, res, next) => {
    res.render('product')
})


app.listen(3000, () => {
    console.log('listening on port 3000')
})