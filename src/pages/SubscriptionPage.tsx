import SubscriptionCard from "../components/SubscriptionCard";

const SubscriptionPage = () => {
    return (
        <div>
            <h1>구독 목록</h1>
            <SubscriptionCard name="넷플릭스" price={15000} billingCycle="월간"/>
            <SubscriptionCard name="유튜브 프리미엄" price={14900} billingCycle="월간"/>
            <SubscriptionCard name="스포티파이" price={10900} billingCycle="월간"/>
        </div>
    );
};

export default SubscriptionPage;