import { axiosInstance } from "./config";

export const getBannerRequest = () => {
  return axiosInstance.get("/banner");
};

export const getRecommentListRequest = () => {
  return axiosInstance.get("/personalized");
};
