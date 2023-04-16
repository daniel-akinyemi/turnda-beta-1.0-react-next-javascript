import { Inter } from 'next/font/google'
import MainWeatherCard from '../../components/MainWeatherCard'
import Header from '../../components/Header'
import SecondCard from '../../components/SecondCard'
import DetailedInformation from '../../components/DetailedInformation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='mx-auto max-w-6xl px-4 py-8'>
      <Header/>
      <MainWeatherCard/>
      <SecondCard/>
      <DetailedInformation/>
    </main>
  )
}
