import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const handleHome = (req, res) => {
    return res.end("here is handleHome");
}

const handleProtected = (req, res) => {
    return res.send("Welcome to the private lounge.")
}

app.get("/", logger, handleHome);


const handleListening = () =>
    console.log(`Server listenting on port http://localhost:${PORT} 🚀`)

app.listen(PORT, handleListening)