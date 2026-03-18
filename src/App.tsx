import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import SubscriptionPage from './pages/SubscriptionPage';
import SettlementExecutePage from './pages/SettlementExecutePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/subscriptions" element={<SubscriptionPage />} />
        <Route path="/settlements" element={<SettlementExecutePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;