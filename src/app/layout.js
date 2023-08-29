import Head from 'next/head'
import './globals.css'

export const metadata = {
  title: 'jermaine mercado',
  description: 'portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* <link rel "icon" href="/favicon.ico" sizes="any" /> */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>"/>
        <link href="https://fonts.cdnfonts.com/css/helvetica-neue-5" rel="stylesheet" />
        <link rel="stylesheet" href="globals.css" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
