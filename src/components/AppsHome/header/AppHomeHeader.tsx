import { ComponentPropsWithoutRef } from "react";

type AppHomeProps = ComponentPropsWithoutRef<"select"> & {
  setCity: (city: string) => void;
  city: string;
};
export default function AppHomeHeader({ setCity, city }: AppHomeProps) {
  return (
    <select
      defaultValue="Pick a color"
      className="select w-full max-w-xs md:max-w-sm lg:max-w-md ml-0"
      onChange={(e) => setCity(e.target.value)}
      value={city}
    >
      <option disabled={true}>Pick up a city</option>
      <option>Antananarivo</option>
      <option>Toamasina</option>
      <option>Fianarantsoa</option>
      <option>Mahajanga</option>
      <option>Toliara</option>
      <option>Antsiranana</option>
    </select>
  );
}
