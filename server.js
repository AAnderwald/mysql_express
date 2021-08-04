import express, { response } from "express";
import morgan from "morgan";
import apiRouter from "./routes";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/api", apiRouter);                                                                //if it doesn't match these routes in the index.js it will come back to ther server.js it continue done the line here

app.use((error, request, response, next) =>
{
    response
    .status(error.statusCode || 500)
    .json({name: error.name, message: error.message || "Server error." });
});

app.listen(3000, () => console.log ("Server is listening on port 3000 . . ."));

