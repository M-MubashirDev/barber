import { useQuery } from "@tanstack/react-query";
import { getProfessional } from "../../../ServicesApi/Bookings";

export function useProfessionals() {
  const { data: professionData = {}, isFetching } = useQuery({
    queryKey: ["professional"],
    queryFn: () => getProfessional({ api: "professional" }),
  });

  return { professionData: professionData.professionals, isFetching };
}
