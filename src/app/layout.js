import './globals.css'

export const metadata = {
  title: 'Turnda Weather App',
  description: 'Amazing Weather App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
