import axios from "axios";
export async function Time({ api }) {
  try {
    const response = await axios.get(`http://127.0.0.1:5000/${api}`);
    return response?.data; // Return the resolved data
  } catch (error) {
    console.error("Error fetching inquire data:", error.message);
    throw error;
  }
}
