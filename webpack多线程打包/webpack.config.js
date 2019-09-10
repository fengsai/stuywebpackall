const path = require("path")
const htmlWebpackplugin= require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const webpack=require("webpack")
const happypack = require("happypack") //多线程打包

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
                exclude:/node_modules/,
                include:path.resolve("src"),
                use:"happypack/loader?id=js"
            }
        ]
    },
    plugins:[
        // new webpack.DllReferencePlugin({
        //     manifest:path.resolve(__dirname,'dist','manifest.json')
        // }),
        new happypack({
            id:'js',
            use:[
                {
                    loader:"babel-loader",
                    options:{
                        presets:[
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            ]
        }),
        new htmlWebpackplugin({
            template:'./index.html',
            chunks:['index'],
            filename:'index.html'
        }),
        new CleanWebpackPlugin()
    ]
}