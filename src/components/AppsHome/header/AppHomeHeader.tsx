import { ComponentPropsWithoutRef } from "react";

type AppHomeProps = ComponentPropsWithoutRef<"select"> & {
  setCity: (city: string) => void;
  city: string;
};
export default function AppHomeHeader({ setCity, city }: AppHomeProps) {
  return (
    <select
      defaultValue="Pick a color"
      className="select"
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
