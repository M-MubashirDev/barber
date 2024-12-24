import axios from "axios";

export async function Contectus({ data }) {
  try {
    const response = await axios.post(
      `https://hotrodsbackend.onrender.com/contactus`,
      data
    );
    return response;
  } catch (error) {
    console.error("Error fetching professional data:", error.message);
    throw error;
  }
}

//
