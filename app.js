const express = require('express');
const app = express();
const PORT = process.env.PORT || 5674;
const showData = [
    { name: "Vishal", role: "admin", occupation: "Software Engineer" },
    { name: "Sunil", role: "sub-admin", occupation: "Software Tester" }
]

app.get('/', (req, res) => {
    res.status(200).send("Welcome to node js app deployment over the EC2 instances...");
    console.log("home page accessed...");
    res.end();

})



app.get('/products', (req, res) => {
    res.status(200).send({
        status: true,
        data: showData
    });
    console.log("products page accessed...");
    res.end();

})

app.get('/vishal', (req, res) => {
    res.status(200).send("Vishal is getting accessed...");
    console.log("vishal page accessed...")
    res.end();

})


// This route will handle all the requests that are 
// not handled by any other route handler. In 
// this handler we will redirect the user to 
// an error page with NOT FOUND message and status
// code as 404 (HTTP status code for NOT found)
app.all('*', (req, res) => {
    res.status(404).send('<h1>404! Page not found</h1>');
});


app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
})