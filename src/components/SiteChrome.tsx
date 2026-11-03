"use client";
import Link from "next/link";
const links = [["Learn","/lessons"],["Graphing Tool","/graph"],["AI Assistant","/assistant"],["Games","/games"]];
export function SiteNav() {
  return <header className="container"><nav className="nav">
    <Link href="/" className="brand"><span className="brand-mark">G</span>GraFix</Link>
    <div className="navlinks">{links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</div>
    <Link className="btn small" href="/graph">Start exploring ↗</Link>
  </nav></header>;
}
export function Footer() {
  return <footer className="footer"><div className="container footer-row">
    <div><div className="brand" style={{color:"white"}}><span className="brand-mark">G</span>GraFix</div><p style={{maxWidth:430,lineHeight:1.6,color:"#aebfd5"}}>Making graph transformations easier to see, explore, and understand.</p></div>
    <div><strong>Explore</strong><p><Link href="/lessons">Learning Materials</Link> · <Link href="/graph">Graphing Tool</Link> · <Link href="/assistant">AI Assistant</Link> · <Link href="/games">Games</Link></p></div>
    <small style={{alignSelf:"end",color:"#91a6c1"}}>© {new Date().getFullYear()} GraFix · Pre-Calculus learning platform</small>
  </div></footer>;
}
