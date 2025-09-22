import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick?: () => void;
}

const CategoryCard = ({ icon: Icon, title, description, onClick }: CategoryCardProps) => {
  return (
    <Card 
      className="group cursor-pointer hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 p-6 text-center"
      onClick={onClick}
    >
      <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="font-semibold text-lg mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </Card>
  );
};

export default CategoryCard;