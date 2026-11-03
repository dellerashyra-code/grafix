"use client";
import {useEffect,useRef} from "react";
import functionPlot from "function-plot";
const examples=[
 [{fn:"x^2",color:"#9aa9bd"},{fn:"(x-2)^2+3",color:"#2563eb"}],
 [{fn:"x^2",color:"#2563eb"},{fn:"abs(x)",color:"#16a085"},{fn:"x^3",color:"#e49b32"}],
 [{fn:"x^2",color:"#9aa9bd"},{fn:"(x-2)^2+3",color:"#2563eb"}],
 [{fn:"x^2",color:"#9aa9bd"},{fn:"-x^2",color:"#2563eb"},{fn:"(-x)^2",color:"#16a085"}],
 [{fn:"x^2",color:"#9aa9bd"},{fn:"(2*x)^2",color:"#2563eb"},{fn:"(0.5*x)^2",color:"#16a085"}],
 [{fn:"x^2",color:"#9aa9bd"},{fn:"3*x^2",color:"#2563eb"},{fn:"0.4*x^2",color:"#16a085"}]
];
export default function LessonPlot({lesson}:{lesson:number}){
 const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{if(!ref.current)return;ref.current.innerHTML="";functionPlot({target:ref.current,width:Math.max(280,ref.current.clientWidth),height:260,grid:true,xAxis:{domain:[-5,5]},yAxis:{domain:[-5,10]},data:examples[lesson-1]});},[lesson]);
 return <div ref={ref} className="plot" aria-label={`Graph illustration for lesson ${lesson}`} style={{minHeight:260}}/>;
}
