import './globals.css'

import { Open_Sans as Open} from 'next/font/google'

import { Roboto_Flex as Roboto} from 'next/font/google'



const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' });
const open = Open({ subsets: ['latin'], variable: '--font-open' });

export const metadata = {
  title: 'Ícaro Teodoro.',
  description: 'Meu portifólio criado com React usando Next.js!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
