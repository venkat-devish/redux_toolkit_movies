import movieApi from "../common/apis/movieApi";
import { APIKey } from "../common/apis/movieKey";

export const fetchMovies = async () => {
  const searchTerm = "Harry";
  const response = await movieApi.get(
    `?apikey=${APIKey}&s=${searchTerm}&type=movie`
  );
  return response.data;
};
