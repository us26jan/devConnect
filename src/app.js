const express = require('express');
const app = express();

app.use("/hello", (req, res) => {
    res.send("USHA");
});

app.use("/", (req, res) => {
    res.send("Hello from the server");
});

app.listen(3000, () => {
    console.log("Server is listening")
});