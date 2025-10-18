import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useEcho } from "@laravel/echo-react";
import type { ITreatment } from "../general.d.ts";

export function useTreatments() {
  const queryClient = useQueryClient();
  const echo = useEcho("treatments");

  // Fetch treatments initially
  const query = useQuery<ITreatment[]>({
    queryKey: ["treatments"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND}/api/treatments`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      return res.json();
    },
  });

  // Subscribe to realtime updates
  useEffect(() => {
    const channel = echo.channel();

    channel.listen("treatments", (event: any) => {
      queryClient.setQueryData(["treatments"], (old: any[] = []) => [
        ...old,
        event.treatment,
      ]);
    });

    channel.listen("TreatmentUpdated", (event: any) => {
      queryClient.setQueryData(["treatments"], (old: any[] = []) =>
        old.map((t) => (t.id === event.treatment.id ? event.treatment : t))
      );
    });

    channel.listen("TreatmentDeleted", (event: any) => {
      queryClient.setQueryData(["treatments"], (old: any[] = []) =>
        old.filter((t) => t.id !== event.treatmentId)
      );
    });

    return () => {
      channel.stopListening("TreatmentCreated");
      channel.stopListening("TreatmentUpdated");
      channel.stopListening("TreatmentDeleted");
    };
  }, [echo]);

  return query;
}
