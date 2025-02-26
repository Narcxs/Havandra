import { useEffect, useState } from "react";
import { type APIDATATYPE, type HomeInfoProps } from "../type/TypeList";
import Location from "./Location/Location";
import TableInfo from "./TableInfo/TableInfo";

export default function HomeInfo({ city }: HomeInfoProps) {
  const [data, setData] = useState<APIDATATYPE | null>(null);
  const { alerts, current, forecast, location } = data || {};

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=73a097f7acc74720812185151251802&q=${city}&days=1&aqi=yes&alerts=yes`
        );
        const data = await response.json();
        console.log("API Response:", data);
        console.log("Forecast data:", data.forecast);
        setData(data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données météo:",
          error
        );
      }
    }

    fetchWeatherData();
  }, [city]);

  return (
    <>
      {location ? <Location location={location} /> : <p>Loading...</p>}
      <div className="w-full  flex justify-center items-center  gap-x-2 mt-4">
        <div className="w-4/4 h-[800px] border-1 border-dashed border-gray-600 rounded-md   flex  gap-x-2 p-2">
          {data && current && alerts && forecast && (
            <TableInfo
              current={current}
              alerts={alerts.alert}
              forecast={{ forecastday: data.forecast.forecastday }}
            />
          )}
        </div>
      </div>
    </>
  );
}
