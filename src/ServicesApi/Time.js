import axios from "axios";
export async function Time({ api }) {
  try {
    const response = await axios.get(
      `https://hotrodsbackend.onrender.com/${api}`
    );
    return response?.data; // Return the resolved data
  } catch (error) {
    console.error("Error fetching inquire data:", error.message);
    throw error;
  }
}
