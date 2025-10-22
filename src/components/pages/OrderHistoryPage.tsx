import { Package, Clock, CheckCircle, RotateCw, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

interface OrderHistoryPageProps {
  onNavigate: (page: string, data?: any) => void;
}

export function OrderHistoryPage({ onNavigate }: OrderHistoryPageProps) {
  const orders = [
    {
      id: '#12345',
      date: 'Oct 2, 2025',
      store: 'Fresh Market',
      items: 3,
      total: 30.43,
      status: 'delivered',
      deliveredAt: '3:15 PM',
    },
    {
      id: '#12344',
      date: 'Sep 28, 2025',
      store: 'Pizza Paradise',
      items: 2,
      total: 24.99,
      status: 'delivered',
      deliveredAt: '7:30 PM',
    },
    {
      id: '#12343',
      date: 'Sep 25, 2025',
      store: 'HealthPlus Pharmacy',
      items: 1,
      total: 15.99,
      status: 'delivered',
      deliveredAt: '11:45 AM',
    },
    {
      id: '#12342',
      date: 'Sep 22, 2025',
      store: 'Fresh Market',
      items: 5,
      total: 45.67,
      status: 'delivered',
      deliveredAt: '2:20 PM',
    },
  ];

  const activeOrders = [
    {
      id: '#12346',
      date: 'Oct 2, 2025',
      store: 'Organic Greens',
      items: 4,
      total: 38.50,
      status: 'preparing',
      estimatedTime: '25-30 min',
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'delivered':
        return (
          <Badge className="bg-primary/10 text-primary">
            <CheckCircle className="h-3 w-3 mr-1" />
            Delivered
          </Badge>
        );
      case 'preparing':
        return (
          <Badge className="bg-secondary/10 text-secondary-foreground">
            <Clock className="h-3 w-3 mr-1" />
            Preparing
          </Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="pb-20 md:pb-8">
      <div className="bg-primary text-primary-foreground py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl mb-2">My Orders</h1>
          <p className="opacity-90">Track and manage your orders</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="active" className="mb-8">
          <TabsList className="mb-6 rounded-xl">
            <TabsTrigger value="active" className="rounded-lg">
              Active Orders ({activeOrders.length})
            </TabsTrigger>
            <TabsTrigger value="history" className="rounded-lg">
              Order History ({orders.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active">
            {activeOrders.length === 0 ? (
              <Card className="rounded-2xl text-center py-16">
                <CardContent>
                  <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl mb-2">No active orders</h3>
                  <p className="text-muted-foreground mb-6">Start shopping to see your orders here</p>
                  <Button className="rounded-xl bg-primary hover:bg-primary/90" onClick={() => onNavigate('home')}>
                    Start Shopping
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {activeOrders.map((order) => (
                  <Card
                    key={order.id}
                    className="rounded-2xl cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => onNavigate('tracking', { orderId: order.id })}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                            <Package className="h-6 w-6 text-secondary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3>{order.id}</h3>
                              {getStatusBadge(order.status)}
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">{order.store} • {order.items} items</p>
                            <p className="text-sm text-muted-foreground">
                              Estimated: {order.estimatedTime}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between md:justify-end gap-4">
                          <div className="text-right">
                            <p className="text-lg text-primary">${order.total.toFixed(2)}</p>
                            <p className="text-sm text-muted-foreground">{order.date}</p>
                          </div>
                          <ChevronRight className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-border">
                        <Button
                          className="w-full md:w-auto rounded-xl bg-primary hover:bg-primary/90"
                          onClick={(e) => {
                            e.stopPropagation();
                            onNavigate('tracking', { orderId: order.id });
                          }}
                        >
                          Track Order
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="history">
            <div className="space-y-4">
              {orders.map((order) => (
                <Card key={order.id} className="rounded-2xl hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3>{order.id}</h3>
                            {getStatusBadge(order.status)}
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">{order.store} • {order.items} items</p>
                          <p className="text-sm text-muted-foreground">
                            Delivered at {order.deliveredAt}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between md:justify-end gap-4">
                        <div className="text-right">
                          <p className="text-lg">${order.total.toFixed(2)}</p>
                          <p className="text-sm text-muted-foreground">{order.date}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border flex gap-3">
                      <Button
                        variant="outline"
                        className="flex-1 md:flex-none rounded-xl"
                        onClick={() => onNavigate('review', { orderId: order.id })}
                      >
                        Write Review
                      </Button>
                      <Button
                        className="flex-1 md:flex-none rounded-xl bg-primary hover:bg-primary/90"
                      >
                        <RotateCw className="h-4 w-4 mr-2" />
                        Reorder
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
