import { cpSync, mkdirSync, writeFileSync } from 'fs';

const pastas = ['pasta1', 'pasta2', 'pasta3', 'pasta4'];

pastas.forEach(pasta => {
  mkdirSync(`dist/${pasta}`, { recursive: true });
  cpSync(`${pasta}/dist`, `dist/${pasta}`, { recursive: true });
  console.log(`✓ ${pasta}/dist → dist/${pasta}`);
});

writeFileSync('dist/index.html', `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Páginas</title>
  <style>body{font-family:sans-serif;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;gap:16px;background:#f5f5f5}a{padding:12px 32px;background:#111;color:#fff;text-decoration:none;border-radius:8px;font-size:18px}</style>
</head>
<body>
  <h1>Páginas</h1>
  <a href="/pasta1/">Pasta 1</a>
  <a href="/pasta2/">Pasta 2</a>
  <a href="/pasta3/">Pasta 3</a>
  <a href="/pasta4/">Pasta 4</a>
</body>
</html>`);

console.log('✓ dist/index.html criado');
