import axios from "axios";
import endpoints from "../constants/endpoints";

export const getRoute = async (origem:string, destino:string) => {
  const response = await axios.get(endpoints.route, {
    params: {
      origem,
      destino
    }
  });
  return response.data as Array<string>;
}