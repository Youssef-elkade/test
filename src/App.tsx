import { useState } from 'react';
import { Navigation } from './components/layout/Navigation';
import { LoginPage } from './components/pages/LoginPage';
import { RegisterPage } from './components/pages/RegisterPage';
import { ForgotPasswordPage } from './components/pages/ForgotPasswordPage';
import { HomePage } from './components/pages/HomePage';
import { BrowseStoresPage } from './components/pages/BrowseStoresPage';
import { SearchPage } from './components/pages/SearchPage';
import { StoreProfilePage } from './components/pages/StoreProfilePage';
import { ProductDetailPage } from './components/pages/ProductDetailPage';
import { CartPage } from './components/pages/CartPage';
import { CheckoutPage } from './components/pages/CheckoutPage';
import { OrderTrackingPage } from './components/pages/OrderTrackingPage';
import { OrderHistoryPage } from './components/pages/OrderHistoryPage';
import { NotificationsPage } from './components/pages/NotificationsPage';
import { ProfilePage } from './components/pages/ProfilePage';
import { ReviewPage } from './components/pages/ReviewPage';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [pageData, setPageData] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleNavigate = (page: string, data?: any) => {
    setCurrentPage(page);
    setPageData(data);
    
    // Simulate authentication for login/register
    if (page === 'home') {
      setIsAuthenticated(true);
    } else if (page === 'login' || page === 'register') {
      setIsAuthenticated(false);
    }
    
    // Scroll to top on navigation
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage onNavigate={handleNavigate} />;
      case 'register':
        return <RegisterPage onNavigate={handleNavigate} />;
      case 'forgot-password':
        return <ForgotPasswordPage onNavigate={handleNavigate} />;
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'browse':
        return <BrowseStoresPage onNavigate={handleNavigate} />;
      case 'search':
        return <SearchPage onNavigate={handleNavigate} initialQuery={pageData?.query} />;
      case 'store':
        return <StoreProfilePage onNavigate={handleNavigate} />;
      case 'product':
        return <ProductDetailPage onNavigate={handleNavigate} />;
      case 'cart':
        return <CartPage onNavigate={handleNavigate} />;
      case 'checkout':
        return <CheckoutPage onNavigate={handleNavigate} />;
      case 'tracking':
        return <OrderTrackingPage onNavigate={handleNavigate} />;
      case 'orders':
        return <OrderHistoryPage onNavigate={handleNavigate} />;
      case 'notifications':
        return <NotificationsPage onNavigate={handleNavigate} />;
      case 'profile':
        return <ProfilePage onNavigate={handleNavigate} />;
      case 'review':
        return <ReviewPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {isAuthenticated && (
        <Navigation
          currentPage={currentPage}
          onNavigate={handleNavigate}
          cartCount={3}
          notificationCount={3}
        />
      )}
      {renderPage()}
      <Toaster />
    </div>
  );
}