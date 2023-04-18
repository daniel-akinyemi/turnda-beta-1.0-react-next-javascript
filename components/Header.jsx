import {MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Header = () => {
  return (
    <div className=" mb-4 flex justify-between items-center">
      <MapPinIcon className="h-5 w-5 text-black"/>
      <div className="flex-grow px-4 text-sm font-medium">
        {/* A drop down with previously selected addresses */}
        Tanjunslang, Subang
      </div>
      <MagnifyingGlassIcon className="h-5 w-5 stroke-[4px]"/>
    </div>
  );
};

export default Header;
