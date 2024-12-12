import { useQuery } from "@tanstack/react-query";
import { getProfessional } from "../../../ServicesApi/Bookings";

export function useServices() {
  const { data: serviceData = {}, isPending } = useQuery({
    queryKey: ["Servicest"],
    queryFn: () => getProfessional({ api: "service" }),
  });
  return { serviceData: serviceData.services, isPending };
}
