import { useQuery } from "@tanstack/react-query";
import { getData } from "./http.util";

const fetchExerciesByBodyPart = async ({ queryKey }: any) => {
  const [_key, { bodyPart }] = queryKey;

  const url = process.env.EXPO_PUBLIC_API_URL + `/bodyPart/${bodyPart}`;
  const result = await getData(url!);
  return result;
};

export const useExerciesByBodyPart = ({ bodyPart }: { bodyPart: string }) => {
  const result = useQuery({
    queryKey: ["BODY_PART", { bodyPart }],
    queryFn: fetchExerciesByBodyPart,
  });
  return result;
};
