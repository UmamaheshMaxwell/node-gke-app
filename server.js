import express from "express";
const app = express()

app.get("/", (req, res) => {
    res.json("Welcome to NodeApp deployed to GKE")
})

app.get("/user", (req, res)=> {
    res.json([{
        id: 1, name: "Scott Desatnick",
        id: 2, name: "Adam Colson",
        id: 3, name: "Tuan Bui",
    }])
})

const PORT = 8080

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`)
})

