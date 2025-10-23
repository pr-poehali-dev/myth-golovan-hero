import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-b from-muted/30 to-background py-20 px-6">
        <div className="container max-w-3xl mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary">
            О себе
          </Badge>
          <h1 className="text-6xl font-semibold text-foreground mb-6">
            Анна Литвинова
          </h1>
          <p className="text-xl text-muted-foreground">
            Литературовед • Культуролог • Исследователь
          </p>
        </div>
      </div>
      
      <div className="container max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none mb-16">
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-lg">
              Занимаюсь исследованием мифологических структур, архетипических образов 
              и фольклорных традиций в русской классической литературе. Особый интерес 
              представляет творчество Н.С. Лескова и его уникальный подход к созданию 
              народных характеров.
            </p>
            
            <p className="text-lg">
              Моя цель — показать, как древние мифы и легенды продолжают жить 
              в литературе, создавая глубинные пласты смысла. Я верю, что понимание 
              архетипических структур помогает увидеть универсальные человеческие 
              ценности, заложенные в текстах.
            </p>
            
            <p className="text-lg">
              В своих работах стремлюсь соединить академический подход с живым 
              анализом, делая сложные литературоведческие концепции доступными 
              для широкой аудитории.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 border-border/50">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Icon name="GraduationCap" size={28} className="text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  Образование
                </h3>
                <p className="text-muted-foreground">
                  Филологический факультет МГУ
                </p>
              </div>
            </div>
            <ul className="space-y-3 text-foreground/80">
              <li>• Магистр филологии</li>
              <li>• Специализация: русская литература XIX века</li>
              <li>• Диссертация по творчеству Н.С. Лескова</li>
            </ul>
          </Card>
          
          <Card className="p-8 border-border/50">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Icon name="Briefcase" size={28} className="text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  Опыт
                </h3>
                <p className="text-muted-foreground">
                  Исследовательская деятельность
                </p>
              </div>
            </div>
            <ul className="space-y-3 text-foreground/80">
              <li>• Публикации в научных журналах</li>
              <li>• Участие в конференциях</li>
              <li>• Преподавание литературы</li>
            </ul>
          </Card>
        </div>
        
        <div className="mb-16">
          <h2 className="text-4xl font-semibold text-foreground mb-8 text-center">
            Области исследования
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: 'Sparkles',
                title: 'Мифология',
                description: 'Архетипы и мифологические структуры в литературе'
              },
              {
                icon: 'BookOpen',
                title: 'Фольклор',
                description: 'Влияние устных традиций на письменную культуру'
              },
              {
                icon: 'Feather',
                title: 'Русская классика',
                description: 'Анализ произведений XIX века'
              }
            ].map((area, idx) => (
              <Card key={idx} className="p-6 text-center border-border/50 hover:shadow-lg transition-shadow">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                  <Icon name={area.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {area.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
        
        <Card className="p-12 bg-gradient-to-br from-primary/5 to-muted border-border/50">
          <div className="text-center max-w-2xl mx-auto">
            <Icon name="Quote" size={48} className="mx-auto mb-6 text-primary/40" />
            <blockquote className="text-2xl font-light text-foreground/90 italic leading-relaxed mb-6">
              «Истинная святость и праведность живут не только в церковных святцах, 
              но и среди простого народа, в самой гуще жизни»
            </blockquote>
            <cite className="text-muted-foreground">— Н.С. Лесков</cite>
          </div>
        </Card>
      </div>
    </div>
  );
}
