import { WindowIcon } from "@heroicons/react/24/outline"

const DICard = ({value,text}) => {
  return (
            <div className=" bg-gray-50 flex space-x-4 w-[47.5%] p-4 m-1">
          <WindowIcon className="h-10 w-10 text-blue-500"/>
          <div className="flex flex-col text-sm">
            <span>{value}</span>
            <span>{text}</span>
          </div>
        </div>
    
  )
}

export default DICard