// Centralized Lead Service

import { apiClient } from "../api/client";
import { API_ENDPOINTS } from "../api/endpoints";
import { LeadPayload } from "../../types/cms";

export const leadService = {
  async submitLead(payload: LeadPayload) {
    return apiClient.post<{ lead_id: number; message: string }>(
      API_ENDPOINTS.LEADS,
      payload
    );
  },
};
