const express = require("express")
const app = express()
app.use(express.json())
// app.get("/",(req,res)=>{ 
//     res.send("ok")
// })
// app.get("/login",(req,res)=>{
//     res.send("ook")
// })
// app.post("/",(req,res)=>{
//     res.send(req.body)
//     console.log(req.body)
// })
const AuthRoute = require("./routes/auth")
app.use("/auth", AuthRoute)

const homeRoute = require("./routes/home")
app.use("/", homeRoute)


app.listen(8000, () => {
    console.log("Server listening at 8000");
})