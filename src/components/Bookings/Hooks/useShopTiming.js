import { useQuery } from "@tanstack/react-query";
import { getProfessional } from "../../../ServicesApi/Bookings";

export function useShopTiming() {
  const {
    data: shopTime,
    isPending: pendingShopeTiming,
    error,
  } = useQuery({
    queryKey: ["shoptiming"],
    queryFn: () => getProfessional({ api: "shop-timing" }),
  });
  return { shopTime, pendingShopeTiming, error };
}
