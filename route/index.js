const express = require('express')
const router = express.Router()
const authRouter = require('./route.authentication')
const adminRouter = require('./route.admin')
const userRouter = require('./route.user')

router.use("/auth",authRouter)
router.use("/admin",adminRouter)
router.use("/user",userRouter)

module.exports = router