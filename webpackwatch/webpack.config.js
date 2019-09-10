const path = require("path");

const htmlWebpackPlugin = require("html-webpack-plugin")

const {CleanWebpackPlugin} =require("clean-webpack-plugin")


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
        new CleanWebpackPlugin()
    ],
    watch: true,
    watchOptions:{
        poll:1000, //每秒问我1000次
        aggregateTimeout:500,  //防抖的作用
        ignored:/node_modules/
    }
}