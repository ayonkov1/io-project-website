import Navbar from './navbar'
import { Bebas_Neue } from 'next/font/google'

const inter = Bebas_Neue({ weight: '400', subsets: ['latin'] })

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main className={inter.className}>{children}</main>
    </>
  )
}
