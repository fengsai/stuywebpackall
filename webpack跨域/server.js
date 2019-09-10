const express = require("express")

const app = express()

const webpack=require("webpack")
const webpackmiddle=require("webpack-dev-middleware");

let config= require("./webpack.config.js");

let comlier=webpack(config)

app.use(webpackmiddle(comlier))

app.get('/user',(req,res)=>{
    res.json({
        code:200,
        msg:"你好111"
    })
})

app.listen(3000)