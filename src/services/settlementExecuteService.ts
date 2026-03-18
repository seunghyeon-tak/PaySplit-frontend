import type { ApiResponse, SettlementRequest, SettlementResponse } from "../types/settlementExecute";

const BASE_URL = 'http://localhost:8080/api/v1';

export const createSettlement = async (request: SettlementRequest): Promise<ApiResponse<SettlementResponse>> => {
    const response = await fetch(`${BASE_URL}/settlements`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
    });

    return response.json();
};