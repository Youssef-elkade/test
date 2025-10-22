import { useState } from 'react';
import { Star, Clock, MapPin, SlidersHorizontal, Grid3x3, List } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { Separator } from '../ui/separator';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface BrowseStoresPageProps {
  onNavigate: (page: string, data?: any) => void;
}

export function BrowseStoresPage({ onNavigate }: BrowseStoresPageProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const stores = [
    {
      id: 1,
      name: 'Fresh Market',
      image: 'https://images.unsplash.com/photo-1754398006556-bedbc3b74bf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc3RvcmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTkzNDQ4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.8,
      reviews: 450,
      deliveryTime: '20-30 min',
      category: 'Groceries',
      area: 'Downtown',
      distance: '1.2 km',
    },
    {
      id: 2,
      name: 'Pizza Paradise',
      image: 'https://images.unsplash.com/photo-1644946763226-22c60fcb6635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjByZXN0YXVyYW50fGVufDF8fHx8MTc1OTQyNjIwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.6,
      reviews: 320,
      deliveryTime: '25-35 min',
      category: 'Food',
      area: 'Midtown',
      distance: '2.5 km',
    },
    {
      id: 3,
      name: 'HealthPlus Pharmacy',
      image: 'https://images.unsplash.com/photo-1523243319451-54b60322f948?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjeSUyMG1lZGljaW5lfGVufDF8fHx8MTc1OTM1NjEwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.9,
      reviews: 580,
      deliveryTime: '15-25 min',
      category: 'Pharmacy',
      area: 'Downtown',
      distance: '0.8 km',
    },
    {
      id: 4,
      name: 'Organic Greens',
      image: 'https://images.unsplash.com/photo-1748342319942-223b99937d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBtYXJrZXR8ZW58MXx8fHwxNzU5Mzc2ODk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.7,
      reviews: 290,
      deliveryTime: '30-40 min',
      category: 'Groceries',
      area: 'Uptown',
      distance: '3.1 km',
    },
  ];

  const categories = ['All', 'Groceries', 'Food', 'Pharmacy', 'Restaurants'];
  const areas = ['Downtown', 'Midtown', 'Uptown'];
  const ratings = ['4.5+', '4.0+', '3.5+'];

  return (
    <div className="pb-20 md:pb-8">
      <div className="bg-primary text-primary-foreground py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl mb-2">Browse Stores</h1>
          <p className="opacity-90">Discover amazing stores near you</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Controls */}
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="outline"
            className="rounded-xl md:hidden"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filters
          </Button>

          <div className="hidden md:block text-sm text-muted-foreground">
            Showing {stores.length} stores
          </div>

          <div className="flex gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="icon"
              className="rounded-lg"
              onClick={() => setViewMode('grid')}
            >
              <Grid3x3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="icon"
              className="rounded-lg"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0`}>
            <Card className="rounded-2xl sticky top-20">
              <CardContent className="p-6">
                <h3 className="mb-4">Filters</h3>

                <div className="space-y-6">
                  {/* Category Filter */}
                  <div>
                    <h4 className="mb-3 text-sm">Category</h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center">
                          <Checkbox id={`cat-${category}`} />
                          <Label htmlFor={`cat-${category}`} className="ml-2 cursor-pointer">
                            {category}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Area Filter */}
                  <div>
                    <h4 className="mb-3 text-sm">Area</h4>
                    <div className="space-y-2">
                      {areas.map((area) => (
                        <div key={area} className="flex items-center">
                          <Checkbox id={`area-${area}`} />
                          <Label htmlFor={`area-${area}`} className="ml-2 cursor-pointer">
                            {area}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Rating Filter */}
                  <div>
                    <h4 className="mb-3 text-sm">Rating</h4>
                    <div className="space-y-2">
                      {ratings.map((rating) => (
                        <div key={rating} className="flex items-center">
                          <Checkbox id={`rating-${rating}`} />
                          <Label htmlFor={`rating-${rating}`} className="ml-2 cursor-pointer">
                            {rating}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-6 rounded-xl bg-primary hover:bg-primary/90">
                  Apply Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Stores Grid/List */}
          <div className="flex-1">
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
              {stores.map((store) => (
                <Card
                  key={store.id}
                  className={`overflow-hidden cursor-pointer hover:shadow-xl transition-shadow rounded-2xl ${
                    viewMode === 'list' ? 'flex flex-row' : ''
                  }`}
                  onClick={() => onNavigate('store', { id: store.id })}
                >
                  <div className={viewMode === 'list' ? 'w-48 flex-shrink-0' : 'h-48'}>
                    <ImageWithFallback src={store.image} alt={store.name} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-4 flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3>{store.name}</h3>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                        {store.category}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-secondary fill-secondary mr-1" />
                        <span>{store.rating} ({store.reviews})</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{store.deliveryTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{store.area} • {store.distance}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
