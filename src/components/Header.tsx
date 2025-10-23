import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-2 bg-primary rounded-lg group-hover:scale-110 transition-transform">
              <Icon name="GraduationCap" size={24} className="text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ЛитераУм
            </span>
          </Link>
          
          <nav className="flex items-center gap-8">
            <Link 
              to="/" 
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              Курсы
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              О платформе
            </Link>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              Начать учиться
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}