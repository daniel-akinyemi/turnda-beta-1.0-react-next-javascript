import { Inter } from 'next/font/google'
import MainWeatherCard from '../../components/MainWeatherCard'
import Header from '../../components/Header'
import SecondCard from '../../components/SecondCard'
import DetailedInformation from '../../components/DetailedInformation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${process.env.API_KEY}`

  return (
    <main className='mx-auto max-w-6xl px-4 py-8'>
      <Header/>
      <MainWeatherCard/>
      <SecondCard/>
      <DetailedInformation/>
    </main>
  )
}
