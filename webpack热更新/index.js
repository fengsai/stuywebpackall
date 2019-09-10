import fss from "./source"

console.log(fss)

if(module.hot)
{
    module.hot.accept("./source.js",()=>{
        console.log("文件更新了")
        let str=require("./source.js")
        console.log(str)
    })
}