import { useState } from 'react';
import { Star, Camera, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';

interface ReviewPageProps {
  onNavigate: (page: string, data?: any) => void;
}

export function ReviewPage({ onNavigate }: ReviewPageProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState('');

  const order = {
    id: '#12345',
    store: 'Fresh Market',
    items: ['Organic Apples', 'Fresh Bread', 'Greek Yogurt'],
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock review submission
    onNavigate('orders');
  };

  return (
    <div className="pb-20 md:pb-8">
      <div className="bg-primary text-primary-foreground py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl mb-2">Rate Your Order</h1>
          <p className="opacity-90">Share your experience with {order.store}</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <Card className="rounded-2xl">
          <CardContent className="p-6 md:p-8">
            {/* Order Info */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl mb-2">How was your order?</h2>
              <p className="text-muted-foreground">Order {order.id} from {order.store}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Star Rating */}
              <div className="text-center">
                <Label className="mb-4 block">Your Rating</Label>
                <div className="flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`h-12 w-12 transition-colors ${
                          star <= (hoveredRating || rating)
                            ? 'text-secondary fill-secondary'
                            : 'text-muted-foreground'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                {rating > 0 && (
                  <p className="mt-4 text-muted-foreground">
                    {rating === 5 && 'Excellent!'}
                    {rating === 4 && 'Great!'}
                    {rating === 3 && 'Good'}
                    {rating === 2 && 'Could be better'}
                    {rating === 1 && 'Poor'}
                  </p>
                )}
              </div>

              {/* Comment */}
              <div>
                <Label htmlFor="comment" className="mb-2 block">
                  Tell us more (optional)
                </Label>
                <Textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share your experience with the store, delivery, and product quality..."
                  className="rounded-xl min-h-32"
                />
              </div>

              {/* Photos */}
              <div>
                <Label className="mb-3 block">Add Photos (optional)</Label>
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                  <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground mb-1">Click to upload photos</p>
                  <p className="text-sm text-muted-foreground">PNG, JPG up to 10MB</p>
                </div>
              </div>

              {/* Quick Feedback Tags */}
              <div>
                <Label className="mb-3 block">Quick Feedback</Label>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Fast Delivery',
                    'Fresh Products',
                    'Well Packaged',
                    'Great Service',
                    'Good Value',
                    'Friendly Driver',
                  ].map((tag) => (
                    <Button
                      key={tag}
                      type="button"
                      variant="outline"
                      className="rounded-full"
                      size="sm"
                    >
                      {tag}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Order Items */}
              <div>
                <Label className="mb-3 block">Items in this order</Label>
                <div className="bg-muted/50 rounded-xl p-4">
                  <ul className="space-y-2">
                    {order.items.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-3 pt-4">
                <Button
                  type="submit"
                  className="flex-1 rounded-xl bg-primary hover:bg-primary/90 h-12"
                  disabled={rating === 0}
                >
                  Submit Review
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-xl h-12"
                  onClick={() => onNavigate('orders')}
                >
                  Skip
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Privacy Notice */}
        <Card className="rounded-2xl mt-6 bg-muted/50 border-0">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground text-center">
              Your review will be visible to other customers and help improve our service
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
