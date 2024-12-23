import { useQuery } from "@tanstack/react-query";
import { Time } from "../../../ServicesApi/Time";
import { useParams } from "react-router-dom";

export function useTime() {
  const { id } = useParams();
  const { data: timeData, isPending } = useQuery({
    queryKey: ["Time"],
    queryFn: () => Time({ api: `inquire/${id}` }),
    staleTime: 15 * 60 * 1000, // 7 minutes in milliseconds
    refetchOnWindowFocus: false, // Prevent refetching on tab focus
    refetchOnMount: false, // Prevent refetching on remount
  });
  return { timeData, isPending };
}
