import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).send({
        "message": "Hello World!"
    })
})

app.post("/logpush", (req, res) => {
    
    console.log(req)


})

app.listen(918, () => console.log("Server running on port 0918"))