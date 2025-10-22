import { Package, Tag, Star, Bell, Trash2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';

interface NotificationsPageProps {
  onNavigate: (page: string, data?: any) => void;
}

export function NotificationsPage({ onNavigate }: NotificationsPageProps) {
  const notifications = [
    {
      id: 1,
      type: 'order',
      icon: Package,
      title: 'Order Delivered',
      message: 'Your order #12345 has been delivered successfully',
      time: '5 minutes ago',
      read: false,
      color: 'bg-primary',
    },
    {
      id: 2,
      type: 'offer',
      icon: Tag,
      title: '50% OFF on First Order',
      message: 'Use code FIRST50 and get 50% discount on your first order',
      time: '1 hour ago',
      read: false,
      color: 'bg-secondary',
    },
    {
      id: 3,
      type: 'review',
      icon: Star,
      title: 'Rate Your Order',
      message: 'How was your experience with Fresh Market? Share your feedback',
      time: '2 hours ago',
      read: false,
      color: 'bg-primary',
    },
    {
      id: 4,
      type: 'order',
      icon: Package,
      title: 'Order Out for Delivery',
      message: 'Your order #12346 is on the way. Expected arrival in 15 minutes',
      time: '3 hours ago',
      read: true,
      color: 'bg-primary',
    },
    {
      id: 5,
      type: 'offer',
      icon: Tag,
      title: 'Weekend Special',
      message: 'Get free delivery on all orders this weekend!',
      time: '1 day ago',
      read: true,
      color: 'bg-secondary',
    },
    {
      id: 6,
      type: 'order',
      icon: Package,
      title: 'Order Confirmed',
      message: 'Your order #12344 has been confirmed by Pizza Paradise',
      time: '2 days ago',
      read: true,
      color: 'bg-primary',
    },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="pb-20 md:pb-8">
      <div className="bg-primary text-primary-foreground py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl mb-2">Notifications</h1>
          <p className="opacity-90">
            {unreadCount > 0 ? `You have ${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}` : 'All caught up!'}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Actions */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2">
            <Button variant="outline" className="rounded-xl">
              All
            </Button>
            <Button variant="ghost" className="rounded-xl">
              Orders
            </Button>
            <Button variant="ghost" className="rounded-xl">
              Offers
            </Button>
          </div>
          <Button variant="ghost" className="rounded-xl text-muted-foreground">
            Mark all as read
          </Button>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {notifications.map((notification, index) => (
            <div key={notification.id}>
              <Card
                className={`rounded-2xl cursor-pointer hover:shadow-lg transition-shadow ${
                  !notification.read ? 'border-l-4 border-l-primary' : ''
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className={`w-12 h-12 rounded-xl ${notification.color} ${notification.color === 'bg-secondary' ? 'text-secondary-foreground' : 'text-primary-foreground'} flex items-center justify-center flex-shrink-0`}>
                      <notification.icon className="h-6 w-6" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="truncate">{notification.title}</h4>
                        {!notification.read && (
                          <Badge className="bg-destructive text-destructive-foreground flex-shrink-0">New</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                        {notification.message}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                        <div className="flex gap-2">
                          {notification.type === 'order' && (
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 rounded-lg text-primary"
                              onClick={() => onNavigate('tracking')}
                            >
                              View Order
                            </Button>
                          )}
                          {notification.type === 'review' && (
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 rounded-lg text-primary"
                              onClick={() => onNavigate('review')}
                            >
                              Write Review
                            </Button>
                          )}
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0 rounded-lg text-muted-foreground hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {notifications.length === 0 && (
          <Card className="rounded-2xl text-center py-16">
            <CardContent>
              <Bell className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl mb-2">No notifications yet</h3>
              <p className="text-muted-foreground">
                We'll notify you when something important happens
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
