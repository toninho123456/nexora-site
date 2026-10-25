import Link from 'next/link'
import './site.css'
import { IMG } from '@/lib/content'
import { PORTAL_URL } from '@/lib/portal'
const NAV: [string,string][] = [['/','Início'],['/sobre','Sobre nós'],['/equipe','Nossa equipe'],['/produtos','Nossos produtos'],['/contato','Contato']]
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (<div className="site"><header><div className="bar">
    <Link className="brand" href="/"><img src={IMG.logo} alt="Logotipo oficial da Nexora Digital"/><span className="ouro">NEXORA</span></Link>
    <nav>{NAV.map(([h,l]) => <Link key={h} href={h}>{l}</Link>)}{PORTAL_URL && <a href={PORTAL_URL}>Portal interno</a>}</nav></div></header>
    {children}
    <footer><b className="ouro">Nexora Digital</b> · Soluções digitais para um amanhã mais forte.<br/>Fale conosco pela página <Link href="/contato" style={{textDecoration:'underline'}}>Contato</Link>.</footer></div>)
}
