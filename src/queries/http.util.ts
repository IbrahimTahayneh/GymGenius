import axios from "axios";

export const getData = async (url: string) => {
  const result = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": process.env.EXPO_PUBLIC_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  });
  return result.data;
};

export const postData = async (url: string, data: any) => {
  const result = await axios.post(url, data, {
    headers: {
      "X-RapidAPI-Key": process.env.EXPO_PUBLIC_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  });
  return result.data;
};
