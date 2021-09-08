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

const myMovies = [
    {movieName: "Skyfall", poster: "https://www.jamesbondlifestyle.com/sites/default/files/ckeditor/images/news/120809-james-bond-daniel-craig-skyfall.jpg"},
    {movieName: "Live Free or Die Hard", poster:"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/b197904bb75a1c3c9f55046083a94fa4_e88d5bb0-e1b7-4209-9f71-fb579f6c4461.jpg?v=1573651510"},
    {movieName: "Free Solo", poster:"https://m.media-amazon.com/images/I/71jKZtjsgOL._AC_SY679_.jpg"},
    {movieName: "Black Panther", poster:"https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg"},
    {movieName: "Inside Out", poster:"https://target.scene7.com/is/image/Target/GUEST_47c335e5-6055-453c-99c9-d7f8d56fd227?wid=488&hei=488&fmt=pjpeg"}
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

app.get("/info", (req, res) => {
    res.send("{name: Brande, city: Atlanta, state: GA}")
})

app.get("/movies", (req, res) => {
    res.render("movies", {
        locals: {
            myMovies: myMovies
        },
    })
});

// ***

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})