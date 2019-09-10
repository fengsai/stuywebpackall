const path = require("path");

const webpack=require("webpack")

const htmlWebpackPlugin = require("html-webpack-plugin")

const {CleanWebpackPlugin} =require("clean-webpack-plugin")

const copywebpackPlugin =require("copy-webpack-plugin")


/** 
 * webpack插件
 * 1)cleanWebpackPlugin
 * 2)copyWebpackPlugin
 * 3)bannerPlugin
*/
module.exports={
    entry:{
        index:'./src/index.js'
    },
    devServer:{
        hot:true,
        open:true
    },
    output:{
        path:path.resolve(__dirname,'dissrc'),
        filename:'[name][hash:8].js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                options:{
                    presets:["@babel/preset-env"]
                }
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            chunks:["index"],
            template:'./index.html',
            filename:"index.html"
        }),
        new copywebpackPlugin([
            {from:'./doc',to:'dissrc'}
        ]),

        new webpack.BannerPlugin("make 2019 by fs"),
        new CleanWebpackPlugin()
    ]
}