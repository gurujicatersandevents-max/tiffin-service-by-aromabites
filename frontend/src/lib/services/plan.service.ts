// Centralized Meal Plan Service

import { apiClient } from "../api/client";
import { API_ENDPOINTS } from "../api/endpoints";
import { SubscriptionPlan } from "../../types/cms";

export const planService = {
  async getMealPlans() {
    return apiClient.get<SubscriptionPlan[]>(API_ENDPOINTS.MEAL_PLANS);
  },
};
