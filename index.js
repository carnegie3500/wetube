import express from "express";
import morgan from "morgan";
//helmet
import helmet from "helmet";
//logging
import cookieParser from "cookie-parser";
//cookie parser
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;

const handleListening = () =>
    console.log('Listening on: http://localhost:${PORT}');


const handleHome = (req, res, next) => res.send("hello 2from home");

const handleProfile = (req, res, next) => res.send("You are on my profile");

// const betweenHome = (req, res, next) => {
//     console.log('Between'); 
//     next();
// }; 
//- middleware
// app.get("/", betweenHome, handleHome);

// app.use(betweenHome);

// app.use(morgan("combined")); *ipchecking middle ware

//helmet >>security
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);