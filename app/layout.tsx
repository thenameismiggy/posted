import './globals.css'

export const metadata = {
  title: 'Posted',
  description: 'Posted',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
