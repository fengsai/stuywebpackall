const path=require("path")
const htmlWebpackplugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

module.exports={
    mode:'development',
    entry:{
        home:'./index/home.js',
        about:'./index/about.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].[hash:8].js'
    },
    plugins:[
        new htmlWebpackplugin({
            template:'./index.html',
            filename:'home.html',
            chunks:['home'],
            minify:{
                minifyJS:true
            }
        }),
        new htmlWebpackplugin({
            template:'./index.html',
            filename:'about.html',
            chunks:['about']
        }),
        new CleanWebpackPlugin()
    ]
}