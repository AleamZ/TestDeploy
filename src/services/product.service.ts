import axiosInstance from "./main.service";

export const ProductService = {
  createProduct: async (data: any) => {
    const response = await axiosInstance.post("/product/create", data);
    return response.data;
  },
  getProducts: async () => {
    const response = await axiosInstance.get("/product/get-all");
    return response.data;
  },
  deleteSoftProduct: async (id: string) => {
    const response = await axiosInstance.put(`/product/delete-soft?ids=${id}`);
    return response.data;
  },
  deleteProduct: async (id: string) => {
    const response = await axiosInstance.delete(`/product/delete?ids=${id}`);
    return response.data;
  },
  getProductSpecial: async () => {
    const response = await axiosInstance.get("/product/get-product-special");
    return response.data;
  },
  getProductById: async (productId: string) => {
    const response = await axiosInstance.get(
      `/product/get-product-id/${productId}`
    );
    return response.data;
  },
  getProductFilter: async (data: any) => {
    const response = await axiosInstance.post(`/product/get-filter`, data);
    return response.data;
  },

  getProductFilterSpec: async (data: {
    categoryUrl: string;
    values: string[];
  }) => {
    const response = await axiosInstance.post("/product/get-filter-spec", data);
    return response.data;
  },
};
