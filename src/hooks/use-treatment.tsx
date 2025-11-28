import { useQuery } from "@tanstack/react-query";
import type { ITreatment } from "../general.d.ts";

export function useTreatments() {

  // Fetch treatments initially
  const query = useQuery<ITreatment[]>({
    queryKey: ["treatments"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND}/api/treatments?active=true`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Api-Key": import.meta.env.VITE_API_KEY,
          },
        }
      );

      const { data } = await res.json()
      return data;
    },
  });

  return query;
}
