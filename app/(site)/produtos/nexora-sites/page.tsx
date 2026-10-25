import Link from 'next/link'
import { IMG, SITES } from '@/lib/content'
import { Chk, Faq, Steps } from '@/components/Parts'
import ContactForm from '@/components/ContactForm'
export const metadata = { title: 'Nexora Sites · Nexora Digital', description: 'Seu negócio no digital, com mais resultados. Sites modernos, rápidos, responsivos e profissionais.' }
export default function Page() {
  return (<main>
    <section className="hero"><div><span className="tag">Nexora Sites</span><h1 className="ouro">Seu negócio no digital, com mais resultados.</h1><p className="lead">Criação de sites modernos, rápidos, responsivos e profissionais.</p>
      <div className="row"><Link className="btn p" href="#orcamento">Solicitar orçamento</Link></div></div><img className="logo" src={IMG.sites} alt="Site moderno exibido em notebook e celular"/></section>
    <section><h2 className="ouro">Funcionalidades e benefícios</h2><Chk items={SITES}/></section>
    <section><h2 className="ouro">Como contratar</h2><Steps items={['Solicite o orçamento pelo formulário.','Alinhamos escopo, conteúdo e prazos.','Desenvolvemos e validamos com você.','Publicação e acompanhamento.']}/></section>
    <section><h2 className="ouro">Perguntas frequentes</h2><Faq items={[['O site é responsivo?','Sim, o design responsivo faz parte da proposta.'],['Integra com outras ferramentas?','Possível conforme o projeto contratado; avaliamos caso a caso.'],['Como recebo o orçamento?','Envie o formulário e retornaremos o contato informado.']]}/></section>
    <section id="orcamento"><h2 className="ouro">Solicitar orçamento</h2><ContactForm produto="Nexora Sites" botao="Solicitar orçamento"/></section></main>)
}
