import Link from 'next/link'
import { IMG, TAG } from '@/lib/content'
import { Chk, Faq, Steps } from '@/components/Parts'
import ContactForm from '@/components/ContactForm'
export const metadata = { title: 'Nexora SmartTag · Nexora Digital', description: 'Um toque. Uma avaliação. Mais confiança. Acesso a páginas de avaliação por NFC e QR Code.' }
export default function Page() {
  return (<main>
    <section className="hero"><div><span className="tag">Nexora SmartTag</span><h1 className="ouro">Um toque. Uma avaliação. Mais confiança.</h1><p className="lead">Acesso rápido a páginas de avaliação por NFC e QR Code.</p>
      <div className="row"><Link className="btn p" href="#pedido">Solicitar o meu</Link></div></div><img className="logo" src={IMG.tag} alt="Tag NFC dourada ao lado de smartphone com tela de avaliação"/></section>
    <section><h2 className="ouro">Benefícios</h2><Chk items={TAG}/></section>
    <section><h2 className="ouro">Como funciona</h2><Steps items={['O cliente aproxima o celular da tag (NFC) ou lê o QR Code.','O celular abre a página de avaliação configurada.','O cliente envia a avaliação pelo próprio celular.']}/></section>
    <section><h2 className="ouro">Compatibilidade e personalização</h2><p className="lead">A leitura por NFC depende de celular compatível com o recurso ativado; o QR Code funciona com a câmera da maioria dos aparelhos. A tag pode receber a identidade visual da sua marca.</p></section>
    <section><h2 className="ouro">Perguntas frequentes</h2><Faq items={[['Todo celular lê NFC?','Não. Dispositivos sem NFC usam o QR Code.'],['Posso usar minha marca?','Sim, informe suas necessidades de personalização no formulário.']]}/></section>
    <section id="pedido"><h2 className="ouro">Solicitar o meu</h2><ContactForm produto="Nexora SmartTag" smarttag botao="Solicitar o meu"/></section></main>)
}
