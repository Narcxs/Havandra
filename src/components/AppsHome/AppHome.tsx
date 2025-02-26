import { useState } from "react";
import AppHomeHeader from "./header/AppHomeHeader.tsx";
import HomeInfo from "./HomeApp/HomeInfo.tsx";

export default function AppHome() {
  const [city, setCity] = useState<string>("Antananarivo");
  const [listCity] = useState<string[]>([
    "antananarivo",
    "toliara",
    "fianarantsoa",
    "mahajanga",
    "toamasina",
    "antsiranana",
  ]);
  console.log(city);
  return (
    <div className="w-full h-full px-10">
      <div className="w-full flex justify-center items-center mt-10">
        <AppHomeHeader city={city} setCity={setCity} />
      </div>
      <HomeInfo city={city} listCity={listCity} />
    </div>
  );
}
