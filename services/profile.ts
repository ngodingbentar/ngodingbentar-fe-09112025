"use server";

import { ApiResponse, IProfile } from "@/types";
const BASE_URL = process.env?.NEXT_PUBLIC_API_URL;

export const getNewsSsr = async () => {
  try {
    const response = await fetch(`${BASE_URL}/091125/news`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error", error);
    throw new Error("Failed to fetch data");
  }
};

export const getProfileSsr = async () => {
  try {
    const response = await fetch(`${BASE_URL}/091125/profile`);
    const data: Promise<ApiResponse<IProfile>> = await response.json();
    return data;
  } catch (error) {
    console.error("error", error);
    throw new Error("Failed to fetch data");
  }
};
