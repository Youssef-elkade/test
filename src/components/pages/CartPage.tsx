import { useState } from 'react';
import { Minus, Plus, Trash2, Tag, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Separator } from '../ui/separator';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface CartPageProps {
  onNavigate: (page: string, data?: any) => void;
}

export function CartPage({ onNavigate }: CartPageProps) {
  const [couponCode, setCouponCode] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('standard');

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Organic Apples',
      price: 4.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1657288649124-b80bdee3c17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZnJlc2glMjBwcm9kdWNlfGVufDF8fHx8MTc1OTQyNjMxNnww&ixlib=rb-4.1.0&q=80&w=1080',
      store: 'Fresh Market',
    },
    {
      id: 2,
      name: 'Fresh Bread',
      price: 3.49,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1719488134786-a4c273733931?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGFja2FnaW5nJTIwYm94fGVufDF8fHx8MTc1OTQxMTY0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      store: 'Fresh Market',
    },
    {
      id: 3,
      name: 'Greek Yogurt',
      price: 5.99,
      quantity: 3,
      image: 'https://images.unsplash.com/photo-1657288649124-b80bdee3c17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZnJlc2glMjBwcm9kdWNlfGVufDF8fHx8MTc1OTQyNjMxNnww&ixlib=rb-4.1.0&q=80&w=1080',
      store: 'Fresh Market',
    },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = deliveryOption === 'express' ? 5.99 : 2.99;
  const discount = 0;
  const total = subtotal + deliveryFee - discount;

  return (
    <div className="pb-20 md:pb-8">
      <div className="bg-primary text-primary-foreground py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl mb-2">Shopping Cart</h1>
          <p className="opacity-90">{cartItems.length} items in your cart</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {cartItems.length === 0 ? (
          <Card className="rounded-2xl text-center py-16">
            <CardContent>
              <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <Trash2 className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground mb-6">Add some items to get started!</p>
              <Button className="rounded-xl bg-primary hover:bg-primary/90" onClick={() => onNavigate('home')}>
                Start Shopping
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="rounded-2xl">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                        <ImageWithFallback src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="mb-1">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">{item.store}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-destructive hover:text-destructive hover:bg-destructive/10 rounded-full"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center border border-border rounded-xl">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-l-xl"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <div className="w-12 text-center text-sm">{item.quantity}</div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-r-xl"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <div className="text-lg text-primary">${(item.price * item.quantity).toFixed(2)}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div>
              <Card className="rounded-2xl sticky top-24">
                <CardContent className="p-6">
                  <h3 className="mb-6">Order Summary</h3>

                  {/* Coupon Code */}
                  <div className="mb-6">
                    <Label className="mb-2 block">Have a coupon?</Label>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          placeholder="Enter code"
                          className="pl-10 rounded-xl"
                        />
                      </div>
                      <Button variant="outline" className="rounded-xl">Apply</Button>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  {/* Delivery Options */}
                  <div className="mb-6">
                    <Label className="mb-3 block">Delivery Option</Label>
                    <RadioGroup value={deliveryOption} onValueChange={setDeliveryOption}>
                      <div className="flex items-center space-x-2 mb-3 p-3 border border-border rounded-xl cursor-pointer hover:bg-muted/50">
                        <RadioGroupItem value="standard" id="standard" />
                        <Label htmlFor="standard" className="flex-1 cursor-pointer">
                          <div className="flex justify-between">
                            <span>Standard (20-30 min)</span>
                            <span className="text-muted-foreground">$2.99</span>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border border-border rounded-xl cursor-pointer hover:bg-muted/50">
                        <RadioGroupItem value="express" id="express" />
                        <Label htmlFor="express" className="flex-1 cursor-pointer">
                          <div className="flex justify-between">
                            <span>Express (10-15 min)</span>
                            <span className="text-muted-foreground">$5.99</span>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Separator className="my-6" />

                  {/* Price Breakdown */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Delivery Fee</span>
                      <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-primary">
                        <span>Discount</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    <Separator />
                    <div className="flex justify-between text-lg">
                      <span>Total</span>
                      <span className="text-primary">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button
                    className="w-full rounded-xl bg-primary hover:bg-primary/90 h-12"
                    onClick={() => onNavigate('checkout')}
                  >
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
