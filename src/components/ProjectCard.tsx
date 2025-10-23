import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  excerpt: string;
  image?: string;
}

export default function ProjectCard({ 
  id, 
  title, 
  subtitle, 
  category, 
  year, 
  excerpt 
}: ProjectCardProps) {
  return (
    <Link to={`/project/${id}`}>
      <Card className="overflow-hidden group hover:shadow-xl transition-all duration-500 border-border/50 h-full">
        <div className="aspect-[16/10] bg-gradient-to-br from-primary/5 via-muted to-primary/10 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <h3 className="text-3xl font-semibold text-center text-foreground/80 leading-tight">
              {title}
            </h3>
          </div>
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
              {year}
            </Badge>
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20">
              {category}
            </Badge>
            <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {subtitle}
            </h4>
          </div>
          
          <p className="text-muted-foreground leading-relaxed line-clamp-3">
            {excerpt}
          </p>
          
          <div className="pt-4">
            <span className="text-sm font-medium text-primary group-hover:underline">
              Читать полностью →
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
