import { useState } from 'react';
import { CreditCard, Wallet, MapPin, MessageSquare, Lock } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Textarea } from '../ui/textarea';
import { Separator } from '../ui/separator';

interface CheckoutPageProps {
  onNavigate: (page: string, data?: any) => void;
}

export function CheckoutPage({ onNavigate }: CheckoutPageProps) {
  const [paymentMethod, setPaymentMethod] = useState('card');

  const orderSummary = {
    items: 3,
    subtotal: 27.44,
    deliveryFee: 2.99,
    total: 30.43,
  };

  const handlePlaceOrder = () => {
    // Mock order placement
    onNavigate('tracking', { orderId: '12345' });
  };

  return (
    <div className="pb-20 md:pb-8">
      <div className="bg-primary text-primary-foreground py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl mb-2">Checkout</h1>
          <p className="opacity-90">Complete your order</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Address */}
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h3>Delivery Address</h3>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" className="rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" className="rounded-xl" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="rounded-xl" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" placeholder="123 Main Street" className="rounded-xl" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="New York" className="rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input id="zipCode" placeholder="10001" className="rounded-xl" />
                    </div>
                  </div>

                  <Button variant="outline" className="w-full rounded-xl">
                    <MapPin className="mr-2 h-4 w-4" />
                    Use Current Location
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <Wallet className="h-5 w-5 text-primary" />
                  </div>
                  <h3>Payment Method</h3>
                </div>

                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                  <div className="flex items-center space-x-2 p-4 border border-border rounded-xl cursor-pointer hover:bg-muted/50">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex-1 cursor-pointer flex items-center">
                      <CreditCard className="mr-2 h-5 w-5 text-primary" />
                      Credit / Debit Card
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border border-border rounded-xl cursor-pointer hover:bg-muted/50">
                    <RadioGroupItem value="cash" id="cash" />
                    <Label htmlFor="cash" className="flex-1 cursor-pointer flex items-center">
                      <Wallet className="mr-2 h-5 w-5 text-primary" />
                      Cash on Delivery
                    </Label>
                  </div>
                </RadioGroup>

                {paymentMethod === 'card' && (
                  <div className="mt-6 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="rounded-xl" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" className="rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" className="rounded-xl" />
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Delivery Instructions */}
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <h3>Delivery Instructions</h3>
                </div>

                <Textarea
                  placeholder="Add any special instructions for delivery (e.g., Ring doorbell, Leave at door, etc.)"
                  className="rounded-xl min-h-24"
                />
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="rounded-2xl sticky top-24">
              <CardContent className="p-6">
                <h3 className="mb-6">Order Summary</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Items ({orderSummary.items})</span>
                    <span>${orderSummary.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Delivery Fee</span>
                    <span>${orderSummary.deliveryFee.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg">
                    <span>Total</span>
                    <span className="text-primary">${orderSummary.total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-xl p-4 mb-6 flex items-start">
                  <Lock className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Your payment information is encrypted and secure
                  </p>
                </div>

                <Button
                  className="w-full rounded-xl bg-primary hover:bg-primary/90 h-12"
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  By placing your order, you agree to our Terms & Conditions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
