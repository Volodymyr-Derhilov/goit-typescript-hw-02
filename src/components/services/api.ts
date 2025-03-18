import axios from "axios";
import { Request } from "../../Types.type";

const ACCESS_KEY: string = "BWvmjCagB-C4ZTRKN61gg81VxPRJD1J_Cbrw7f2XamY";

const fetchImages: Request = async function (query, page) {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&query=${query}&page=${page}`
  );
  return response.data;
}

export default fetchImages;