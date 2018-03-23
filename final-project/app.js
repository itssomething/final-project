const express = require('express');
const config = require('./config.json');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "tuananh123",
    database: "englandDB"
});

con.connect(function (err) {
    if (err) throw err;
    console.log('database connected!');
});
app.use(cors());
app.get('/', (req, res) => {

    con.query("SELECT * FROM collections", function (err, result, fields) {
        if (err) throw err;
        res.json({ colList: result });
    });

});

app.get('/collections/:id', (req, res) => {

    con.query(`SELECT * FROM questions where collection = ${req.params.id}`, function (err, result, fields) {
        if (err) throw err;
        var allQuest = [];
        var insertWord = {questions: []};
        var completePara = {questions: []};
        var shortRead = {questions: []};
        var longRead = {questions: []};
        for (var i = 0; i < result.length; i++) {
            if(result[i].questType == "insertWord") {
                insertWord.questions.push(result[i]);
            }
            if(result[i].questType == "completePara") {
                completePara.questions.push(result[i]);
            }
            if(result[i].questType == "shortRead") {
                shortRead.questions.push(result[i]);
            }
            if(result[i].questType == "longRead") {
                longRead.questions.push(result[i]);
            }
        }
        allQuest.push(insertWord);
        allQuest.push(completePara);
        allQuest.push(shortRead);
        allQuest.push(longRead);
        res.json({pages: allQuest});
    });

});







app.use(express.static('./public'));

app.listen(config.port, (err) => {
    console.log(err);
    console.log(`App is listening at port  ${config.port}`);
});
