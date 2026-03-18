import { useState } from "react";

type Props = {
    name: string;
    price: number;
    billingCycle: string;
};

const SubscriptionCard = ({name, price, billingCycle}: Props) => {
    const [isActive, setIsActive] = useState(true);

    return (
        <div>
            <h2>{name}</h2>
            <p>금액: {price.toLocaleString()}원</p>
            <p>결제 주기: {billingCycle}</p>
            <p>상태: {isActive ? '✅ 활성' : '❌ 비활성'}</p>
            <button onClick={() => setIsActive(!isActive)}>
                {isActive ? '구독 취소' : '구독 재개'}
            </button>
        </div>
    );
};

export default SubscriptionCard;