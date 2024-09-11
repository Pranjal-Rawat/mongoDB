const mongoose =require("mongoose");

function DbConnection(){
    const DB_URL =  "mongodb+srv://pranjalr842:7danT1nYbXsNhzgu@cluster0.rvgheln.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    mongoose.connect(DB_URL);
    const db=mongoose.connection;
    db.on("error", console.error.bind(console, "Connection Error"));
    db.once("open", function(){
        console.log("DB connected!")
    })
}
module.exports=DbConnection;