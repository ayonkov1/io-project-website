import { ReactNode } from 'react'
import Navbar from './navbar'
import { AppProps } from 'next/app'

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}
