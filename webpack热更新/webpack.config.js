const path = require("path")
const htmlWebpackplugin= require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const webpack=require("webpack")
//webpack自带的优化功能

module.exports={
    mode:'production',
    entry:{
        index:'./src/index.js'
    },
    devServer:{
        open:true,
        hot:true,
        contentBase:'./dist'
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
                use:[
                    {
                        loader:"babel-loader",
                        options:{
                            presets:[
                                "@babel/preset-env",
                                "@babel/preset-react"
                            ],
                            plugins:[
                                // "@babel/plugin-syntax-dynamic-import",
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new htmlWebpackplugin({
            template:'./index.html',
            chunks:['index'],
            filename:'index.html'
        }),
        new webpack.NamedModulesPlugin(),//打印更新的模块路径
        new webpack.HotModuleReplacementPlugin(),//
        new CleanWebpackPlugin()
    ]
}