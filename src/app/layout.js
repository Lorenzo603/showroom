import { Inter } from 'next/font/google'
import './globals.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Grid } from '@mui/material'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: process.env.NEXT_PUBLIC_PERSONAL_NAME + ' - Software Developer Personal Projects Portfolio',
  description: 'Portfolio showcasing a my personal projects as a software developer',
}

export const viewport = {
  viewport: "initial-scale=1, width=device-width"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="wrapper">
          <Header />

          <Grid item xs={12} className="page-body">
            {children}
          </Grid >

          <Footer />
        </div>
      </body>
    </html>
  )
}
