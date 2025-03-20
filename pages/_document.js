import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css" rel="stylesheet" />
        <style>
          .chat-window-toggle {
            background-color: #f36b23 !important;
          }
        </style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
