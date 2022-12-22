import axios from "axios";
import endpoints from "../constants/endpoints";
import Country from "../constants/interfaces/country";

export const getCountries = async () => {
  const response = await axios.get(endpoints.countries);
  return response.data as Country[];
}