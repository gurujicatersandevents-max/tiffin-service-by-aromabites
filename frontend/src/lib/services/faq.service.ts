// Centralized FAQ Service

import { apiClient } from "../api/client";
import { API_ENDPOINTS } from "../api/endpoints";
import { FAQItem } from "../../types/cms";

export const faqService = {
  async getFaqs() {
    return apiClient.get<FAQItem[]>(API_ENDPOINTS.FAQS);
  },
};
