const sqlite3 = require('sqlite3');
const express = require("express");
const cors = require('cors');
const app = express();
const config = require('config');
const path = require('path');


const dbConfig = config.get('db');
const isDev = process.env.NODE_ENV === 'development' ;


if (config.has("enableCors") && config.get("enableCors")) {
    app.use(cors());
}

const HTTP_PORT = process.env.PORT || 8000;
const NFT_VOTES_TARGET = process.env.NFT_VOTES_TARGET || 500;

app.listen(HTTP_PORT, () => {
    console.log("Server is listening on port " + HTTP_PORT);
});

const db = new sqlite3.Database(dbConfig.path, (err) => {
    if (err) {
        console.error("Error opening database " + err.message);
    }
});

const buildPath = path.join(__dirname, "../../lobster-app/build");
app.use(express.static(buildPath))
// SPA
app.get("/", (req, res) => res.sendFile(path.join(buildPath, "index.html")));

// API
app.get("/voting-status", (req,res,next)=> {
    db.all("select * from lobster order by id desc limit 1", [], (err, rows) => {
        if (err) {
            res.status(503).json({err});
        } else if (!rows.length) {
            res.status(404).json({err: "no data available"});
        } else {
            const row = rows[0];
            res.status(200).json({progressPct: 100*(row.lobster_votes / NFT_VOTES_TARGET), ratioDisplay: `${row.lobster_votes}/${NFT_VOTES_TARGET}`});
        }
    })
    
})