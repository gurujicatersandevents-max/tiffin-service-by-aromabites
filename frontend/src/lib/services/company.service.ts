// Centralized Company Profile Service

import { apiClient } from "../api/client";
import { API_ENDPOINTS } from "../api/endpoints";
import { CompanyProfile } from "../../types/cms";

export const companyService = {
  async getCompanyProfile() {
    return apiClient.get<CompanyProfile>(API_ENDPOINTS.COMPANY_PROFILE);
  },
};
