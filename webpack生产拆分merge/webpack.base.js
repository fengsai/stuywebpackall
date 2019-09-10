
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
        new htmlWebpackPlugin({
            template:"./index.html",
            filename:"index.html",
            chunks:["index"]
        }),
        new CleanWebpackPlugin()
    ],
    
}