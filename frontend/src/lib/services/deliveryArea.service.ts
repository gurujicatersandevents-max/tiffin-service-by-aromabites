// Centralized Delivery Areas Service

import { apiClient } from "../api/client";
import { API_ENDPOINTS } from "../api/endpoints";
import { DeliveryArea } from "../../types/cms";

export const deliveryAreaService = {
  async getDeliveryAreas() {
    return apiClient.get<DeliveryArea[]>(API_ENDPOINTS.DELIVERY_AREAS);
  },
};
