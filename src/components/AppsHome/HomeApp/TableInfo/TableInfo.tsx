import type {
  alertType,
  currentType,
  forecastDayType,
} from "../../type/TypeList";

type TableInfoProps = {
  current: currentType;
  alerts: alertType[];
  forecast: {
    forecastday: forecastDayType[];
  };
};

export default function TableInfo({
  current,
  alerts,
  forecast,
}: TableInfoProps) {
  console.log(current);
  console.log(alerts);
  console.log(forecast);
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      <div className="w-full md:w-1/3 bg-gray-800 rounded-md p-2 flex flex-col gap-y-2">
        <div className="w-full bg-gray-900 rounded-md flex justify-center items-center py-3">
          <h3 className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl">
            Current
          </h3>
        </div>
        <div className="w-full h-full bg-gray-900 rounded-md py-3.5 px-3.5 flex flex-col gap-y-2 items-center overflow-y-auto">
          {/* Condition actuelle */}
          <p className="text-white text-xs sm:text-sm md:text-base flex items-center gap-x-2">
            Condition : {current.condition.text}
            <img
              src={current.condition.icon}
              alt=""
              className="w-[28px] h-[28px]"
            />
          </p>
          <hr className="w-4/5 border-gray-700 my-1" />

          {/* Groupe Température */}
          <p className="text-white text-xs sm:text-sm md:text-base">
            Current temperature : {current.temp_c} °C / {current.temp_f} °F
          </p>
          <p className="text-white text-xs sm:text-sm md:text-base">
            Current feels like : {current.feelslike_c} °C /{" "}
            {current.feelslike_f} °F
          </p>
          <p className="text-white text-xs sm:text-sm md:text-base">
            Current wind chill : {current.windchill_c} °C /{" "}
            {current.windchill_f} °F
          </p>
          <hr className="w-4/5 border-gray-700 my-1" />

          {/* Groupe Vent */}
          <p className="text-white text-xs sm:text-sm md:text-base">
            Current wind speed : {current.wind_kph} km/h
          </p>
          <p className="text-white text-xs sm:text-sm md:text-base">
            Current wind direction : {current.wind_degree}°
          </p>
          <hr className="w-4/5 border-gray-700 my-1" />

          {/* Groupe Conditions Atmosphériques */}
          <p className="text-white text-xs sm:text-sm md:text-base">
            Current humidity : {current.humidity} %
          </p>
          <p className="text-white text-xs sm:text-sm md:text-base">
            Current Percentage cloud cover : {current.cloud} %
          </p>
          <p className="text-white text-xs sm:text-sm md:text-base">
            Atmospheric pressure in millibars : {current.pressure_mb} mb
          </p>
          <p className="text-white text-xs sm:text-sm md:text-base">
            Current visibility : {current.vis_km} km / {current.vis_miles} miles
          </p>
          <p className="text-white text-xs sm:text-sm md:text-base">
            Current dew point : {current.dewpoint_c} °C / {current.dewpoint_f}{" "}
            °F
          </p>
          <hr className="w-4/5 border-gray-700 my-1" />

          {/* UV Index */}
          <p className="text-white text-xs sm:text-sm md:text-base">
            Current UV Index : {current.uv}
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/3 bg-gray-800 rounded-md p-2 flex flex-col gap-y-2">
        <div className="w-full bg-gray-900 rounded-md flex justify-center items-center py-3">
          <h3 className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl">
            Forecast
          </h3>
        </div>
        <div className="w-full h-full bg-gray-900 rounded-md">
          <div className="py-3.5 px-3.5">
            {Array.isArray(forecast.forecastday) &&
            forecast.forecastday.length > 0 ? (
              forecast.forecastday.map((day, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-y-2 items-center mb-4"
                >
                  <h4 className="text-white text-lg font-semibold">
                    Date: {day.date}
                  </h4>
                  <p className="text-white text-xs sm:text-sm md:text-base flex items-center gap-x-2">
                    Condition: {day.day.condition.text}
                    <img
                      src={day.day.condition.icon}
                      alt=""
                      className="w-[28px] h-[28px]"
                    />
                  </p>
                  <hr className="w-4/5 border-gray-700 my-1" />

                  <p className="text-white text-xs sm:text-sm md:text-base">
                    Maximum temperature: {day.day.maxtemp_c}°C /{" "}
                    {day.day.maxtemp_f}°F
                  </p>
                  <p className="text-white text-xs sm:text-sm md:text-base">
                    Minimum temperature: {day.day.mintemp_c}°C /{" "}
                    {day.day.mintemp_f}°F
                  </p>
                  <hr className="w-4/5 border-gray-700 my-1" />

                  <p className="text-white text-xs sm:text-sm md:text-base">
                    Maximum wind speed: {day.day.maxwind_kph} km/h
                  </p>
                  <hr className="w-4/5 border-gray-700 my-1" />

                  <p className="text-white text-xs sm:text-sm md:text-base">
                    Chance of rain: {day.day.daily_chance_of_rain}%
                  </p>
                  <p className="text-white text-xs sm:text-sm md:text-base">
                    Precipitation: {day.day.totalprecip_mm} mm
                  </p>

                  {index < forecast.forecastday.length - 1 && (
                    <hr className="w-full border-gray-700 mt-4" />
                  )}
                </div>
              ))
            ) : (
              <div className="py-3.5 px-3.5 flex justify-center items-center">
                <p className="text-white text-xs sm:text-sm md:text-base">
                  Aucune prévision disponible
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 bg-gray-800 rounded-md p-2 flex flex-col gap-y-2">
        <div className="w-full bg-gray-900 rounded-md flex justify-center items-center py-3">
          <h3 className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl">
            Alert
          </h3>
        </div>
        <div className="w-full h-full bg-gray-900 rounded-md">
          {alerts && alerts.length > 0 ? (
            <div className="py-3.5 px-3.5">
              {alerts.map((alert, index) => (
                <div
                  key={index}
                  className="text-white text-xs sm:text-sm md:text-base"
                >
                  {alert.message}
                </div>
              ))}
            </div>
          ) : (
            <div className="py-3.5 px-3.5 flex justify-center items-center">
              <p className="text-white text-xs sm:text-sm md:text-base">
                Aucune alerte disponible
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
