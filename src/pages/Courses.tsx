import CourseCard from '@/components/CourseCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const courses = [
  {
    id: 'golovan',
    title: 'Миф и легенда в русской литературе',
    description: 'Изучите архетипы культурных героев и фольклорные элементы в произведениях классиков',
    category: 'Русская классика',
    lessons: 12,
    duration: '6 недель',
    progress: 45,
    icon: 'BookMarked'
  },
  {
    id: 'archetypes',
    title: 'Архетипы в литературе',
    description: 'Разберём героя-спасителя, трикстера и другие универсальные образы',
    category: 'Теория литературы',
    lessons: 8,
    duration: '4 недели',
    progress: 0,
    icon: 'Users'
  },
  {
    id: 'folklore',
    title: 'Фольклорное повествование',
    description: 'Устные традиции, легенды и их влияние на литературу',
    category: 'Фольклористика',
    lessons: 10,
    duration: '5 недель',
    progress: 0,
    icon: 'Library'
  },
  {
    id: 'leskov',
    title: 'Творчество Н.С. Лескова',
    description: 'Праведники, сказовая манера и уникальный язык писателя',
    category: 'Русская классика',
    lessons: 15,
    duration: '8 недель',
    progress: 20,
    icon: 'Sparkles'
  }
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 py-20 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              Онлайн-образование
            </Badge>
            <h1 className="text-6xl font-bold text-foreground mb-6 leading-tight">
              Изучайте литературу <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                глубоко и осознанно
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Авторские курсы по русской классике, теории литературы и культурологии. 
              Научитесь видеть архетипы, мифы и скрытые смыслы в текстах.
            </p>
            <div className="flex items-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Начать обучение
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-2">
              Доступные курсы
            </h2>
            <p className="text-muted-foreground">
              Выберите курс и начните своё литературное путешествие
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Icon name="SlidersHorizontal" size={18} className="mr-2" />
              Фильтры
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl p-12 text-center border-2 border-primary/20">
          <Icon name="Lightbulb" size={48} className="mx-auto mb-4 text-primary" />
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Не нашли подходящий курс?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Мы постоянно добавляем новые материалы. Подпишитесь на рассылку, 
            чтобы узнавать о новых курсах первыми.
          </p>
          <Button size="lg" variant="outline" className="border-2">
            Подписаться на обновления
          </Button>
        </div>
      </div>
    </div>
  );
}
