import { CloudIcon} from "@heroicons/react/24/outline";
import DICard from "./DICard";

const DetailedInformation = () => {
  return (
    <section>
      <header className="my-4 text-lg font-medium">Detail Information</header>
      <div className="explained-detail">
        <div className="px-4 rounded-md py-4 bg-pink-100 flex space-x-4">
          <CloudIcon className="h-12 w-12 text-orange-500" />
          <div className="text-xs">
            <div className="font-bold">
              Cuaca esok hari kemungkinan akan terjadi hujan di siang hari
            </div>
            <div>Jangan lupa bawa payung ya</div>
          </div>
        </div>
      </div>
      <section className="flex flex-wrap justify-between my-4">
      <DICard/>
      <DICard/>
      <DICard/>
      <DICard/>
      </section>
    </section>
  );
};

export default DetailedInformation;
