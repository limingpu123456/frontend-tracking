//接口声明，对象适用 
interface PointType2 {
  x:number
  y:number
}
interface PointType2 {
  z?:number
}

interface IPerson{
  name:string
  age:number
}
interface IKun extends IPerson {
  kaohao:string
}

export {}