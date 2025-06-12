// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* CDN de Tailwind para estilos instantáneos */}
        <script src="https://cdn.tailwindcss.com"></script>
        {/* Tu favicon */}
        <link rel="icon" href="/assets/logos/ICONOFINAL.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
