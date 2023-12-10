import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'eFoodOdering',
  description: 'Created by Croniarc',
}

export default function RootLayout({ children }) {
  console.log(children, 'children')
  return (
    <html lang="en">

        <body>
          <Header/>
            {children}
          <Footer/>  
        </body>
    </html>
  )
}
