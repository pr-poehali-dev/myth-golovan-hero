import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
}

export default function ArticleCard({ id, title, excerpt, date }: ArticleCardProps) {
  return (
    <Card className="p-8 hover:shadow-lg transition-shadow duration-300 border border-border">
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-2 leading-tight">
            {title}
          </h2>
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>
        
        <p className="text-foreground/80 leading-relaxed">
          {excerpt}
        </p>
        
        <Link to={`/article/${id}`}>
          <Button 
            variant="outline" 
            className="mt-4 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            READ MORE
          </Button>
        </Link>
      </div>
    </Card>
  );
}
