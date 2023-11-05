type ExecFnType = (...args: any[]) => void
function delayExecFn(fn : ExecFnType){
    setTimeout(() =>{
        fn("lmp","199")
    },1000)
}

delayExecFn((name,age)=>{
    console.log(name,age);
})
export {}