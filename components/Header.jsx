import {MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Header = () => {
  return (
    <div className=" mb-4 flex justify-between items-center">
      <MapPinIcon className="h-5 w-5 text-black"/>
      <div className="flex-grow px-4">
        {/* A drop down with previously selected addresses */}
        Tanjunslang, Subang
      </div>
      <MagnifyingGlassIcon className="h-5 w-5"/>
    </div>
  );
};

export default Header;
