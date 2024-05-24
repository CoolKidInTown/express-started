const path = require('path');

const express = require('express');
// const { stat } = require('fs');

const app = express();

const PORT = 5000;

// absolute path must be given
// console.log(__dirname); module wrapper


const staticPath = path.join(__dirname, "../Express_Practice/public");

console.log(staticPath);

// builtin middleware
app.use(express.static(staticPath));

app.get("/", (rej, res) => {
    res.send("welcome");
})

app.get("/serve", (req, res) => {
    console.log("serve page");
    res.send("serve some files");
})

app.listen(PORT, () => {
    console.log("listened", PORT);
})

