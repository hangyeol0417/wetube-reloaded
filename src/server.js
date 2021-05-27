import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

const home = (req, res) => {
    console.log("home")
    return res.end("hello");
};

const login = (req, res, next) => {
    return res.end("login");
};

app.use(logger)
app.get("/", home);
app.get("/login", login);

const handleListening = () =>
    console.log(`Server listenting on port http://localhost:${PORT} 🚀`)

app.listen(PORT, handleListening)