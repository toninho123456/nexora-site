import { NextResponse } from 'next/server'

const cut = (v: unknown, n: number) => String(v ?? '').trim().slice(0, n)

export async function POST(req: Request) {
  let b: any
  try { b = await req.json() } catch { return NextResponse.json({ ok: false }, { status: 400 }) }

  const nome = cut(b.nome, 120)
  const email = cut(b.email, 200)
  if (nome.length < 2 || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ ok: false }, { status: 400 })
  }

  const empresa = cut(b.empresa, 120)
  const produto = cut(b.produto ?? b.produto_interesse, 120)
  const assunto = cut(b.assunto, 200)
  const mensagem = cut(b.mensagem, 1500)
  const qtd = b.extra?.quantidade ? Number(b.extra.quantidade) || '' : ''

  let enviado = false
  const hook = process.env.DISCORD_WEBHOOK_URL
  if (hook) {
    const campos = [
      { name: 'Nome', value: nome, inline: true },
      { name: 'E-mail', value: email, inline: true },
      empresa && { name: 'Empresa', value: empresa, inline: true },
      produto && { name: 'Produto', value: produto, inline: true },
      qtd !== '' && { name: 'Quantidade (SmartTag)', value: String(qtd), inline: true },
      assunto && { name: 'Assunto', value: assunto },
      mensagem && { name: 'Mensagem', value: mensagem },
    ].filter(Boolean)
    try {
      const r = await fetch(hook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: 'Site Nexora',
          embeds: [{ title: 'Novo pedido de contato', color: 0xf5b301, fields: campos }],
        }),
      })
      enviado = r.ok
    } catch {}
  }

  const key = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_EMAIL
  if (key && to) {
    try {
      const linhas = [
        `Nome: ${nome}`, `E-mail: ${email}`,
        empresa && `Empresa: ${empresa}`,
        produto && `Produto: ${produto}`,
        assunto && `Assunto: ${assunto}`,
        '', 'Mensagem:', mensagem,
      ].filter((l) => l !== false && l !== undefined)
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM || 'Site Nexora <onboarding@resend.dev>',
          to: [to],
          reply_to: email,
          subject: `Novo contato: ${assunto || nome}`,
          text: linhas.join('\n'),
        }),
      })
      enviado = enviado || r.ok
    } catch {}
  }

  return NextResponse.json({ ok: true, enviado })
}
