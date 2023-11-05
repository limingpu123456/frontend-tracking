let foo : unknown = "aaa"
foo = 123
if(typeof foo === "string"){//类型缩小
    console.log(foo.length)
}else if(typeof foo === "number"){
    console.log(foo);
}

export {}