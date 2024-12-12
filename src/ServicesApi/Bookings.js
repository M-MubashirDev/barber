import axios from "axios";
export async function getProfessional({ api }) {
  try {
    const response = await axios.get(`http://127.0.0.1:3000/${api}`);
    return response?.data; // Return the resolved data
  } catch (error) {
    console.error("Error fetching professional data:", error.message);
    throw error;
  }
}
