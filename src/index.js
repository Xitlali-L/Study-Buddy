//importing express package
import express from 'express';

//never changing app
const app = express();

//port number, 3000 usually not taken
const port = 3000;

//http methods

app.get("/", (request, response) =>{
    response.send("Hello, World!");
});


//app.listen listens for our port number to start server
app.listen(port, () => {
    console.log(`Application listening at port ${port}`);
});