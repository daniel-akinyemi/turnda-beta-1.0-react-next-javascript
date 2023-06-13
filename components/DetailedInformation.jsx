import { CloudIcon} from "@heroicons/react/24/outline";
import DICard from "./DICard";

const DetailedInformation = ({location}) => {
  return (
    <section>
      <header className="my-4 text-lg font-medium">Detail Information</header>
      <div className="explained-detail">
        <div className="px-4 rounded-md py-4 bg-pink-100 flex space-x-4">
          <CloudIcon className="h-12 w-12 text-orange-500" />
          <div className="text-xs">
            <div className="font-bold">
                This space is intended to contain random country facts but I will leave it blank for now
            </div>
            <div>Jangan lupa bawa payung ya</div>
          </div>
        </div>
      </div>
      <section className="flex flex-wrap justify-between my-4">
      <DICard value={location && location?.main.feels_like} text={"Feels Like"}/>
      <DICard value={location && location?.main.humidity} text={"Humidity"}/>
      <DICard value={location && `GMT - ${location?.timezone}`} text={"Time"}/>
      <DICard value={location && location?.wind.speed} text={"Feels Like"}/>
      </section>
    </section>
  );
};

export default DetailedInformation;
