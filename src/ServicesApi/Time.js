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

export async function postTime({ api, data }) {
  console.log("API Endpoint:", api);
  console.log("Data Sent:", data);
  try {
    const response = await axios.patch(
      `https://hotrodsbackend.onrender.com/inquire/${api}`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching professional data:", error.message);
    throw error;
  }
}
