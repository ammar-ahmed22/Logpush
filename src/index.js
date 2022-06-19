import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).send({
        "message": "Hello World!"
    })
})

app.post("/logpush", (req, res) => {
    
    console.log(req.body)

    res.status(200).send({
        success: true,
        message: "data received"
    })


})

app.listen(process.env.PORT || 918, () => console.log("Server running on port 0918"))