import axiosInstance from "./main.service";

export const SpecificationService = {
  createSpecification: async (data: any) => {
    const response = await axiosInstance.post("/specification/create", data);
    return response.data;
  },
  getSpecifications: async (categoryId: string) => {
    const response = await axiosInstance.get(`/specification/${categoryId}`);
    return response.data;
  },
  getSpecificationsByUrl: async (url: string) => {
    const response = await axiosInstance.get(
      `/specification/get-filter-category/${url}`
    );
    return response.data;
  },
};
