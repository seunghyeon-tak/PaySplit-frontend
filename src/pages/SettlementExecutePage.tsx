import { useState } from "react";
import { createSettlement } from "../services/settlementExecuteService";
import type { SettlementResponse } from "../types/settlementExecute";

const SettlementPage = () => {
    const [ result, setResult ] = useState<SettlementResponse | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSettle = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await createSettlement({
                payment_id: 1,
                type: 'NORMAL',
            });

            if (response.success) {
                setResult(response.data);
            } else {
                setError(response.code);
            }
        } catch {
            setError('서버 연결에 실패했습니다.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h1>정산</h1>
            <button onClick={handleSettle} disabled={isLoading}>
                {isLoading ? '처리 중...' : '정산 실행'}
            </button>

            {error && <p>오류: {error}</p>}

            {result && (
                <div>
                    <p>정산 ID: {result.settlement_id}</p>
                    <p>상태: {result.status}</p>
                </div>
            )}
        </div>
    );
};

export default SettlementPage;