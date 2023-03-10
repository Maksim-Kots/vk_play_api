const express = require("express");
const sqlite3 = require("sqlite3");
const bodyParser = require("body-parser");
const db = new sqlite3.Database('./db/steam.db')

var app = express();
app.use(bp.urlencoded());
app.use(bodyparser.json())


app.listen(8000, () => {
    console.log("Server is listenint on port " + 8000);
});

app.get('/', (req, res) =>{
    res.json('Молодец!')
})

app.get('/games', (req, res) => {
    db.all(`SELECT * FROM GAMES  WHERE price > $price`, {$price: 0}, (err, rows) => {
        res.json(rows)
    })

})

app.get('/developer', (req, res) => {
    db.all(`SELECT * FROM DEVELOPER`, (err, rows) => {
        res.json(rows)
    })

})

app.get('/category', (req, res) => {
    db.all(`SELECT * FROM CATEGORY`, (err, rows) => {
        res.json(rows)
    })

})

app.get('/genre', (req, res) => {
    db.all(`SELECT * FROM GENRE`, (err, rows) => {
        res.json(rows)
    })

})

app.get('/type', (req, res) => {
    db.all(`SELECT * FROM TYPE`, (err, rows) => {
        res.json(rows)
    })

})

app.get('/game_genre', (req, res) => {
    db.all(`SELECT * FROM GAME_GENRE`, (err, rows) => {
        res.json(rows)
    })

})

app.post('/games', (req, res)=> {
    const data = req.body
    const.request = `INSERT INTO GAMES VALUES(1, 2, 3, 4, 5, 6, 7, 8, 9)`
    db.run(request, [
        null, 
        "${data.name}", 
        "${data.developer}", 
        "${data.type}", 
        "${data.requirments}", 
        "${data.price}",
        "${data.category}", 
        "${data.genre}", 
        db.run(request, (err) => {
           if (err){
              res.json(err)
           }
     })
})

