import ArticleCard from '@/components/ArticleCard';

const articles = [
  {
    id: '1',
    title: 'Черты Мифа в образе Голована',
    excerpt: 'Миф объясняет мир, создает архетипические, фундаментальные образы. Голован во многом соответствует таким архетипам...',
    date: '23 октября 2025'
  },
  {
    id: '2',
    title: 'Архетип Культурного Героя',
    excerpt: 'Спаситель от стихии: Главный подвиг Голована — спасение людей и скота во время чумы. Он не просто помогает, а возглавляет борьбу...',
    date: '20 октября 2025'
  },
  {
    id: '3',
    title: 'Легенда в структуре повествования',
    excerpt: 'Легенда — это народное предание о выдающемся событии или человеке, основанное на реальности, но сильно приукрашенное...',
    date: '18 октября 2025'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-5xl mx-auto px-6 py-16">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Статьи
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Коллекция мыслей о литературе, культуре и философии
          </p>
        </div>
        
        <div className="space-y-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
}
