import { useMutation } from "@tanstack/react-query";
import { Contectus } from "../../ServicesApi/Contectus";
export function useContect() {
  const { mutate: postContect, isPending } = useMutation({
    mutationFn: Contectus,
    onSuccess: () => {
      console.log("success");
    },
    onError: () => {
      console.log("success");
    },
  });
  return { postContect, isPending };
}
