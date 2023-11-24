import { useQuery } from "@tanstack/react-query";
import { getData } from "./http.util";

const fetchExercies = async () => {
  const url = process.env.EXPO_PUBLIC_API_URL;
  const result = await getData(url!);
  return result;
};

export const useExercies = () => {
  const result = useQuery({
    queryKey: ["ALL_EXERCIES"],
    queryFn: fetchExercies,
  });
  return result;
};
