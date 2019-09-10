const path =require("path");
const webpack = require("webpack")
const htmlwebpackplugins=require("html-webpack-plugin");
const {CleanWebpackPlugin}= require("clean-webpack-plugin");
const extractCssplugin = require("extract-text-webpack-plugin");
const miniCssExtract = require("mini-css-extract-plugin")
const optionzemincss=require("optimize-css-assets-webpack-plugin")//css压缩用这个必须配置uglifyjs-webpack-plugin
const uglifyjs=require("uglifyjs-webpack-plugin") //js压缩

/**
 * 1).expose-loader 暴露到Window上
 * 2）webpack.ProvidePlugin 给每个人提供一个模块
 * 3）引入不打包externals:{
        jquery:"$"
    }
*/

module.exports={
    optimization:{
        minimizer:[
            new optionzemincss(),
            new uglifyjs({
                cache:true,
                parallel:true,
                sourceMap:true
            })
        ]
    },
    mode:"development", //默认 production, 总共两种 production development
    entry:'./src/index.js',
    devServer:{
        open:true,
        progress:true,
        contentBase:"./dist",
        compress:true, //gzip压缩
        hot:true
    },
    output:{
        filename:'bundle.[hash:8].js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            // {
            //     test:/\.css$/,
            //     use:extractCssplugin.extract({
            //         fallback:[{
            //             loader:"style-loader",
            //             options:{
            //             }
            //         }],
            //         use:"css-loader"
            //     })
            // }
            {
                test:/\.html$/,
                use:'html-withimg-loader',
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:8900,
                            outputPath:'img'
                        }
                    }
                ]
            },
            {
                test:/\.css$/,
                use:[
                    miniCssExtract.loader,
                    "css-loader",
                    "postcss-loader"
                ]
            },
            // {语法检测
            //     test:/\.js$/,
            //     use:[
            //         {
            //             loader:"eslint-loader",
            //             options:{
            //                 enforce:'pre'
            //             }
            //         }  
            //     ],
            //     exclude:/node_modules/  
            // },
            {
                test:/\.js$/,
                use:[{
                    loader:"babel-loader"
                }],
                exclude:/node_modules/
            },
            // {
            //     test:require.resolve("jquery"),
            //     use:'expose-loader?$'
            // }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlwebpackplugins({
            template:'./index.html',
            minify:{
                removeAttributeQuotes:true,
                collapseInlineTagWhitespace:true,
                collapseWhitespace:true
            },
            hash:true

        }),
        new webpack.ProvidePlugin({
            $:'jquery'
        }),
        // new extractCssplugin("style.css"),
        new miniCssExtract({
            filename:'./css/stylef.css',
        }),
        new CleanWebpackPlugin()
    ],
    //不打包
    // externals:{
    //     jquery:"$"
    // }
}