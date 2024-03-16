import "./styles/globals.css"
export { generateMetadata } from "./metadata"
import { Inter } from "next/font/google"

import { Header } from "./components/layouts/header/Header"
import { HeaderContent } from "./components/layouts/header/HeaderContent"
import { Footer } from "./components/layouts/footer/Footer"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
      </head>
      <body className="flex flex-col items-center justify-center">
        <div className="w-full max-w-md">
          <Header
            title={"炎上速報"}
            contents={(<HeaderContent />)}
          />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
