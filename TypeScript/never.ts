function foo() :never { 
//   while(true){
//     console.log("111");
//   }
throw new Error("foo");
}
foo()