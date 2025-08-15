import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="id">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <title>404 - Halaman Tidak Ditemukan | Ario Veisa</title>
        <meta name="description" content="Halaman yang Anda cari tidak ditemukan. Kembali ke beranda Ario Veisa - Security Research & Business Development Expert." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://arioveisa.me/404" />
        <link rel="stylesheet" type="text/css" href="/assets/css/style-404.css" />
        <link href="/favicon.svg" rel="shortcut icon" type="image/x-icon" />
        <link
          rel="shortcut icon"
          href="/favicon.svg"
          type="image/svg+xml"
          sizes="64x64"
        />
      </head>

      <body>
        <div className="container">
          <img className="ops" src="/assets/images/404.svg" alt="404 Error" />
          <h3>
            Halaman yang Anda cari tidak ditemukan. <br />
            Bisa jadi karena URL tersebut salah atau tidak tersedia.
          </h3>
          <Link className="buton" href="/">www.arioveisa.me</Link>
        </div>
      </body>
    </html>
  );
}
