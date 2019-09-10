class SyncHook{

    constructor(arr){
        this.task=[];
    }
    call(...args){
        this.task.forEach(item=>{
            item(...args)
        })
    }
    tap(name,callback){
        this.task.push(callback)
    }
    
}