export interface userInterface {
  weatherData: weatherDataInterface;
  error: null | string;
  isLoading: boolean;
}

export interface weatherDataInterface {
  city: string;
  time: string;
  main: string;
  temp: string;
  icon: string;
  country: string;
  cord: {
    lat: number;
    lon: number;
  };
}

export const weather = {
  city: '',
  time: '',
  main: '',
  temp: '',
  icon: '',
  country: '',
  cord: { lat: 0, lon: 0 },
};
