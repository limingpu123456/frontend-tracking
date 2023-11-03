type PointType = {
    x:number,
    y:number,
    z?:number
}
function printCorrdinate(point : PointType){
    console.log("x坐标",point.x);
    console.log("y坐标",point.y);
}
printCorrdinate({x:20,y:39}); 