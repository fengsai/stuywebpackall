const path=require("path")

const htmlWebpackPlugin = require("html-webpack-plugin")

const {CleanWebpackPlugin} = require("clean-webpack-plugin")

const {DefinePlugin} =require("webpack")

module.exports={
    entry:{
        'index':'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name][hash:5].js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:"babel-loader",
                options:{
                    presets:["@babel/preset-env"]
                }
            },
            {
                test:/\.css$/,
                use:["style-loader",'css-loader']
            }
        ]
    },
    plugins:[
        new DefinePlugin({
            DEV:"'dev'"
        }),
        new htmlWebpackPlugin({
            template:"./index.html",
            filename:"index.html",
            chunks:["index"]
        }),
        new CleanWebpackPlugin()
    ],
    resolve:{//解析第三方包
        modules:[path.resolve("node_modules")],
        extensions:['.js','.css','.json'] //查找的扩展名
        // mainFields:['style','main'] package.json
        // alias:{//别名
        //     "bootstrap":'bootstrap/dist/css/bootstrap.css'
        // }
    }
}