import { Phone, MessageCircle, MapPin, Package, CheckCircle, Truck, Home } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Separator } from '../ui/separator';
import { Badge } from '../ui/badge';

interface OrderTrackingPageProps {
  onNavigate: (page: string, data?: any) => void;
}

export function OrderTrackingPage({ onNavigate }: OrderTrackingPageProps) {
  const order = {
    id: '#12345',
    status: 'out_for_delivery',
    estimatedTime: '15-20 min',
    driver: {
      name: 'Mike Johnson',
      phone: '+1 (555) 987-6543',
      vehicle: 'Honda Civic - ABC 123',
    },
    store: 'Fresh Market',
    items: [
      { name: 'Organic Apples', quantity: 2, price: 9.98 },
      { name: 'Fresh Bread', quantity: 1, price: 3.49 },
      { name: 'Greek Yogurt', quantity: 3, price: 17.97 },
    ],
    total: 30.43,
  };

  const trackingSteps = [
    { id: 1, label: 'Order Placed', icon: CheckCircle, status: 'completed', time: '2:30 PM' },
    { id: 2, label: 'Order Confirmed', icon: Package, status: 'completed', time: '2:35 PM' },
    { id: 3, label: 'Being Prepared', icon: Package, status: 'completed', time: '2:45 PM' },
    { id: 4, label: 'Out for Delivery', icon: Truck, status: 'active', time: '3:00 PM' },
    { id: 5, label: 'Delivered', icon: Home, status: 'pending', time: 'Soon' },
  ];

  return (
    <div className="pb-20 md:pb-8">
      <div className="bg-primary text-primary-foreground py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl mb-2">Track Order</h1>
          <p className="opacity-90">Order {order.id}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tracking Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Estimated Time */}
            <Card className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0">
              <CardContent className="p-6 text-center">
                <Package className="h-12 w-12 mx-auto mb-4" />
                <h2 className="text-2xl mb-2">Your order is on the way!</h2>
                <p className="text-lg opacity-90">Estimated arrival in {order.estimatedTime}</p>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="rounded-2xl overflow-hidden">
              <div className="h-80 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative">
                <MapPin className="h-16 w-16 text-primary animate-pulse" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                          <Truck className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="font-medium">{order.driver.name}</p>
                          <p className="text-sm text-muted-foreground">{order.driver.vehicle}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="icon" variant="outline" className="rounded-full">
                          <Phone className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="outline" className="rounded-full">
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Progress Timeline */}
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <h3 className="mb-6">Order Progress</h3>
                <div className="space-y-6">
                  {trackingSteps.map((step, index) => (
                    <div key={step.id} className="relative">
                      <div className="flex items-start">
                        <div className="relative">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              step.status === 'completed'
                                ? 'bg-primary text-primary-foreground'
                                : step.status === 'active'
                                ? 'bg-secondary text-secondary-foreground animate-pulse'
                                : 'bg-muted text-muted-foreground'
                            }`}
                          >
                            <step.icon className="h-5 w-5" />
                          </div>
                          {index < trackingSteps.length - 1 && (
                            <div
                              className={`absolute left-5 top-10 w-0.5 h-12 ${
                                step.status === 'completed' ? 'bg-primary' : 'bg-muted'
                              }`}
                            />
                          )}
                        </div>
                        <div className="ml-4 flex-1">
                          <div className="flex items-center justify-between">
                            <p className={step.status === 'active' ? 'font-semibold' : ''}>
                              {step.label}
                            </p>
                            <span className="text-sm text-muted-foreground">{step.time}</span>
                          </div>
                          {step.status === 'active' && (
                            <p className="text-sm text-muted-foreground mt-1">
                              Your driver is on the way with your order
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Details */}
          <div>
            <Card className="rounded-2xl sticky top-24">
              <CardContent className="p-6">
                <h3 className="mb-6">Order Details</h3>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-muted-foreground">Order ID</p>
                    <p className="font-medium">{order.id}</p>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-muted-foreground">Store</p>
                    <p className="font-medium">{order.store}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-muted-foreground">Status</p>
                    <Badge className="bg-secondary text-secondary-foreground">
                      Out for Delivery
                    </Badge>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="mb-6">
                  <h4 className="mb-4">Items</h4>
                  <div className="space-y-3">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {item.quantity}x {item.name}
                        </span>
                        <span>${item.price.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="flex justify-between text-lg mb-6">
                  <span>Total</span>
                  <span className="text-primary">${order.total.toFixed(2)}</span>
                </div>

                <Button
                  variant="outline"
                  className="w-full rounded-xl"
                  onClick={() => onNavigate('orders')}
                >
                  View All Orders
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
