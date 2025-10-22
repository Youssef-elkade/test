import { Home, Search, ShoppingCart, Package, User, Bell } from 'lucide-react';
import { Badge } from '../ui/badge';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  cartCount?: number;
  notificationCount?: number;
}

export function Navigation({ currentPage, onNavigate, cartCount = 0, notificationCount = 0 }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'browse', label: 'Browse', icon: Search },
    { id: 'cart', label: 'Cart', icon: ShoppingCart, badge: cartCount },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="bg-primary rounded-lg p-2 mr-2">
              <Package className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold text-foreground">QuickDeliver</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative flex items-center px-4 py-2 rounded-lg transition-colors ${
                  currentPage === item.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                <item.icon className="h-5 w-5 mr-2" />
                <span>{item.label}</span>
                {item.badge !== undefined && item.badge > 0 && (
                  <Badge className="ml-2 bg-secondary text-secondary-foreground">{item.badge}</Badge>
                )}
              </button>
            ))}
            <button
              onClick={() => onNavigate('notifications')}
              className="relative p-2 ml-2 rounded-lg text-foreground hover:bg-muted transition-colors"
            >
              <Bell className="h-5 w-5" />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {notificationCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button
              onClick={() => onNavigate('notifications')}
              className="relative p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
            >
              <Bell className="h-5 w-5" />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {notificationCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-lg z-50">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`relative flex flex-col items-center px-3 py-2 rounded-lg transition-colors ${
                currentPage === item.id ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs mt-1">{item.label}</span>
              {item.badge !== undefined && item.badge > 0 && (
                <span className="absolute top-0 right-2 bg-secondary text-secondary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
