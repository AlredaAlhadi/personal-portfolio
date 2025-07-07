import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
        <link rel="icon" href="/alreda-dev-logo.png" />
      <body className="antialiased">
        <meta property="og:title" content="Alreda Alhadi Portfolio" />
        <meta property="og:description" content="Explore my work in full-stack development, mobile apps, and IT support." />
        <meta property="og:image" content="/alreda-dev-social-banner.png" />
        <meta property="og:url" content="https://alreda.dev" />
        <meta property="og:type" content="website" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
