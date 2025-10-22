import { useState } from 'react';
import { MapPin, Search, Star, Clock, ChevronLeft, ChevronRight, ShoppingBag, Pizza, Pill, Package, Utensils, Coffee } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string, data?: any) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [location, setLocation] = useState('123 Main St, New York');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredStores = [
    {
      id: 1,
      name: 'Fresh Market',
      image: 'https://images.unsplash.com/photo-1754398006556-bedbc3b74bf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc3RvcmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTkzNDQ4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.8,
      deliveryTime: '20-30 min',
      category: 'Groceries',
    },
    {
      id: 2,
      name: 'Pizza Paradise',
      image: 'https://images.unsplash.com/photo-1644946763226-22c60fcb6635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjByZXN0YXVyYW50fGVufDF8fHx8MTc1OTQyNjIwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.6,
      deliveryTime: '25-35 min',
      category: 'Food',
    },
    {
      id: 3,
      name: 'HealthPlus Pharmacy',
      image: 'https://images.unsplash.com/photo-1523243319451-54b60322f948?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjeSUyMG1lZGljaW5lfGVufDF8fHx8MTc1OTM1NjEwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.9,
      deliveryTime: '15-25 min',
      category: 'Pharmacy',
    },
  ];

  const categories = [
    { id: 1, name: 'Groceries', icon: ShoppingBag, color: 'bg-primary' },
    { id: 2, name: 'Food', icon: Pizza, color: 'bg-secondary' },
    { id: 3, name: 'Pharmacy', icon: Pill, color: 'bg-primary' },
    { id: 4, name: 'Packages', icon: Package, color: 'bg-secondary' },
    { id: 5, name: 'Restaurants', icon: Utensils, color: 'bg-primary' },
    { id: 6, name: 'Coffee', icon: Coffee, color: 'bg-secondary' },
  ];

  const offers = [
    { id: 1, title: '50% OFF', description: 'On your first order', color: 'bg-secondary' },
    { id: 2, title: 'Free Delivery', description: 'Orders above $30', color: 'bg-primary' },
    { id: 3, title: 'Buy 1 Get 1', description: 'Selected items only', color: 'bg-secondary' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('search', { query: searchQuery });
  };

  return (
    <div className="pb-20 md:pb-8">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl mb-4">Fast Delivery to Your Door</h1>
            <p className="text-lg opacity-90">Order from your favorite stores and get it delivered instantly</p>
          </div>

          {/* Location Input */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-white rounded-2xl shadow-lg p-2 flex items-center">
              <MapPin className="h-5 w-5 text-muted-foreground ml-3" />
              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="Enter delivery location"
              />
            </div>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-2 flex items-center">
              <Search className="h-5 w-5 text-muted-foreground ml-3" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="Search for stores, items, or categories"
              />
              <Button type="submit" className="rounded-xl bg-primary hover:bg-primary/90">
                Search
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Featured Stores Slider */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl">Featured Stores</h2>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={() => setCurrentSlide(Math.min(featuredStores.length - 1, currentSlide + 1))}
                disabled={currentSlide === featuredStores.length - 1}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredStores.map((store) => (
              <Card
                key={store.id}
                className="overflow-hidden cursor-pointer hover:shadow-xl transition-shadow rounded-2xl"
                onClick={() => onNavigate('store', { id: store.id })}
              >
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback src={store.image} alt={store.name} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-2">{store.name}</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-secondary fill-secondary mr-1" />
                      <span>{store.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{store.deliveryTime}</span>
                    </div>
                  </div>
                  <Badge className="mt-2 bg-primary/10 text-primary hover:bg-primary/20">
                    {store.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mb-12">
          <h2 className="text-2xl mb-6">Browse Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 rounded-2xl"
                onClick={() => onNavigate('browse', { category: category.name })}
              >
                <CardContent className="p-6 text-center">
                  <div className={`${category.color} w-16 h-16 rounded-2xl mx-auto mb-3 flex items-center justify-center`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <p className="font-medium">{category.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Highlighted Offers */}
        <div className="mb-8">
          <h2 className="text-2xl mb-6">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer) => (
              <Card
                key={offer.id}
                className={`${offer.color} text-white border-0 rounded-2xl cursor-pointer hover:shadow-lg transition-shadow`}
              >
                <CardContent className="p-8 text-center">
                  <h3 className="text-3xl mb-2">{offer.title}</h3>
                  <p className="opacity-90">{offer.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
