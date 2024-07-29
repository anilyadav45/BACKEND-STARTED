const express = require("express");
const app = express(); //this app is object which hold all returns of express
// console.dir(app);
//Listening a request
let port = 8080;
app.listen(port, () => {
    console.log(`Server is listening on the port ${port}`);
})
//localhost:8080 try on web
//Sending a response 
// app.use((req, res) => {
//     console.log("request received ");

//     res.send({
//         name: "Anil",
//         age: 22,
//         weight: 68,
//         country: "Nepal"
//     });
//we can send only one response 
//or
// let code = "<h2>Fruits items</h2> <ul><li>Mangoes</li> <li>Apple</li> <li>Orange</li> <li>Grapes</li></ul>";
// res.send(code);
// })

//ROUTING :- it is proces of selecting path for specific network serch
app.get("/", (req, res) => {
    res.send(console.log("you're on home page write fruit name t o get info"));
})

app.get("/apple", (req, res) => {
    res.send({
        name: "Apple",
        color: "Red",
        rate: 180,
        vitamin: "C&B"
    })
})

app.get("/orange", (req, res) => {
    res.send({
        name: "Orange",
        color: "Red",
        rate: 180,
        vitamin: "C&B"
    })
})

app.post("/mango", (req, res) => {
    res.send({
        name: "Mango",
        color: "Red",
        rate: 180,
        vitamin: "C&B"
    })
})
//we can creare diff request POST GET ETC
// * path is used to select all remaining all path
app.get("*", (req, res) => {
    res.send(console.log("404 error ! Path doesn't exits"));
}) 