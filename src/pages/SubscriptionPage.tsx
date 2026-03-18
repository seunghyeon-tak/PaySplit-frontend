import { useState, useEffect } from "react";
import SubscriptionCard from "../components/SubscriptionCard";
import type { Subscription } from "../types/subscription";

const mockData: Subscription[] = [
    {id: 1, name: '넷플릭스', price: 15000, billingCycle: '월간'},
    {id: 2, name: '유튜브 프리미엄', price: 14900, billingCycle: '월간'},
    {id: 3, name: '스포티파이', price: 10900, billingCycle: '월간'},
];

const SubscriptionPage = () => {
    const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

    useEffect(() => {
        // todo: api 호출
        setSubscriptions(mockData);
    }, []);

    return (
        <div>
            <h1>구독 목록</h1>
            {subscriptions.map((sub) => (
                <SubscriptionCard
                    key={sub.id}
                    name={sub.name}
                    price={sub.price}
                    billingCycle={sub.billingCycle}
                />
            ))}
        </div>
    );
};

export default SubscriptionPage;