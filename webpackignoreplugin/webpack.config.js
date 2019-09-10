const path = require("path")
const htmlWebpackplugin= require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const webpack=require("webpack")

module.exports={
    entry:{
        index:'./src/index.js'
    },
    devServer:{
        open:true,
        hot:true
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name][hash:5].js'
    },
    module:{
        noParse:/jquery/,//不去解析jquery的依赖关系
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                include:path.resolve("src"),
                options:{
                    presets:[
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ]
                }
            }
        ]
    },
    plugins:[
        new htmlWebpackplugin({
            template:'./index.html',
            chunks:['index'],
            filename:'index.html'
        }),
        new webpack.IgnorePlugin(/\.\/locale/,/moment/),
        new CleanWebpackPlugin()
    ]
}