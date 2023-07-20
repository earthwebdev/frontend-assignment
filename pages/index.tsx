import Image from 'next/image'
import { Inter } from 'next/font/google'
import RootLayout from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-0 ${inter.className}`}
    >
      <RootLayout>
      Home page goes heres
      </RootLayout>
    </main>
  )
}
