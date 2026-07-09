import { axiosInstance } from "@/lib/axios";

export const exampleApi = {
  async getCustomerCount(period: number) {
    try {
      const res = await axiosInstance.get(
        `/customer/get-customer-counts-by-period/${period}`,
      );
      if (!res?.data) throw new Error("Can't get the customer counts.");

      return res.data.result;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch customer counts.",
      );
    }
  },
};
