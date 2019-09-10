const {SyncHook} = require("tapable")

class Lesson{
    constructor(){
        this.hooks={
            arch:new SyncHook(['name'])
        }
    }

    tap(){//注册
        this.hooks.arch.tap('node',function(name){
            console.log('node',name)
        })
        this.hooks.arch.tap('react',function(name){
            console.log('react',name)
        })
    }

    start(){//启动
        this.hooks.arch.call('fs')
    }
}

let l = new Lesson()

l.tap()

l.start()