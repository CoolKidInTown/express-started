const express = require('express');

const path = require('path');

const app = express();

const PORT = 5000; // 0-1024 are pre occupied by local machine(self)

// builtin middleware => static : absolute path (to the index.html file as that interacts with the server)

/* 
Middleware is a request handler that allows you to intercept and manipulate
requests and responses before they reach route handlers. Thats why the routes
below are not shown implicitely but our static served to server is as it by default takes "/" route
*/

/*
The path.join() method joins all given path segments together using the platform-specific 
separator as a delimiter, then normalizes the resulting path.
*/

console.log(path.join(__dirname, "../Express_Practice/public2")); // curr root folder

const staticPath = path.join(__dirname, "../Express_Practice/public2");

app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.send("hello from express server");
})

app.listen(PORT, () => {
    console.log(`listening at ${PORT}`);
})


// D:\DSA + DEV\WEB_DEV+DSA\JS_Mini_Projects\Quiz with Timer\quizTImer_index.html