import express from "express";

const app = express();

app.post("/logpush", (req, res) => {
    
    console.log(req)


})

app.listen(918, () => console.log("Server running on port 0918"))