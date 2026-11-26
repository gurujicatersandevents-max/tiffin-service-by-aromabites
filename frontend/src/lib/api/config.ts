// Centralized API Base URL Configuration

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api/v1";

if (!API_BASE_URL && typeof window !== "undefined") {
  console.warn("API base URL is not configured. Defaulting to local endpoint.");
}
