import Link from 'next/link'
import { IMG } from '@/lib/content'
import { PORTAL_URL } from '@/lib/portal'
import { ProdCards } from '@/components/Parts'
export const metadata = { title: 'Nexora Digital', description: 'Transformando ideias em soluções digitais inteligentes. Nexora Sites e Nexora SmartTag.' }
export default function Home() {
  return (<main>
    <section className="hero"><div><span className="tag">Nexora Digital</span><h1 className="ouro">Transformando ideias em soluções digitais inteligentes.</h1><p className="slogan">Soluções digitais para um amanhã mais forte.</p>
      <p className="lead">A Nexora Digital desenvolve soluções tecnológicas para fortalecer negócios, melhorar experiências digitais e impulsionar resultados.</p>
      <div className="row"><Link className="btn p" href="/produtos">Conheça nossos produtos</Link><Link className="btn s" href="/contato">Entre em contato</Link></div></div>
      <img className="logo" src={IMG.logoFull} alt="Logotipo oficial da Nexora Digital: símbolo N dourado e slogan"/></section>
    <section><h2 className="ouro">Nossos produtos</h2><ProdCards/></section>
    <section><h2 className="ouro">Diferenciais</h2><div className="grid">{[['💡','Inovação','Tecnologia aplicada a problemas reais do negócio.'],['🤝','Compromisso','Acompanhamento próximo em cada projeto.'],['✅','Qualidade','Soluções estáveis, responsivas e bem acabadas.']].map(([i,t,d]) => <div className="card" key={t}><div style={{fontSize:'1.6rem'}}>{i}</div><h3>{t}</h3><p>{d}</p></div>)}</div></section>
    <section className="grid"><div className="card"><h3 className="ouro">Missão</h3><p>Fortalecer negócios com soluções digitais inteligentes, acessíveis e confiáveis.</p></div><div className="card"><h3 className="ouro">Visão</h3><p>Ser referência em soluções digitais que constroem um amanhã mais forte.</p></div><div className="card"><h3 className="ouro">Valores</h3><p>Inovação, compromisso, ética, colaboração, qualidade e resultados sustentáveis.</p></div></section>
    <div className="row"><Link className="btn s" href="/equipe">Conheça nossa equipe</Link>{PORTAL_URL && <a className="btn s" href={PORTAL_URL}>Acessar o portal interno</a>}</div></main>)
}
