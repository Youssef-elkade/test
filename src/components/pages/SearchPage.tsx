import { useState } from 'react';
import { Search, Star, Clock, SlidersHorizontal, X } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface SearchPageProps {
  onNavigate: (page: string, data?: any) => void;
  initialQuery?: string;
}

export function SearchPage({ onNavigate, initialQuery = '' }: SearchPageProps) {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [showFilters, setShowFilters] = useState(false);

  const searchResults = [
    {
      id: 1,
      name: 'Fresh Market',
      type: 'Store',
      image: 'https://images.unsplash.com/photo-1754398006556-bedbc3b74bf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc3RvcmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTkzNDQ4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.8,
      deliveryTime: '20-30 min',
      category: 'Groceries',
      location: 'Downtown',
    },
    {
      id: 2,
      name: 'Pizza Paradise',
      type: 'Store',
      image: 'https://images.unsplash.com/photo-1644946763226-22c60fcb6635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjByZXN0YXVyYW50fGVufDF8fHx8MTc1OTQyNjIwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.6,
      deliveryTime: '25-35 min',
      category: 'Food',
      location: 'Midtown',
    },
    {
      id: 3,
      name: 'HealthPlus Pharmacy',
      type: 'Store',
      image: 'https://images.unsplash.com/photo-1523243319451-54b60322f948?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjeSUyMG1lZGljaW5lfGVufDF8fHx8MTc1OTM1NjEwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.9,
      deliveryTime: '15-25 min',
      category: 'Pharmacy',
      location: 'Downtown',
    },
  ];

  const categories = ['All', 'Groceries', 'Food', 'Pharmacy', 'Restaurants'];
  const ratings = ['4.5+', '4.0+', '3.5+'];

  return (
    <div className="pb-20 md:pb-8">
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl mb-6">Search</h1>
          
          {/* Search Bar */}
          <div className="max-w-3xl">
            <div className="bg-white rounded-2xl shadow-lg p-2 flex items-center">
              <Search className="h-5 w-5 text-muted-foreground ml-3" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground"
                placeholder="Search for stores, items, or categories"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  onClick={() => setSearchQuery('')}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Filter Toggle and Results Count */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-muted-foreground">
            Found {searchResults.length} results {searchQuery && `for "${searchQuery}"`}
          </div>
          <Button
            variant="outline"
            className="rounded-xl"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            {showFilters ? 'Hide' : 'Show'} Filters
          </Button>
        </div>

        {/* Filters */}
        {showFilters && (
          <Card className="rounded-2xl mb-6">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Category Filter */}
                <div>
                  <h4 className="mb-3">Category</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center">
                        <Checkbox id={`search-cat-${category}`} />
                        <Label htmlFor={`search-cat-${category}`} className="ml-2 cursor-pointer">
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <h4 className="mb-3">Rating</h4>
                  <div className="space-y-2">
                    {ratings.map((rating) => (
                      <div key={rating} className="flex items-center">
                        <Checkbox id={`search-rating-${rating}`} />
                        <Label htmlFor={`search-rating-${rating}`} className="ml-2 cursor-pointer">
                          {rating}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Delivery Time Filter */}
                <div>
                  <h4 className="mb-3">Delivery Time</h4>
                  <div className="space-y-2">
                    {['Under 20 min', '20-30 min', '30+ min'].map((time) => (
                      <div key={time} className="flex items-center">
                        <Checkbox id={`search-time-${time}`} />
                        <Label htmlFor={`search-time-${time}`} className="ml-2 cursor-pointer">
                          {time}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <Button className="rounded-xl bg-primary hover:bg-primary/90">
                  Apply Filters
                </Button>
                <Button variant="outline" className="rounded-xl">
                  Clear All
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Search Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map((result) => (
            <Card
              key={result.id}
              className="overflow-hidden cursor-pointer hover:shadow-xl transition-shadow rounded-2xl"
              onClick={() => onNavigate('store', { id: result.id })}
            >
              <div className="h-48 overflow-hidden relative">
                <ImageWithFallback src={result.image} alt={result.name} className="w-full h-full object-cover" />
                <Badge className="absolute top-4 right-4 bg-white text-foreground">
                  {result.type}
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="mb-2">{result.name}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-secondary fill-secondary mr-1" />
                    <span>{result.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{result.deliveryTime}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                    {result.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{result.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {searchResults.length === 0 && (
          <div className="text-center py-16">
            <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl mb-2">No results found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filters to find what you're looking for
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
