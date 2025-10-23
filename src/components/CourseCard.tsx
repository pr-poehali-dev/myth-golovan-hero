import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  lessons: number;
  duration: string;
  progress?: number;
  icon: string;
}

export default function CourseCard({ 
  id, 
  title, 
  description, 
  category, 
  lessons, 
  duration, 
  progress,
  icon 
}: CourseCardProps) {
  return (
    <Link to={`/course/${id}`}>
      <Card className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-border h-full group">
        <div className="flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
              <Icon name={icon} size={28} className="text-primary" />
            </div>
            <Badge variant="secondary" className="bg-muted text-foreground">
              {category}
            </Badge>
          </div>
          
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
            {description}
          </p>
          
          <div className="space-y-4">
            {progress !== undefined && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Прогресс</span>
                  <span className="font-semibold text-primary">{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            )}
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <Icon name="BookOpen" size={16} />
                <span>{lessons} уроков</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={16} />
                <span>{duration}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
