import Link from 'next/link'
import { IMG } from '@/lib/content'
export const Chk = ({ items }: { items: string[] }) => <ul className="chk">{items.map(i => <li key={i}>{i}</li>)}</ul>
export const Faq = ({ items }: { items: [string,string][] }) => <>{items.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</>
export const Steps = ({ items }: { items: string[] }) => <div className="steps">{items.map(i => <div key={i}>{i}</div>)}</div>
export const ProdCards = () => (<div className="grid">
  <article className="card"><img src={IMG.sites} alt="Ilustração de site moderno exibido em notebook e celular"/><span className="tag">Produto 1</span><h3 className="ouro">Nexora Sites</h3><p>Seu negócio no digital, com mais resultados.</p><div className="row"><Link className="btn p" href="/produtos/nexora-sites">Conhecer</Link></div></article>
  <article className="card"><img src={IMG.tag} alt="Ilustração de tag NFC dourada ao lado de smartphone com tela de avaliação"/><span className="tag">Produto 2</span><h3 className="ouro">Nexora SmartTag</h3><p>Um toque. Uma avaliação. Mais confiança.</p><div className="row"><Link className="btn p" href="/produtos/nexora-smarttag">Conhecer</Link></div></article></div>)
