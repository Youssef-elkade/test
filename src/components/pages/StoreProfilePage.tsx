import { Star, Clock, Phone, MapPin, Heart, Share2, Plus } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface StoreProfilePageProps {
  onNavigate: (page: string, data?: any) => void;
}

export function StoreProfilePage({ onNavigate }: StoreProfilePageProps) {
  const store = {
    name: 'Fresh Market',
    coverImage: 'https://images.unsplash.com/photo-1754398006556-bedbc3b74bf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc3RvcmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTkzNDQ4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    logo: 'https://images.unsplash.com/photo-1748342319942-223b99937d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBtYXJrZXR8ZW58MXx8fHwxNzU5Mzc2ODk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    reviews: 450,
    deliveryTime: '20-30 min',
    category: 'Groceries',
    phone: '+1 (555) 123-4567',
    address: '123 Main Street, Downtown, NY 10001',
    hours: 'Mon-Sun: 8:00 AM - 10:00 PM',
  };

  const products = [
    { id: 1, name: 'Organic Apples', price: 4.99, unit: 'lb', image: 'https://images.unsplash.com/photo-1657288649124-b80bdee3c17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZnJlc2glMjBwcm9kdWNlfGVufDF8fHx8MTc1OTQyNjMxNnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 2, name: 'Fresh Bread', price: 3.49, unit: 'loaf', image: 'https://images.unsplash.com/photo-1719488134786-a4c273733931?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGFja2FnaW5nJTIwYm94fGVufDF8fHx8MTc1OTQxMTY0M3ww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 3, name: 'Greek Yogurt', price: 5.99, unit: 'pack', image: 'https://images.unsplash.com/photo-1657288649124-b80bdee3c17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZnJlc2glMjBwcm9kdWNlfGVufDF8fHx8MTc1OTQyNjMxNnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 4, name: 'Avocados', price: 2.99, unit: 'each', image: 'https://images.unsplash.com/photo-1748342319942-223b99937d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBtYXJrZXR8ZW58MXx8fHwxNzU5Mzc2ODk4fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  ];

  const reviews = [
    { id: 1, author: 'John D.', rating: 5, date: '2 days ago', comment: 'Great selection and fast delivery!' },
    { id: 2, author: 'Sarah M.', rating: 4, date: '1 week ago', comment: 'Good quality products, would order again.' },
    { id: 3, author: 'Mike R.', rating: 5, date: '2 weeks ago', comment: 'Always fresh and reliable service.' },
  ];

  return (
    <div className="pb-20 md:pb-8">
      {/* Cover Image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <ImageWithFallback src={store.coverImage} alt={store.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <Button size="icon" variant="secondary" className="rounded-full">
            <Heart className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="secondary" className="rounded-full">
            <Share2 className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Store Info Header */}
        <div className="relative -mt-16 mb-8">
          <Card className="rounded-2xl shadow-xl">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Logo */}
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
                  <ImageWithFallback src={store.logo} alt={store.name} className="w-full h-full object-cover" />
                </div>

                {/* Store Details */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h1 className="text-2xl md:text-3xl mb-1">{store.name}</h1>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                        {store.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-secondary fill-secondary mr-1" />
                      <span>{store.rating} ({store.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{store.deliveryTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <p className="text-muted-foreground">{store.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Address</p>
                    <p className="text-muted-foreground">{store.address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Working Hours</p>
                    <p className="text-muted-foreground">{store.hours}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="products" className="mb-8">
          <TabsList className="mb-6 rounded-xl">
            <TabsTrigger value="products" className="rounded-lg">Products</TabsTrigger>
            <TabsTrigger value="reviews" className="rounded-lg">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow rounded-2xl"
                  onClick={() => onNavigate('product', { id: product.id })}
                >
                  <div className="h-48 overflow-hidden">
                    <ImageWithFallback src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-lg text-primary">${product.price}</p>
                        <p className="text-xs text-muted-foreground">per {product.unit}</p>
                      </div>
                      <Button size="icon" className="rounded-full bg-primary hover:bg-primary/90">
                        <Plus className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reviews">
            <div className="space-y-4">
              {reviews.map((review) => (
                <Card key={review.id} className="rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4>{review.author}</h4>
                        <p className="text-sm text-muted-foreground">{review.date}</p>
                      </div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? 'text-secondary fill-secondary'
                                : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
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
