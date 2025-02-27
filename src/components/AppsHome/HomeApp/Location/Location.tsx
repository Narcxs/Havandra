import { ComponentPropsWithRef } from "react";
import { type LocationType } from "../../type/TypeList";

type LocationsProps = ComponentPropsWithRef<"div"> & {
  location: LocationType;
};

export default function Location({ location }: LocationsProps) {
  return (
    <>
      <h1 className="text-xl md:text-2xl font-bold mb-2 md:mb-2.5 mt-2 md:mt-3.5 underline">
        Localisation :{" "}
      </h1>
      <div className="flex flex-col gap-y-1.5 md:gap-y-2 text-sm md:text-base">
        <p>country : {location.name}</p>
        <p>latitude : {location.lat}</p>
        <p>longitude : {location.lon}</p>
        <p>timezone : {location.tz_id}</p>
        <p>local time : {location.localtime}</p>
      </div>
    </>
  );
}
