import { DEPS } from '@/lib/content'
export const metadata = { title: 'Nossa equipe · Nexora Digital', description: 'Estrutura organizacional da Nexora Digital.' }
export default function Equipe() {
  return (<main><h1 className="ouro">Nossa equipe</h1><p className="lead">Estrutura organizacional da Nexora Digital.</p>
    <div className="grid">{DEPS.map(d => <article className="card" key={d.nome}><img src={d.img} alt={'Imagem ilustrativa do departamento ' + d.nome}/><div style={{fontSize:'1.6rem'}}>{d.icon}</div><h3>{d.nome}</h3><p>{d.desc}</p>
      <p className="note">Responsável: exibido após cadastro autorizado no portal.</p></article>)}</div></main>)
}
