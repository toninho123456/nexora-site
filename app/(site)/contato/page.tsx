const ZAP = (process.env.NEXT_PUBLIC_WHATSAPP || '').replace(/\D/g, '')
import ContactForm from '@/components/ContactForm'
export const metadata = { title: 'Contato · Nexora Digital', description: 'Fale com a Nexora Digital.' }
export default function Contato() { return <main><h1 className="ouro">Contato</h1><p className="lead">Envie sua mensagem pelo formulário.</p><ContactForm/>{ZAP && <p style={{marginTop:24}}>Prefere falar direto? <a className="ouro" style={{textDecoration:'underline'}} href={`https://wa.me/${ZAP}`} target="_blank" rel="noopener noreferrer">Chame no WhatsApp</a></p>}</main> }
