import { useQuery } from "@tanstack/react-query";
import { Time } from "../../../ServicesApi/Time";
import { useParams } from "react-router-dom";

export function useTime() {
  const { id } = useParams();
  console.log(id);
  const {
    data: timeData,
    isPending,
    error,
  } = useQuery({
    queryKey: ["Time"],
    queryFn: () => Time({ api: `inquire` }),
    // staleTime: 15 * 60 * 1000, // 7 minutes in milliseconds
    refetchOnWindowFocus: false,
    enabled: !!id,
    retry: false,
    // Prevent refetching on tab focus
    // refetchOnMount: false, // Prevent refetching on remount
  });
  console.log(timeData);
  return { timeData, isPending, error };
}
