// Centralized Home Service

import { apiClient } from "../api/client";
import { API_ENDPOINTS } from "../api/endpoints";
import { HomePageResponse } from "../../types/cms";

export const homeService = {
  async getHomePage() {
    return apiClient.get<HomePageResponse>(API_ENDPOINTS.HOME);
  },
};
