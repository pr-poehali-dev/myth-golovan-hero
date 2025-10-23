import ProjectCard from '@/components/ProjectCard';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 'golovan-myth',
    title: 'Несмертельный Голован',
    subtitle: 'Миф и легенда в русской литературе',
    category: 'Литературный анализ',
    year: '2024',
    excerpt: 'Исследование архетипических образов и фольклорных элементов в произведении Н.С. Лескова. Анализ культурного героя-спасителя и легендарного повествования.'
  },
  {
    id: 'archetypes',
    title: 'Архетипы',
    subtitle: 'Универсальные образы в литературе',
    category: 'Теория литературы',
    year: '2024',
    excerpt: 'Разбор архетипов героя, трикстера и мудреца в мировой литературе. Как древние образы проявляются в современных текстах.'
  },
  {
    id: 'folklore-narrative',
    title: 'Фольклорное повествование',
    subtitle: 'Устные традиции в письменной культуре',
    category: 'Фольклористика',
    year: '2023',
    excerpt: 'Исследование влияния устного народного творчества на литературную форму. Приёмы сказа и легенды в классической прозе.'
  },
  {
    id: 'leskov-righteous',
    title: 'Праведники Лескова',
    subtitle: 'Образ идеального человека',
    category: 'Русская классика',
    year: '2023',
    excerpt: 'Анализ галереи праведников в творчестве Николая Лескова. Народный идеал святости и его литературное воплощение.'
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-24 px-6 bg-gradient-to-b from-muted/30 to-background">
        <div className="container max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary">
            Портфолио
          </Badge>
          <h1 className="text-6xl md:text-7xl font-semibold text-foreground mb-6 leading-tight">
            Исследования и публикации
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Литературоведческие работы, посвящённые мифологическим структурам, 
            архетипам и фольклорным традициям в русской классике
          </p>
        </div>
      </section>
      
      <section className="py-16 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-semibold text-foreground mb-2">
                Избранные работы
              </h2>
              <p className="text-muted-foreground">
                {projects.length} публикаций
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 px-6 bg-muted/20">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-foreground mb-6">
            Научные интересы
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              'Мифология в литературе',
              'Архетипический анализ',
              'Фольклорные традиции',
              'Русская классика',
              'Культурология',
              'Сравнительное литературоведение'
            ].map((interest, idx) => (
              <Badge 
                key={idx} 
                variant="outline" 
                className="px-4 py-2 text-sm border-primary/30 hover:bg-primary/10 transition-colors"
              >
                {interest}
              </Badge>
            ))}
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Специализируюсь на изучении архетипических образов, мифологических структур 
            и влияния фольклора на литературную традицию
          </p>
        </div>
      </section>
    </div>
  );
}
