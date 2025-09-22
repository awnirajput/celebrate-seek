import { useState } from "react";
import { Filter, SlidersHorizontal, MapPin, Star, Grid3X3, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/header";
import VendorCard from "@/components/ui/vendor-card";

const Vendors = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState([5000, 50000]);

  const mockVendors = [
    {
      id: "1",
      name: "Elite Sound Productions",
      category: "DJ Services",
      location: "Mumbai, Maharashtra",
      rating: 4.8,
      reviewCount: 124,
      price: "₹15,000",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      isAvailable: true
    },
    {
      id: "2",
      name: "Royal Caterers",
      category: "Catering",
      location: "Delhi, NCR",
      rating: 4.9,
      reviewCount: 89,
      price: "₹800/plate",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=300&fit=crop",
      isAvailable: true
    },
    {
      id: "3",
      name: "Dreamscape Decorators",
      category: "Event Decoration",
      location: "Bangalore, Karnataka",
      rating: 4.7,
      reviewCount: 156,
      price: "₹25,000",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop",
      isAvailable: true
    },
    {
      id: "4",
      name: "Capture Moments Photography",
      category: "Photography",
      location: "Chennai, Tamil Nadu",
      rating: 4.6,
      reviewCount: 203,
      price: "₹20,000",
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=300&fit=crop",
      isAvailable: false
    },
    {
      id: "5",
      name: "Glamour Beauty Studio",
      category: "Makeup Artist",
      location: "Pune, Maharashtra",
      rating: 4.8,
      reviewCount: 78,
      price: "₹8,000",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop",
      isAvailable: true
    },
    {
      id: "6",
      name: "Grand Palace Venues",
      category: "Venue",
      location: "Hyderabad, Telangana",
      rating: 4.5,
      reviewCount: 145,
      price: "₹75,000",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=300&fit=crop",
      isAvailable: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-card py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-4">Browse Vendors</h1>
          <p className="text-xl text-muted-foreground">Find the perfect professionals for your event</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <Card className="p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <SlidersHorizontal className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold text-foreground">Filters</h2>
              </div>

              {/* Location Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-foreground">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Location
                </label>
                <Input placeholder="Enter city or area" />
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-foreground">Category</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="dj">DJ Services</SelectItem>
                    <SelectItem value="catering">Catering</SelectItem>
                    <SelectItem value="decoration">Event Decoration</SelectItem>
                    <SelectItem value="photography">Photography</SelectItem>
                    <SelectItem value="makeup">Makeup Artist</SelectItem>
                    <SelectItem value="venue">Venue</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Budget Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Budget Range: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
                </label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={100000}
                  min={1000}
                  step={1000}
                  className="mt-2"
                />
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-foreground">Minimum Rating</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="4.5">4.5+ Stars</SelectItem>
                    <SelectItem value="4.0">4.0+ Stars</SelectItem>
                    <SelectItem value="3.5">3.5+ Stars</SelectItem>
                    <SelectItem value="3.0">3.0+ Stars</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Availability Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-foreground">Availability</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="available">Available Now</SelectItem>
                    <SelectItem value="this-week">This Week</SelectItem>
                    <SelectItem value="this-month">This Month</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full bg-gradient-primary">
                <Filter className="w-4 h-4 mr-2" />
                Apply Filters
              </Button>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-foreground">
                  {mockVendors.length} Vendors Found
                </h2>
                <p className="text-muted-foreground">Showing results for all categories</p>
              </div>

              <div className="flex items-center gap-4">
                {/* Sort By */}
                <Select defaultValue="rating">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="reviews">Most Reviews</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Mode Toggle */}
                <div className="flex rounded-lg border border-border p-1">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="px-3"
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="px-3"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Vendors Grid/List */}
            <div className={`grid gap-6 ${
              viewMode === "grid" 
                ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" 
                : "grid-cols-1"
            }`}>
              {mockVendors.map((vendor) => (
                <VendorCard key={vendor.id} {...vendor} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" disabled>Previous</Button>
                <Button variant="default">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vendors;