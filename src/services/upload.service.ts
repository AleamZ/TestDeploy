import axios from "axios";
import axiosInstance from "./main.service";
const baseURL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://bluetooth-mobile-web-backend.onrender.com";
export const uploadImage = async (image: any) => {
  const response = await axios.post(`${baseURL}/upload/single`, image, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const uploadImages = async (images: File[]) => {
  const response = await axiosInstance.post("/upload/multiple", images);
  return response.data;
};
