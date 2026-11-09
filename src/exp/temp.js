import express from "express";

const app = express();

app.get("/", (req,res) => {
    res.send("hello ketan ");
});

app.post("/user", (req, res) => {
    res.send("user recieved");
});

app.listen(8000, () => {
   console.log("server is running on port 8k"); 
});  