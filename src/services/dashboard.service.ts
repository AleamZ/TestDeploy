// services/dashboard.service.ts

import { DeleteCategoryRequest } from "../types/dashboard.interface";
import axiosInstance from "./main.service";

export const DashboardService = {
  //-------------Category service-------------//
  getAllCategoriesActive: async () => {
    const response = await axiosInstance.get("category/get-active");
    return response.data;
  },
  updateCategory: async (data: any) => {
    const response = await axiosInstance.put("category/update", data);
    return response.data;
  },
  createCategory: async (payload: any) => {
    const response = await axiosInstance.post(`/category/create`, payload);
    return response.data;
  },
  deleteCategory: async (payload: DeleteCategoryRequest) => {
    const response = await axiosInstance.put(`/category/delete-soft`, payload);
    return response.data;
  },
  addSubCategory: async (parentId: string, subCategories: string[]) => {
    const response = await axiosInstance.post(`/category/add-sub/${parentId}`, {
      subCategories,
    });
    return response.data;
  },
  getCategorybyId: async (id: string) => {
    const response = await axiosInstance.get(`/category/get-category/${id}`);
    return response.data;
  },
  //--------------------------------------------//
  //-------------Overview service-------------//
  getOverview: async () => {
    const response = await axiosInstance.get("/statistical/orders");
    return response.data;
  },
  //--------------------------------------------//

  getProducts: async () => {
    const response = await axiosInstance.get("/product/get-all");
    return response.data;
  },
};
