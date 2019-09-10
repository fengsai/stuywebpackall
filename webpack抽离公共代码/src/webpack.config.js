const path = require("path")
const htmlWebpackplugin= require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const webpack=require("webpack")
//webpack自带的优化功能

module.exports={
    mode:'production',
    optimization:{ //老版本的commonChunkPlugins的改版
        splitChunks:{//分割代码块
            cacheGroups:{//缓存组
                common:{//公共的模块
                    minSize:0,
                    minChunks:2,
                    chunks:'initial'
                },
                vendor:{//第三方抽离
                    priority:1,//权重
                    test:/node_modules/,
                    chunks:'initial',
                    minSize:0,
                    minChunks:2
                }
            }
        }
    },
    entry:{
        index:'./src/index.js',
        other:"./src/other.js"
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
            }
        ]
    },
    plugins:[
        new htmlWebpackplugin({
            template:'./index.html',
            chunks:['index'],
            filename:'index.html'
        }),
        new CleanWebpackPlugin()
    ]
}