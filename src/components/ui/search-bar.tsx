import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SearchBar = () => {
  return (
    <div className="bg-white rounded-2xl shadow-strong p-6 max-w-4xl mx-auto -mt-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Location
          </label>
          <Input placeholder="Enter city or area" className="border-muted" />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            Vendor Type
          </label>
          <Select>
            <SelectTrigger className="border-muted">
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dj">DJ</SelectItem>
              <SelectItem value="caterer">Caterer</SelectItem>
              <SelectItem value="decorator">Decorator</SelectItem>
              <SelectItem value="photographer">Photographer</SelectItem>
              <SelectItem value="makeup">Makeup Artist</SelectItem>
              <SelectItem value="venue">Venue</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            Event Date
          </label>
          <Input type="date" className="border-muted" />
        </div>
        
        <Button className="bg-gradient-primary hover:shadow-medium transition-all duration-300 h-12">
          <Search className="w-4 h-4 mr-2" />
          Search Vendors
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;