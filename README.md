# Nexora Digital — Site público
Projeto separado do portal interno (`nexora-portal`). Rotas: `/`, `/sobre`, `/equipe`, `/produtos`, `/produtos/nexora-sites`, `/produtos/nexora-smarttag`, `/contato`.
Os formulários gravam em `contact_requests` no Supabase (mesmo projeto do portal; a tabela é criada por `schema.sql` do portal).

## Publicar na Vercel
1. Novo projeto na Vercel apontando para o repositório deste site.
2. Variáveis de ambiente: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` e, opcionalmente, `NEXT_PUBLIC_PORTAL_URL` (endereço do portal, para mostrar o link "Portal interno").
Textos e equipe: `lib/content.ts`. Imagens: `public/img`. Ícone da aba: `app/icon.png`.
