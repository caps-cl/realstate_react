import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const {data} = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "11bafbf1d9msh114b9b76a07d77ep1bdac5jsna49f12457661",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return data
};
