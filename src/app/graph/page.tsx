"use client";
import {useEffect,useMemo,useRef,useState} from "react";
import functionPlot from "function-plot";
import {compileFunction,equationText,parentFunctions} from "@/lib/transformations";
export default function GraphPage(){
 const plotRef=useRef<HTMLDivElement>(null);
 const [expr,setExpr]=useState("x^2"); const [a,setA]=useState(1); const [b,setB]=useState(1); const [h,setH]=useState(0); const [k,setK]=useState(0); const [showParent,setShowParent]=useState(true); const [error,setError]=useState("");
 const equation=useMemo(()=>equationText(expr,{a,b,h,k}),[expr,a,b,h,k]);
 useEffect(()=>{
  if(!plotRef.current)return;
  try{
   const base=compileFunction(expr);
   const data:any[]=[];
   if(showParent)data.push({fn:expr,color:"#9aa9bd",graphType:"polyline",attr:{ "stroke-dasharray":"5 5" }});
   const inner = expr.replace(/\bx\b/g, `((${b})*(x-(${h})))`);
data.push({fn:`(${a})*(${inner})+(${k})`,color:"#2563eb",graphType:"polyline"});plotRef.current.innerHTML="";
   functionPlot({target:plotRef.current,width:Math.max(300,plotRef.current.clientWidth),height:390, xAxis:{domain:[-10,10]},yAxis:{domain:[-10,10]},grid:true,disableZoom:false,data});
   setError("");
  }catch(e){setError(e instanceof Error?e.message:"Unable to plot this expression.");}
 },[expr,a,b,h,k,showParent]);
 const reset=()=>{setA(1);setB(1);setH(0);setK(0);};
 const slider=(label:string,val:number,set:(n:number)=>void,min=-5,max=5,step=.5)=><label className="field">{label}<div className="range-row"><input type="range" min={min} max={max} step={step} value={val} onChange={e=>set(Number(e.target.value))}/><input type="number" value={val} step={step} onChange={e=>set(Number(e.target.value)||0)}/></div></label>;
 return <main><div className="pagehead"><div className="container"><span className="eyebrow">Interactive workspace</span><h1>Graphing Tool</h1><p className="muted">Change the transformation values and watch the graph update.</p></div></div>
 <section className="section container"><div className="grid-two"><div className="panel"><div style={{display:"flex",justifyContent:"space-between",gap:12,alignItems:"center",flexWrap:"wrap"}}><h2 style={{margin:0}}>Coordinate plane</h2><label style={{fontSize:".86rem",color:"#52647e"}}><input type="checkbox" checked={showParent} onChange={e=>setShowParent(e.target.checked)}/> Show parent function</label></div><div ref={plotRef} className="plot" aria-label="Interactive graph plot"/>{error&&<p style={{color:"#b45309"}}>{error}</p>}<div className="eq">{equation}</div><p className="muted" style={{fontSize:".85rem"}}>Use your mouse or touchpad to zoom and pan the coordinate plane. Dashed gray curve: parent function. Blue curve: transformed function.</p></div>
 <div className="panel"><h2 style={{marginTop:0}}>Function & transformations</h2><label className="field">Parent function f(x)<input value={expr} onChange={e=>setExpr(e.target.value)} placeholder="e.g. x^2, sin(x), abs(x)"/></label><label className="field">Quick parent functions<select value={parentFunctions.some(p=>p.expr===expr)?expr:""} onChange={e=>setExpr(e.target.value)}><option value="">Choose a function</option>{parentFunctions.map(p=><option value={p.expr} key={p.expr}>{p.label}: {p.expr}</option>)}</select></label>
 {slider("a · Vertical scale / reflection",a,setA,-4,4,.25)}{slider("b · Horizontal scale / reflection",b,setB,-4,4,.25)}{slider("h · Horizontal shift",h,setH,-6,6,.5)}{slider("k · Vertical shift",k,setK,-6,6,.5)}
 <div className="eq" style={{margin:"14px 0"}}>y = a f(b(x − h)) + k</div><p className="muted" style={{fontSize:".88rem"}}><b>a</b>: vertical stretch/compression; negative a reflects across x-axis. <b>b</b>: horizontal scale is 1/|b|; negative b reflects across y-axis. <b>h</b>: horizontal shift. <b>k</b>: vertical shift.</p><button className="btn secondary" onClick={reset}>Reset transformations</button></div></div></section></main>;
}
