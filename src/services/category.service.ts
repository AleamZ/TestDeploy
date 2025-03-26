import axiosInstance from "./main.service";

export const CategoryService = {
  getCategoryByUrl: async (url: string) => {
    const response = await axiosInstance.get(
      `/category/get-category-url/${url}`
    );
    return response.data;
  },
  getActive: async () => {
    const response = await axiosInstance.get(`/category/get-active`);
    return response.data;
  }
};
