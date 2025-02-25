import { ComponentPropsWithRef } from "react";
import { type LocationType } from "../../type/TypeList";

type LocationsProps = ComponentPropsWithRef<"div"> & {
  location: LocationType;
};

export default function Location({ location }: LocationsProps) {
  return (
    <>
      <h1 className="text-2xl font-bold mb-2.5 mt-3.5 underline">
        Localisation :{" "}
      </h1>
      <div className="flex flex-col gap-y-2">
        <p>country : {location.name}</p>
        <p>latitude : {location.lat}</p>
        <p>longitude : {location.lon}</p>
        <p>timezone : {location.tz_id}</p>
        <p>local time : {location.localtime}</p>
      </div>
    </>
  );
}
