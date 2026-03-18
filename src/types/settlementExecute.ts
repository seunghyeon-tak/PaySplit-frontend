export type SettlementRequest = {
    payment_id: number;
    type: string;
};

export type SettlementResponse = {
    settlement_id: number;
    status: string;
}

export type ApiResponse<T> = {
    success: boolean;
    code: string;
    message: string | null;
    data: T;
};