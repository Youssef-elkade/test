import { User, Mail, Phone, MapPin, CreditCard, Bell, Lock, LogOut, ChevronRight, Plus } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Separator } from '../ui/separator';
import { Switch } from '../ui/switch';
import { Avatar, AvatarFallback } from '../ui/avatar';

interface ProfilePageProps {
  onNavigate: (page: string, data?: any) => void;
}

export function ProfilePage({ onNavigate }: ProfilePageProps) {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
  };

  const addresses = [
    { id: 1, label: 'Home', address: '123 Main Street, Downtown, NY 10001', default: true },
    { id: 2, label: 'Work', address: '456 Office Park, Midtown, NY 10002', default: false },
  ];

  const paymentMethods = [
    { id: 1, type: 'Visa', last4: '4242', expiry: '12/25', default: true },
    { id: 2, type: 'Mastercard', last4: '8888', expiry: '09/26', default: false },
  ];

  return (
    <div className="pb-20 md:pb-8">
      <div className="bg-primary text-primary-foreground py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl mb-2">Profile & Settings</h1>
          <p className="opacity-90">Manage your account and preferences</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Profile Info */}
        <Card className="rounded-2xl mb-6">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <Avatar className="w-20 h-20">
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-2xl mb-1">{user.name}</h2>
                <p className="text-muted-foreground">{user.email}</p>
              </div>
              <Button variant="outline" className="rounded-xl">
                Edit Photo
              </Button>
            </div>

            <Separator className="my-6" />

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="name" defaultValue={user.name} className="pl-10 rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="email" type="email" defaultValue={user.email} className="pl-10 rounded-xl" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="phone" type="tel" defaultValue={user.phone} className="pl-10 rounded-xl" />
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button className="rounded-xl bg-primary hover:bg-primary/90">
                Save Changes
              </Button>
              <Button variant="outline" className="rounded-xl">
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Saved Addresses */}
        <Card className="rounded-2xl mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3>Saved Addresses</h3>
              <Button variant="outline" size="sm" className="rounded-xl">
                <Plus className="h-4 w-4 mr-2" />
                Add New
              </Button>
            </div>

            <div className="space-y-3">
              {addresses.map((address) => (
                <div key={address.id} className="flex items-start gap-3 p-4 border border-border rounded-xl hover:bg-muted/50 transition-colors">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4>{address.label}</h4>
                      {address.default && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Default</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{address.address}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payment Methods */}
        <Card className="rounded-2xl mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3>Payment Methods</h3>
              <Button variant="outline" size="sm" className="rounded-xl">
                <Plus className="h-4 w-4 mr-2" />
                Add Card
              </Button>
            </div>

            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <div key={method.id} className="flex items-center gap-3 p-4 border border-border rounded-xl hover:bg-muted/50 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4>{method.type} •••• {method.last4}</h4>
                      {method.default && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Default</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">Expires {method.expiry}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Notifications Settings */}
        <Card className="rounded-2xl mb-6">
          <CardContent className="p-6">
            <h3 className="mb-6">Notification Preferences</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Order Updates</p>
                    <p className="text-sm text-muted-foreground">Get notified about your order status</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Promotions & Offers</p>
                    <p className="text-sm text-muted-foreground">Receive special deals and discounts</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">New Stores</p>
                    <p className="text-sm text-muted-foreground">Get notified when new stores are available</p>
                  </div>
                </div>
                <Switch />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Actions */}
        <div className="space-y-3">
          <Button variant="outline" className="w-full rounded-xl justify-between h-14">
            <div className="flex items-center">
              <Lock className="h-5 w-5 mr-3 text-muted-foreground" />
              Change Password
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </Button>

          <Button
            variant="outline"
            className="w-full rounded-xl justify-start h-14 text-destructive hover:text-destructive hover:bg-destructive/10"
            onClick={() => onNavigate('login')}
          >
            <LogOut className="h-5 w-5 mr-3" />
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
}
