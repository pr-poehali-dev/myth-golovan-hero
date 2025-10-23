import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container max-w-5xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-semibold text-foreground hover:opacity-80 transition-opacity">
            MINIMALIST BLOG
          </Link>
          
          <nav className="flex items-center gap-8">
            <Link 
              to="/" 
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Статьи
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Об авторе
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
