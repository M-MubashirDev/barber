import axios from "axios";

export async function Contectus({ data }) {
  try {
    const response = await axios.post(`http://127.0.0.1:5000/contactus`, data);
    return response;
  } catch (error) {
    console.error("Error fetching professional data:", error.message);
    throw error;
  }
}

//
