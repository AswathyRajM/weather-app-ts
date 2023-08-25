import axios from 'axios';
import { timeConverter } from './timeConverter';

export const getWeather = async (query: string) => {
  return await axios
    .get(`${process.env.REACT_APP_API_URL}/data/2.5/weather`, {
      params: {
        appid: process.env.REACT_APP_API_ID,
        q: query,
        units: 'metric',
      },
    })
    .then((result) => {
      let r = {
        city: result.data.name,
        time: timeConverter(result.data.timezone),
        main: result.data.weather[0].main.toString(),
        temp: result.data.main.temp.toString(),
        icon: result.data.weather[0].icon,
        country: result.data.sys.country,
        cord: result.data.coord,
      };

      return r;
    })
    .catch((e) => {
      throw new Error(e.response.data.message);
    });
};
