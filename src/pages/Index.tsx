import { Music, Utensils, Sparkles, Camera, Palette, Building2, ArrowRight, CheckCircle2, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/header";
import SearchBar from "@/components/ui/search-bar";
import CategoryCard from "@/components/ui/category-card";
import VendorCard from "@/components/ui/vendor-card";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const categories = [
    {
      icon: Music,
      title: "DJs",
      description: "Professional DJs for all events"
    },
    {
      icon: Utensils,
      title: "Caterers",
      description: "Delicious food for your guests"
    },
    {
      icon: Sparkles,
      title: "Decorators",
      description: "Beautiful event decoration"
    },
    {
      icon: Camera,
      title: "Photographers",
      description: "Capture your special moments"
    },
    {
      icon: Palette,
      title: "Makeup Artists",
      description: "Professional makeup services"
    },
    {
      icon: Building2,
      title: "Venues",
      description: "Perfect locations for events"
    }
  ];

  const featuredVendors = [
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
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      event: "Wedding",
      text: "EventConnect made planning our dream wedding effortless. Found amazing vendors all in one place!",
      rating: 5
    },
    {
      name: "Raj Patel",
      event: "Corporate Event",
      text: "Professional service and reliable vendors. Our company event was a huge success.",
      rating: 5
    },
    {
      name: "Anita Singh",
      event: "Birthday Party",
      text: "Great platform with verified vendors. The booking process was smooth and transparent.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        
        <div className="relative container mx-auto px-4 py-24 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Book Event Vendors
            <br />
            <span className="text-accent">Easily</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            DJs, Decorators, Caterers & More in One Place
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 h-auto">
            Start Planning Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Search Bar */}
      <section className="container mx-auto px-4 pb-16">
        <SearchBar />
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Find the Perfect Vendors</h2>
          <p className="text-xl text-muted-foreground">Browse by category to find exactly what you need</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              title={category.title}
              description={category.description}
            />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-gradient-card py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">How It Works</h2>
            <p className="text-xl text-muted-foreground">Simple steps to plan your perfect event</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Search</h3>
              <p className="text-muted-foreground">Find vendors by location, category, and availability</p>
            </div>
            
            <div className="text-center">
              <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Compare</h3>
              <p className="text-muted-foreground">Review profiles, ratings, and pricing to make the best choice</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-foreground">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Book</h3>
              <p className="text-muted-foreground">Secure your vendor with easy online booking and payment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vendors */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Vendors</h2>
          <p className="text-xl text-muted-foreground">Top-rated professionals in your area</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVendors.map((vendor) => (
            <VendorCard key={vendor.id} {...vendor} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
            View All Vendors
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-card py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground">Real experiences from real events</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 text-center bg-white border-0 shadow-soft">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <Badge variant="secondary" className="mt-1">
                    {testimonial.event}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Plan Your Event?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of satisfied customers who trust EventConnect</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <Users className="mr-2 w-5 h-5" />
              Find Vendors
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <CheckCircle2 className="mr-2 w-5 h-5" />
              Join as Vendor
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                EventConnect
              </h3>
              <p className="text-gray-300 mb-4">
                Your trusted platform for booking event vendors across India.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Customers</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Browse Vendors</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Reviews</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Vendors</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Join as Vendor</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Vendor Dashboard</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <hr className="border-gray-700 my-8" />
          
          <div className="text-center text-gray-300">
            <p>&copy; 2024 EventConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;