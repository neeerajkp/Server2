const express = require("express")
const router = express.Router()

router.post("/login", (req, res) => {
    console.log(req.body)
    res.send("Login page")
})
router.post("/register", (req, res) => {
    console.log(req.body)
    res.send("Register page")
})
module.exports = router