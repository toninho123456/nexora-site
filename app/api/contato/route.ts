import { NextResponse } from 'next/server'
// Envia o pedido de contato por e-mail (Resend). Se as variáveis não existirem, apenas ignora: o pedido já foi salvo no Supabase.
const cut = (v: unknown, n: number) => String(v ?? '').trim().slice(0, n)
export async function POST(req: Request) {
  const key = process.env.RESEND_API_KEY, to = process.env.CONTACT_EMAIL
  if (!key || !to) return NextResponse.json({ ok: true, enviado: false })
  let b: any; try { b = await req.json() } catch { return NextResponse.json({ ok: false }, { status: 400 }) }
  const nome = cut(b.nome, 120), email = cut(b.email, 200)
  if (nome.length < 2 || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return NextResponse.json({ ok: false }, { status: 400 })
  const linhas = [`Nome: ${nome}`, `E-mail: ${email}`, `Empresa: ${cut(b.empresa, 120) || '-'}`, `Produto: ${cut(b.produto, 60)}`, `Assunto: ${cut(b.assunto, 200)}`,
    b.extra?.quantidade ? `Quantidade (SmartTag): ${Number(b.extra.quantidade) || '-'}` : '', b.extra?.personalizacao ? `Personalização: ${cut(b.extra.personalizacao, 500)}` : '',
    '', 'Mensagem:', cut(b.mensagem, 5000)].filter((l, i, a) => l !== '' || a[i - 1] !== '')
  const r = await fetch('https://api.resend.com/emails', { method: 'POST', headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: process.env.CONTACT_FROM || 'Site Nexora <onboarding@resend.dev>', to: [to], reply_to: email, subject: `Novo contato pelo site: ${cut(b.assunto, 80)}`, text: linhas.join('\n') }) })
  return NextResponse.json({ ok: r.ok, enviado: r.ok })
}
