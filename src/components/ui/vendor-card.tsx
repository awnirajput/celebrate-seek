import { Star, MapPin, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface VendorCardProps {
  id: string;
  name: string;
  category: string;
  location: string;
  rating: number;
  reviewCount: number;
  price: string;
  image: string;
  isAvailable?: boolean;
  isFavorite?: boolean;
  onViewProfile?: () => void;
  onToggleFavorite?: () => void;
}

const VendorCard = ({ 
  name, 
  category, 
  location, 
  rating, 
  reviewCount, 
  price, 
  image, 
  isAvailable = true,
  isFavorite = false,
  onViewProfile,
  onToggleFavorite 
}: VendorCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-0 bg-white">
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 bg-white/90 hover:bg-white"
          onClick={onToggleFavorite}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
        </Button>
        {!isAvailable && (
          <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
            <Badge variant="secondary" className="bg-white text-gray-900">
              Not Available
            </Badge>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-lg text-foreground">{name}</h3>
            <p className="text-primary font-medium text-sm">{category}</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-foreground">{price}</p>
            <p className="text-xs text-muted-foreground">starting from</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{location}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="font-medium text-sm">{rating}</span>
            <span className="text-muted-foreground text-sm">({reviewCount} reviews)</span>
          </div>
          
          <Button 
            variant="outline" 
            size="sm"
            className="border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            onClick={onViewProfile}
          >
            View Profile
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default VendorCard;