
import { SunIcon,ArrowPathIcon } from '@heroicons/react/24/outline'
const MainWeatherCard = () => {
  return (
    <div className="w-full text-white text-xs rounded-md bg-blue-500 p-4 space-y-4">
      <div className="mwc-bk-1 flex justify-between">
        <div>Senin, 20 December 2021</div>
        <div> 3:30PM</div>
      </div>

      <div className="mwc-bk-2 flex space-x-4">
        <SunIcon className='w-10 h-10'/>
        <div className="mwc-bk-2-1 text-lg">
          <div className='font-light'>18° C</div>
          <div className=' font-bold'>Hujan Berawan</div>
        </div>
      </div>

      <div className="mwc-bk-3 flex space-x-2 text-xs items-center">
        <div>Terakhir update 3:00PM</div>
        <ArrowPathIcon className='h-4 w-4'/>        
      </div>


    </div>
  )
}

export default MainWeatherCard