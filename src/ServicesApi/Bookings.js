import axios from "axios";
// import { data } from "react-router-dom";
export async function getProfessional({ api }) {
  try {
    const response = await axios.get(
      // `http://127.0.0.1:5000/${api}`
      `https://hotrodsbackend.onrender.com/${api}`
    );

    return response?.data; // Return the resolved data
  } catch (error) {
    console.error("Error fetching professional data:", error.message);
    throw error;
  }
}
export async function postPay({ api, data }) {
  try {
    const response = await axios.post(
      `https://hotrodsbackend.onrender.com/${api}`,
      data
    );
    return response; // Return the resolved data
  } catch (error) {
    console.error("Error fetching professional data:", error.message);
    throw error;
  }
}
