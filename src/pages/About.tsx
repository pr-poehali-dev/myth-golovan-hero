import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 py-16 px-6 border-b">
        <div className="container max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-primary text-primary-foreground">
            О платформе
          </Badge>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Образование нового уровня
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы создаём курсы, которые помогают глубоко понимать литературу 
            и видеть смыслы, скрытые от поверхностного взгляда
          </p>
        </div>
      </div>
      
      <div className="container max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: 'Target',
              title: 'Наша миссия',
              description: 'Сделать глубокое изучение литературы доступным каждому через понятные и увлекательные курсы'
            },
            {
              icon: 'Sparkles',
              title: 'Наш подход',
              description: 'Соединяем академические знания с живым анализом текстов, мифов и архетипов'
            },
            {
              icon: 'Users',
              title: 'Наша аудитория',
              description: 'Студенты, преподаватели и все, кто хочет понимать литературу глубже'
            }
          ].map((item, idx) => (
            <Card key={idx} className="p-6 text-center border-2 hover:shadow-lg transition-shadow">
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                <Icon name={item.icon} size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="prose prose-lg max-w-none mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Почему ЛитераУм?
          </h2>
          
          <div className="space-y-6 text-foreground/90">
            <p className="text-lg leading-relaxed">
              ЛитераУм — это образовательная платформа для тех, кто хочет понимать литературу 
              не поверхностно, а глубоко. Мы исследуем архетипы, мифологические структуры 
              и фольклорные элементы в произведениях русских и мировых классиков.
            </p>
            
            <p className="text-lg leading-relaxed">
              Наша цель — показать, что за каждым литературным образом стоят универсальные 
              человеческие смыслы, которые передаются через века. Мы учим видеть, как 
              древние мифы и легенды продолжают жить в современной литературе.
            </p>
            
            <p className="text-lg leading-relaxed">
              На наших курсах вы научитесь анализировать тексты на новом уровне, 
              распознавать культурные коды и понимать, почему определённые истории 
              продолжают волновать читателей спустя века.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl p-12 text-center border-2 border-primary/20">
          <Icon name="Mail" size={48} className="mx-auto mb-4 text-primary" />
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Свяжитесь с нами
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Есть вопросы о курсах или предложения по новым темам? 
            Мы всегда рады обратной связи от наших студентов.
          </p>
          <div className="flex items-center justify-center gap-4 text-foreground">
            <a href="mailto:info@literaum.ru" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Icon name="Mail" size={20} />
              <span>info@literaum.ru</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}