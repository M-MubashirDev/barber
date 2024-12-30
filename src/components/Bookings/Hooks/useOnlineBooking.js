import { useMutation } from "@tanstack/react-query";
import { postTime } from "../../../ServicesApi/Time";
import toast from "react-hot-toast";

function useOnlineBooking() {
  const {
    mutate: mutateOnlineBooking,
    isLoading: onlinePending,
    isSuccess,
  } = useMutation({
    mutationFn: postTime,
    onSuccess: () => {
      toast.success("Online booking successful");
    },
    onError: (error) => {
      toast.error(error.message);
      console.error("Booking Error:", error);
    },
  });

  return { mutateOnlineBooking, onlinePending, isSuccess };
}

export default useOnlineBooking;
