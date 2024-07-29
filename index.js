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
// app.get("/", (req, res) => {
//     res.send(console.log("you're on home page write fruit name t o get info"));
// })

// app.get("/apple", (req, res) => {
//     res.send({
//         name: "Apple",
//         color: "Red",
//         rate: 180,
//         vitamin: "C&B"
//     })
// })

// app.get("/orange", (req, res) => {
//     res.send({
//         name: "Orange",
//         color: "Red",
//         rate: 180,
//         vitamin: "C&B"
//     })
// })

// app.post("/mango", (req, res) => {
//     res.send({
//         name: "Mango",
//         color: "Red",
//         rate: 180,
//         vitamin: "C&B"
//     })
// })
//we can creare diff request POST GET ETC
// * path is used to select all remaining all path
// app.get("*", (req, res) => {
//     res.send(console.log("404 error ! Path doesn't exits "));
// }) 

//While doing any changes in response we have to again restart the whole server from starting so We have to install nodemon
//installing nodemon globally so that we can use in all project
//npm install -g nodemon

//here we are making indivisual path for response of request but let think of about instagram id's will they have also made billions of path responses for indivisual id the answer is NO 
//so let's talk about path parameter by using "req.params" we get request username ids etc 

// app.get("/:username/:pin", (req, res) => {
//     let { username, address } = req.params;
//     console.log(req.params);
//     let strResponse = `<h2>Welcome to @${username} page .</h2>`;
//     res.send(strResponse);
// })
// //if there is missing some var path
// app.get("*",(req,res)=>{
//     StrRes = `<h2>404 page not found !</h2>`;
//     res.send(StrRes);
// })

//let create responses for query string request 

app.get("/search",(req,res)=>{
    let  {q} = req.query; //it hold what we search '?q = value'
    if(!q){
        res.send(`You haven't searched anything`);
    }
    res.send(`<h2>You have searched for ${q}</h2>`); 
}) //http://localhost:8080/search?q=Amazon this is how we request 'Amazon' is querysting