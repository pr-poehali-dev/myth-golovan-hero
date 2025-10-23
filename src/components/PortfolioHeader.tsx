import { Link } from 'react-router-dom';

export default function PortfolioHeader() {
  return (
    <header className="border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="group">
            <h1 className="text-3xl font-semibold text-foreground group-hover:text-primary transition-colors">
              Анна Литвинова
            </h1>
            <p className="text-sm text-muted-foreground">Литературовед • Культуролог</p>
          </Link>
          
          <nav className="flex items-center gap-8">
            <Link 
              to="/" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Работы
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              О себе
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Контакты
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
