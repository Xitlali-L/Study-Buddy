//importing express package
import express from 'express';

//never changing app
const app = express();

//port number, 3000 usually not taken
const port = 3000;

//http methods

app.use(express.static("public"));

app.get("/", (request, response) =>{
    response.sendFile("sketch.html", {root: "public"});
});

app.get("/play", (req, res) =>{
    res.sendFile("playground.html", {root: "public"});
});

//app.listen listens for our port number to start server
app.listen(port, () => {
    console.log(`Application listening at port ${port}`);
});