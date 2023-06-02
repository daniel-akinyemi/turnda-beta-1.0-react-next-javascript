import { Inter } from 'next/font/google'
import ParentComponent from '../../components/parentComponent'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  

  return (
    <main className='mx-auto max-w-6xl px-4 py-8'>
      <ParentComponent/>
    </main>
  )
}
