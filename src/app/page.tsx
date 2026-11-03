import Link from "next/link";
const features = [
 ["⌁","Interactive Graphing","Explore parent functions and see how each transformation changes a graph.","/graph"],
 ["▤","Learning Materials","Build your understanding through six clear, guided lessons.","/lessons"],
 ["✦","AI Learning Assistant","Ask questions and get step-by-step help when AI is configured.","/assistant"],
 ["♜","Educational Games","Practice identifying and matching transformations through play.","/games"]
];
export default function Home() {
 return <main>
  <section className="hero"><div className="container hero-grid"><div>
   <span className="eyebrow">A clearer way to see mathematics</span>
   <h1>Make every graph transformation <span style={{color:"#2563eb"}}>click.</span></h1>
   <p>GraFix helps Pre-Calculus students understand graph transformations through visual exploration, guided lessons, an AI learning assistant, and interactive games.</p>
   <div style={{display:"flex",gap:12,flexWrap:"wrap",marginTop:25}}><Link className="btn" href="/graph">Open graphing tool →</Link><Link className="btn secondary" href="/lessons">Explore lessons</Link></div>
  </div><div className="hero-art"><div className="eyebrow" style={{color:"#8ec5ff"}}>Transformation preview</div><div style={{fontSize:"1.25rem",fontWeight:800,marginTop:12}}>y = a f(b(x − h)) + k</div>
   <svg viewBox="0 0 440 190" role="img" aria-label="Illustrative coordinate plane with transformed curves" style={{width:"100%",marginTop:20}}><g stroke="#ffffff25" strokeWidth="1">{Array.from({length:9},(_,i)=><line key={i} x1={i*55} x2={i*55} y1="0" y2="190"/>)}{Array.from({length:5},(_,i)=><line key={i} x1="0" x2="440" y1={i*47} y2={i*47}/>)}</g><path d="M0 20 Q220 340 440 20" fill="none" stroke="#72b5ff" strokeWidth="4"/><path d="M0 120 Q220 -100 440 120" fill="none" stroke="#f6c66a" strokeWidth="4"/><path d="M0 160 Q220 0 440 160" fill="none" stroke="#70dfba" strokeWidth="3"/></svg>
   <div className="mini-grid"><span>Translate</span><span>Reflect</span><span>Stretch</span></div>
  </div></div></section>
  <section className="section container"><div className="section-head"><span className="eyebrow">Everything in one place</span><h2>Learn it. Graph it. Practice it.</h2><p className="muted">Four connected components designed to make abstract mathematical ideas easier to understand.</p></div>
   <div className="cards">{features.map(([icon,title,desc,href])=><Link className="card" href={href} key={title}><div className="card-icon">{icon}</div><h3>{title}</h3><p>{desc}</p><span className="textlink" style={{color:"#2563eb",fontWeight:750,fontSize:".9rem"}}>Explore →</span></Link>)}</div>
  </section>
  <section className="section" style={{background:"#edf5ff"}}><div className="container" style={{display:"flex",justifyContent:"space-between",gap:25,alignItems:"center",flexWrap:"wrap"}}><div><span className="eyebrow">Start exploring</span><h2 style={{fontSize:"2rem",margin:"8px 0"}}>See what changing a value can do.</h2><p className="muted">Adjust a, b, h, and k and watch your graph respond.</p></div><Link className="btn" href="/graph">Try GraFix now →</Link></div></section>
 </main>;
}
