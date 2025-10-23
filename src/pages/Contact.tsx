import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-b from-muted/30 to-background py-20 px-6">
        <div className="container max-w-3xl mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary">
            Контакты
          </Badge>
          <h1 className="text-6xl font-semibold text-foreground mb-6">
            Свяжитесь со мной
          </h1>
          <p className="text-xl text-muted-foreground">
            Открыта к сотрудничеству и научным дискуссиям
          </p>
        </div>
      </div>
      
      <div className="container max-w-4xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 border-border/50 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Icon name="Mail" size={28} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Email
                </h3>
                <a 
                  href="mailto:a.litvinova@example.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  a.litvinova@example.com
                </a>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Для научных запросов и сотрудничества
            </p>
          </Card>
          
          <Card className="p-8 border-border/50 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Icon name="FileText" size={28} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Публикации
                </h3>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Academia.edu
                </a>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Полный список научных работ
            </p>
          </Card>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">
            Интересные темы для обсуждения
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: 'MessageCircle',
                title: 'Научное сотрудничество',
                description: 'Совместные исследования и публикации'
              },
              {
                icon: 'Presentation',
                title: 'Выступления',
                description: 'Лекции и доклады на конференциях'
              },
              {
                icon: 'Users',
                title: 'Консультации',
                description: 'Помощь студентам и исследователям'
              },
              {
                icon: 'BookOpen',
                title: 'Рецензирование',
                description: 'Экспертная оценка работ'
              }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-muted/30 rounded-lg">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon name={item.icon} size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <Card className="p-12 bg-gradient-to-br from-primary/5 to-muted border-border/50 text-center">
          <Icon name="Send" size={48} className="mx-auto mb-6 text-primary" />
          <h3 className="text-3xl font-semibold text-foreground mb-4">
            Напишите мне
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Буду рада обсудить литературоведческие темы, ответить на вопросы 
            или обсудить возможности сотрудничества
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Icon name="Mail" size={20} className="mr-2" />
            Отправить письмо
          </Button>
        </Card>
      </div>
    </div>
  );
}
