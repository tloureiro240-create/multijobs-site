# Receitas da Casa

App web/PWA para pesquisar receitas online e guardar as receitas da família.

## Incluído nesta versão

- Pesquisa online com a API pública TheMealDB
- Guardar receitas encontradas online
- Criar receitas próprias
- Ingredientes e quantidades
- Passos de preparação
- Categoria, tempo, porções, dificuldade, notas e foto por URL
- Editar receitas
- Favoritos
- Lista de compras
- Adicionar ingredientes de uma receita às compras
- Partilha de receita
- Pesquisa interna e filtros
- Tema claro/escuro
- Design responsivo
- PWA instalável
- Cache offline da aplicação
- Dados guardados no navegador com localStorage

## Netlify

Não precisa de build.

- Build command: vazio
- Publish directory: `.`

## GitHub Pages

Settings → Pages → Deploy from a branch → `main` → `/(root)`.

## Importante

Nesta versão, as receitas pessoais, favoritos e lista de compras ficam guardados no navegador/dispositivo.
Para duas pessoas verem e editarem exatamente as mesmas receitas em telemóveis diferentes, a próxima versão deve usar Supabase ou Firebase com login e base de dados online.
