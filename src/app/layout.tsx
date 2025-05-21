import './globals.css'
import type { Metadata } from 'next'
import { AuthProvider } from './context/AuthContext'

export const metadata: Metadata = {
  title: 'Bring the Fight Home with This Game-Changing Home Gym Setup',
  description: 'Discover how the COMBAT DOOR GYM transforms your doorway into a powerful home gym. Train like a fighter, anytime, anywhere.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <main>
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}
