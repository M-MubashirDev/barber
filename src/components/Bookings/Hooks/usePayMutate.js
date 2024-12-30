import { useMutation } from "@tanstack/react-query";
import { postPay } from "../../../ServicesApi/Bookings";
import toast from "react-hot-toast";

export function usePayMutate() {
  const {
    mutate: mutatePay,
    isLoading: isPending,
    isSuccess,
  } = useMutation({
    mutationFn: (data) => postPay({ api: "pay", data }),
    onSuccess: () => {
      toast.success("Payment successful");
    },
    onError: (error) => {
      toast.error("Please Try Again: " + error.message);
      console.error("Payment Error:", error);
    },
  });

  return { mutatePay, isPending, isSuccess };
}
