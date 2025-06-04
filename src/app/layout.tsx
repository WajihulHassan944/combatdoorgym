import './globals.css'
import type { Metadata } from 'next'
import { AuthProvider } from './context/AuthContext'
import ClickTracker from './ClickTracker'

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
           <ClickTracker />
          <main>
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}
