import { initClient } from "@ts-rest/core";
import { apiContract } from "./api";

export const apiClient = initClient(apiContract, {
	baseUrl: `http://localhost:${3000}`,
	baseHeaders: {},
});
