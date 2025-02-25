import type {
  alertType,
  currentType,
  forecastDayType,
} from "../../type/TypeList";

type TableInfoProps = {
  current: currentType;
  alerts: alertType;
  forecast: forecastDayType;
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
    <>
      <div className="w-full h-full bg-gray-800 rounded-md p-2 flex flex-col gap-y-2">
        <div className="w-full h-1/10 bg-gray-900 rounded-md flex justify-center items-center">
          <h3 className="text-gray-400 text-xl">Current</h3>
        </div>
        <div className="w-full h-full bg-gray-900 rounded-md py-3.5 px-3.5 flex flex-col gap-y-2 items-center ">
          {/* Current Condition */}
          <p className="text-white  text-base flex items-center gap-x-2">
            Condition : {current.condition.text}
            <img
              src={current.condition.icon}
              alt=""
              className="w-[28px] h-[28px]"
            />
          </p>
          {/* Current temperature */}
          <p className="text-white  text-base">
            Current temperature : {current.temp_c} °C / {current.temp_f} °F
          </p>
          {/* Current feels like */}
          <p className="text-white  text-base">
            Current feels like : {current.feelslike_c} °C /{" "}
            {current.feelslike_f} °F
          </p>
          {/* Current humidity */}
          <p className="text-white  text-base">
            Current humidity : {current.humidity} %
          </p>
          {/* Current wind speed */}
          <p className="text-white  text-base">
            Current wind speed : {current.wind_kph} km/h
          </p>
          {/* Current wind direction */}
          <p className="text-white  text-base">
            Current wind direction : {current.wind_degree}°
          </p>
          {/* Current Percentage cloud cover */}
          <p className="text-white  text-base">
            Current Percentage cloud cover : {current.cloud} %
          </p>
          {/* Atmospheric pressure in millibars */}
          <p className="text-white  text-base">
            Atmospheric pressure in millibars : {current.pressure_mb} mb
          </p>
        </div>
      </div>
      <div className="w-full h-full bg-gray-800 rounded-md p-2 flex flex-col gap-y-2  ">
        <div className="w-full h-1/10 bg-gray-900 rounded-md flex justify-center items-center">
          <h3 className="text-gray-400 text-xl">Forecast</h3>
        </div>
        <div className="w-full h-full bg-gray-900 rounded-md"></div>
      </div>
      <div className="w-full h-full bg-gray-800 rounded-md p-2 flex flex-col gap-y-2">
        <div className="w-full h-1/10 bg-gray-900 rounded-md flex justify-center items-center">
          <h3 className="text-gray-400 text-xl">Alert</h3>
        </div>
        <div className="w-full h-full bg-gray-900 rounded-md"></div>
      </div>
    </>
  );
}
