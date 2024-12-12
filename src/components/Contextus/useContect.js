import { useMutation } from "@tanstack/react-query";
import { Contectus } from "../../ServicesApi/Contectus";
import toast from "react-hot-toast";
export function useContect() {
  const { mutate: postContect, isPending } = useMutation({
    mutationFn: Contectus,
    onSuccess: () => {
      console.log("success");
      toast.success("Sucess");
    },
    onError: () => {
      console.log("error");
      toast.error("Can't Submit");
    },
  });
  return { postContect, isPending };
}
