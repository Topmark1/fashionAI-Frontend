//'use client'

import Header from '../components/Header'
import '../styles/globals.css'


export default async function RootLayout({children}) {
  

  return (
    <html lang="en">
    <body className=''>
  
    <div className='font-M relative' >
      
        {/* Header */}
        <Header />
      {children}
      </div>
      
      </body>
  </html>
  )
}
