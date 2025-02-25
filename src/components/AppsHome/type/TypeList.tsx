import { ComponentPropsWithRef } from "react";

// API response
export type APIDATATYPE = {
  alerts: {
    alert: unknown[];
  };
  current: {
    air_quality: {
      co: number;
      gb_defra_index: number;
      no2: number;
      o3: number;
      pm2_5: number;
      pm10: number;
      so2: number;
      us_epa_index: number;
    };
    cloud: number;
    condition: {
      code: number;
      icon: string;
      text: string;
    };
    dewpoint_c: number;
    dewpoint_f: number;
    feelslike_c: number;
    feelslike_f: number;
    gust_kph: number;
    gust_mph: number;
    heatindex_c: number;
    heatindex_f: number;
    humidity: number;
    is_day: number;
    last_updated: string;
    last_updated_epoch: number;
    precip_in: number;
    precip_mm: number;
    pressure_in: number;
    pressure_mb: number;
    temp_c: number;
    temp_f: number;
    uv: number;
    vis_km: number;
    vis_miles: number;
    wind_degree: number;
    wind_dir: string;
    wind_kph: number;
    wind_mph: number;
    windchill_c: number;
    windchill_f: number;
  };
  forecast: Array<Record<string, unknown>>;
  location: {
    country: string;
    lat: number;
    localtime: string;
    lon: number;
    name: string;
    region: string;
    tz_id: string;
  };
};

// location type
export type LocationType = {
  country: string;
  lat: number;
  localtime: string;
  lon: number;
  name: string;
  region: string;
  tz_id: string;
};

// HomeInfoProps
export type HomeInfoProps = {
  city: string;
  listCity: string[];
} & ComponentPropsWithRef<"div">;

// current Type
export type currentType = {
  air_quality: {
    co: number;
    gb_defra_index: number;
    no2: number;
    o3: number;
    pm2_5: number;
    pm10: number;
    so2: number;
    us_epa_index: number;
  };
  cloud: number;
  condition: {
    code: number;
    icon: string;
    text: string;
  };
  dewpoint_c: number;
  dewpoint_f: number;
  feelslike_c: number;
  feelslike_f: number;
  gust_kph: number;
  gust_mph: number;
  heatindex_c: number;
  heatindex_f: number;
  humidity: number;
  is_day: number;
  last_updated: string;
  last_updated_epoch: number;
  precip_in: number;
  precip_mm: number;
  pressure_in: number;
  pressure_mb: number;
  temp_c: number;
  temp_f: number;
  uv: number;
  vis_km: number;
  vis_miles: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
  wind_mph: number;
  windchill_c: number;
  windchill_f: number;
};

// alert Type
export type alertType = {
  alert: unknown[];
};

// type forecast day
export type forecastDayType = Array<Record<string, unknown>>;
