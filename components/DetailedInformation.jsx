import { CloudIcon } from "@heroicons/react/24/outline";

const DetailedInformation = () => {
  return (
    <section>
      <header className="my-4 text-lg font-medium">Detail Information</header>
      <div className="explained-detail">
        <div className="px-4 rounded-md py-4 bg-pink-200 flex space-x-4">
          <CloudIcon className="h-12 w-12" />
          <div>
            <div>
              Cuaca esok hari kemungkinan akan terjadi hujan di siang hari
            </div>
            <div>Jangan lupa bawa payung ya</div>
          </div>
        </div>
      </div>
      <div className="more-weather-detail"></div>
    </section>
  );
};

export default DetailedInformation;
