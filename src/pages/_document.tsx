import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Alreda Alhadi | Developer Portfolio</title>
        <meta name="description" content="Portfolio of Alreda Alhadi, a Computer Science student at Ontario Tech specializing in full-stack development, mobile apps, backend systems, and IT support." />
        <meta name="keywords" content="Alreda Alhadi, software developer, full-stack developer, frontend developer, backend developer, computer science student, Ontario Tech, portfolio, React developer, Vue developer, Flutter developer, IT support, mobile app developer, internship, co-op, web development, REST APIs, software testing, database developer, open to work, student portfolio" />
        <meta name="author" content="Alreda Alhadi" />

        <link rel="icon" href="/alreda-dev-logo-transparent.png" />

        <meta property="og:title" content="Alreda Alhadi Portfolio" />
        <meta property="og:description" content="Explore my work in full-stack development, mobile apps, and IT support." />
        <meta property="og:image" content="/alreda-dev-social-banner.png" />
        <meta property="og:url" content="https://alreda.dev" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alreda Alhadi Portfolio" />
        <meta name="twitter:description" content="Explore my work in full-stack development, mobile apps, and IT support." />
        <meta name="twitter:image" content="/alreda-dev-social-banner.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
