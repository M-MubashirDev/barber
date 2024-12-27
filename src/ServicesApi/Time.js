import axios from "axios";
export async function Time({ api }) {
  console.log(api);
  try {
    const response = await axios.get(
      `https://hotrodsbackend.onrender.com/${api}`
    );
    return response?.data; // Return the resolved data
  } catch (error) {
    // console.log("chikooo");
    console.error("Error fetching inquire data:", error.message);
    throw error;
  }
}
