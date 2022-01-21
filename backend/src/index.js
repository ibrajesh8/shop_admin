import express, { request } from 'express';

const app = express();
// set configuraton
const port = 8000; // Ideally should be in .env file or config file





//  Allow Cross origin resource sharing

app.all('*', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
});

// setting routes

app.get("/", (req, res) => {
    res.send("Server Working Fine !!");
});

app.get("/customers", (req, res) => {
    res.send("Sending Customers Data");
});

app.get("/add_customer", (req, res) => {
    res.send("Adding Customer");
})

app.get("/add_purchase", (req, res) => {
    res.send("Adding Purchase data");
})

app.get("/add_address", (req, res) => {
    res.send("Adding Address data");
})

app.get("/search_city", (req, res) => {
    res.send("Searching City");
})

app.listen(port).on("listening", () => {
    console.log(`server is running on port ${port}`);
});