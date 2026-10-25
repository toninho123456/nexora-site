'use client'
import { useState } from 'react'
import { supabaseBrowser } from '@/lib/supabase/client'
const PRODS = ['Nexora Sites','Nexora SmartTag','Informações gerais','Outro assunto']
export default function ContactForm({ produto = 'Informações gerais', smarttag = false, botao = 'Enviar' }: { produto?: string; smarttag?: boolean; botao?: string }) {
  const [errs, setErrs] = useState<Record<string,string>>({}); const [out, setOut] = useState<{ok:boolean;t:string}|null>(null); const [busy, setBusy] = useState(false)
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); const form = e.currentTarget; const f = new FormData(form); const g = (k: string) => String(f.get(k) ?? '').trim()
    if (g('site')) return                                 // honeypot
    const er: Record<string,string> = {}
    if (g('nome').length < 2) er.nome = 'Informe seu nome.'
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(g('email'))) er.email = 'E-mail inválido.'
    if (g('assunto').length < 2) er.assunto = 'Informe o assunto.'
    if (g('mensagem').length < 2) er.mensagem = 'Escreva sua mensagem.'
    if (smarttag && !(Number(g('quantidade')) >= 1)) er.quantidade = 'Informe 1 ou mais.'
    setErrs(er); if (Object.keys(er).length) { setOut({ ok: false, t: 'Revise os campos destacados.' }); return }
    setBusy(true)
    const { error } = await supabaseBrowser().from('contact_requests').insert({ nome: g('nome'), email: g('email'), empresa: g('empresa') || null, produto: g('produto'), assunto: g('assunto'), mensagem: g('mensagem'),
      extra: smarttag ? { quantidade: Number(g('quantidade')), personalizacao: g('personalizacao') || null } : null })
    setBusy(false)
    if (error) setOut({ ok: false, t: 'Não foi possível enviar agora. Tente novamente.' })
    else { form.reset(); setOut({ ok: true, t: 'Mensagem enviada com sucesso.' }) }
  }
  const F = ({ n, l, t = 'text', area = false }: { n: string; l: string; t?: string; area?: boolean }) => (<label>{l}{area ? <textarea name={n} rows={4}/> : <input name={n} type={t}/>}<span className="err">{errs[n]}</span></label>)
  return (<form onSubmit={submit} noValidate>
    <F n="nome" l="Nome"/><F n="email" l="E-mail" t="email"/><F n="empresa" l="Empresa (opcional)"/>
    <label>Produto de interesse<select name="produto" defaultValue={produto}>{PRODS.map(p => <option key={p}>{p}</option>)}</select></label>
    {smarttag && <><F n="quantidade" l="Quantidade desejada" t="number"/><F n="personalizacao" l="Necessidades de personalização" area/></>}
    <F n="assunto" l="Assunto"/><F n="mensagem" l="Mensagem" area/>
    <input name="site" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{position:'absolute',left:'-9999px'}}/>
    <button className="btn p" disabled={busy}>{busy ? 'Enviando…' : botao}</button>
    {out && <div className={'msg ' + (out.ok ? 'ok' : 'no')} role="status">{out.t}</div>}</form>)
}
