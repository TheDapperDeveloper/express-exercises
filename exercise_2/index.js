const PORT = 3001
const express = require("express")
const app = express()

const es6Renderer = require("express-es6-template-engine");

app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

const cities = [
    {cityName: "Barcelona", continent: "Europe"},
    {cityName: "Amsterdam", continent: "Europe"},   
    {cityName: "Punta Cana", continent: "North America"},    
    {cityName: "Sydney", continent: "Australia"},    
    {cityName: "Portugal", continent: "Europe"},    
    {cityName: "Washington DC", continent: "North America"},    
    {cityName: "Miami", continent: "North America"},    
    {cityName: "Phuket", continent: "Asia"},    
    {cityName: "Bahia", continent: "South America"},    
    {cityName: "Paris", continent: "Europe"},    
];


// Write your routes between the ***

// ***
app.get("/", (req, res) => {
    res.send("Node and express are just lovely")
})

app.get("/cities", (req, res) => {
    res.render("home", {
        locals: {
         cities: cities
        },
    })
});

app.get("/error", (req, res) => {
    res.statusCode = 400
    res.send("This is an invalid route")
})

// ***

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})