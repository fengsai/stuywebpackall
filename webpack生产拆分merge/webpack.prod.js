const path=require("path")

const htmlWebpackPlugin = require("html-webpack-plugin")

const {CleanWebpackPlugin} = require("clean-webpack-plugin")

const {DefinePlugin} =require("webpack")

const {smart} =require("webpack-merge")//区分环境的插件

const base=require("./webpack.base.js")


module.exports=smart(base,{
    mode:"production",
})