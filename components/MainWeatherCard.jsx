import React from 'react'

const MainWeatherCard = () => {
  return (
    <div className="w-full text-white h-40 rounded-md bg-blue-500 p-4">
      <div className="mwc-bk-1">
        <div>Senin, 20 December 2021</div>
        <div> 3:30Pm</div>
      </div>
      <div className="mwc-bk-2">
        {/* <Image /> */}
        <div className="mwc-bk-2-1">
          <div>18° C</div>
          <div>Hujan Berawan</div>
        </div>
      </div>
      <div className="mwc-bk-3">
        <div>Terakhir update 3:00PM</div>
        <button>Refresh</button>
      </div>
    </div>
  )
}

export default MainWeatherCard