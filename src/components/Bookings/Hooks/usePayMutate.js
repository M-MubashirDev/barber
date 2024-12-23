import { useMutation } from "@tanstack/react-query";
import { postPay } from "../../../ServicesApi/Bookings";
import toast from "react-hot-toast";

export function usePayMutate() {
  const { mutate: mutatePay, isPending } = useMutation({
    mutationFn: (data) => postPay({ api: "pay", data }),
    onSuccess: () => {
      toast.success("Payment succesfull");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log("how can you do this");
    },
  });
  return { mutatePay, isPending };
}
// TODO: Send combinedData to the backend via API call
// Example using fetch:
// try {
//   const response = await fetch("http://127.0.0.1:5000/pay", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(combinedData),
//   });
//   const result = await response.json();
//   if (response.ok) {
//     // Handle success (e.g., show confirmation, redirect)
//     alert("Payment Successful!");
//     onClose(false);
//   } else {
//     // Handle errors returned by the backend
//     alert(result.message || "Payment failed. Please try again.");
//   }
// } catch (error) {
//   // Handle network or unexpected errors
//   console.error("Error processing payment:", error);
//   alert("An error occurred. Please try again.");
// }
