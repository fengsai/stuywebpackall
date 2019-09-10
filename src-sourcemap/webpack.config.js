const path = require("path");

const htmlWebpackPlugin = require("html-webpack-plugin")

const {CleanWebpackPlugin} =require("clean-webpack-plugin")

module.exports={
    entry:{
        index:'./src/index.js'
    },
    //source-map源码映射，直接生成一个source-map文件，特点大而全独立的
    // eval-source-map 可以生成行于列
    //cheap-module-source-map 不会产生行和列会生成文件
    //cheap-module-eval-source-map 不会产生长文件，集成在打包后的文件中不会产生列
    devtool:'cheap-module-eval-source-map',
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
    ]
}