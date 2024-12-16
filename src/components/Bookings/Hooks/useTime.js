import { useQuery } from "@tanstack/react-query";
import { Time } from "../../../ServicesApi/Time";
import { useParams } from "react-router-dom";
export function useTime() {
  const { id } = useParams();
  const { data: timeData, isPending } = useQuery({
    queryKey: ["Time"],
    queryFn: () => Time({ api: `inquire/${id}` }),
  });
  return { timeData, isPending };
}
