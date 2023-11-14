//类型别名
type MyNumber = number
const age :MyNumber = 19

//给ID的类型起别名
type IDType = number | string

function printID(id:IDType){
  console.log(id);
}

//打印坐标
// type PointType = { x:number; y:number; z?:number}
function printCoordinate(point : PointType){

}