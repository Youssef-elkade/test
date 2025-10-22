import { useState } from 'react';
import { Star, Heart, Share2, Minus, Plus, ShoppingCart } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ProductDetailPageProps {
  onNavigate: (page: string, data?: any) => void;
}

export function ProductDetailPage({ onNavigate }: ProductDetailPageProps) {
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    name: 'Organic Apples',
    description: 'Fresh, crisp organic apples sourced from local farms. Perfect for snacking, baking, or adding to your favorite recipes. Rich in vitamins and fiber.',
    price: 4.99,
    unit: 'lb',
    image: 'https://images.unsplash.com/photo-1657288649124-b80bdee3c17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZnJlc2glMjBwcm9kdWNlfGVufDF8fHx8MTc1OTQyNjMxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    reviews: 128,
    inStock: true,
    store: 'Fresh Market',
    category: 'Fruits & Vegetables',
  };

  const reviews = [
    { id: 1, author: 'Emily R.', rating: 5, date: '1 day ago', comment: 'Best apples I\'ve had! Fresh and crunchy.' },
    { id: 2, author: 'David L.', rating: 4, date: '3 days ago', comment: 'Good quality, though slightly expensive.' },
    { id: 3, author: 'Lisa K.', rating: 5, date: '1 week ago', comment: 'Always get these, they\'re perfect for lunch boxes!' },
  ];

  const handleAddToCart = () => {
    // Mock add to cart
    onNavigate('cart');
  };

  return (
    <div className="pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="relative">
            <div className="sticky top-24">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback src={product.image} alt={product.name} className="w-full aspect-square object-cover" />
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                <Button size="icon" variant="secondary" className="rounded-full">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="secondary" className="rounded-full">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-4">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-3">
                {product.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl mb-2">{product.name}</h1>
              <p className="text-muted-foreground cursor-pointer hover:underline" onClick={() => onNavigate('store')}>
                Sold by {product.store}
              </p>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-secondary fill-secondary'
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              <span className="text-muted-foreground">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <Separator className="my-6" />

            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl text-primary">${product.price}</span>
                <span className="text-muted-foreground">per {product.unit}</span>
              </div>
              {product.inStock ? (
                <Badge className="bg-primary/10 text-primary">In Stock</Badge>
              ) : (
                <Badge variant="destructive">Out of Stock</Badge>
              )}
            </div>

            <Separator className="my-6" />

            <div className="mb-6">
              <h3 className="mb-3">Description</h3>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            <Separator className="my-6" />

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-xl">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-l-xl"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="w-16 text-center">{quantity}</div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-r-xl"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-xl">
                  Total: <span className="text-primary">${(product.price * quantity).toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                className="flex-1 rounded-xl bg-primary hover:bg-primary/90 h-14"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="outline" className="flex-1 rounded-xl h-14">
                Buy Now
              </Button>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl">Customer Reviews</h2>
            <Button variant="outline" className="rounded-xl" onClick={() => onNavigate('review')}>
              Write a Review
            </Button>
          </div>

          <div className="space-y-4">
            {reviews.map((review) => (
              <Card key={review.id} className="rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
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
        </div>
      </div>
    </div>
  );
}
