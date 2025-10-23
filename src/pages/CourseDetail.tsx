import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const coursesData: Record<string, any> = {
  golovan: {
    title: 'Миф и легенда в русской литературе',
    description: 'Глубокое изучение архетипических образов и фольклорных традиций в произведениях русских классиков',
    category: 'Русская классика',
    lessons: 12,
    duration: '6 недель',
    progress: 45,
    icon: 'BookMarked',
    fullDescription: `В этом курсе мы исследуем, как древние мифы и легенды проникают в русскую литературу, создавая глубинные пласты смысла. 

На примере "Несмертельного Голована" Н.С. Лескова мы разберём архетип культурного героя-спасителя, связь персонажей с природными стихиями и фольклорные приёмы повествования.

Вы научитесь узнавать универсальные образы, понимать символику и видеть, как писатели используют мифологические структуры для создания произведений.`,
    modules: [
      {
        title: 'Введение в мифологию и литературу',
        lessons: [
          { title: 'Что такое миф и архетип', duration: '25 мин', completed: true },
          { title: 'Фольклорные элементы в литературе', duration: '30 мин', completed: true },
          { title: 'Культурный герой в мировой традиции', duration: '35 мин', completed: false }
        ]
      },
      {
        title: 'Черты мифа в образе Голована',
        lessons: [
          { title: 'Архетип спасителя от стихии', duration: '40 мин', completed: false },
          { title: 'Связь с природой и животными', duration: '35 мин', completed: false },
          { title: 'Потусторонняя защита («несмертельность»)', duration: '30 мин', completed: false }
        ]
      },
      {
        title: 'Легенда как структура повествования',
        lessons: [
          { title: 'Устный источник и «ненадёжный» рассказчик', duration: '30 мин', completed: false },
          { title: 'Идеализированный образ праведника', duration: '35 мин', completed: false },
          { title: 'Чудеса и их рациональное объяснение', duration: '40 мин', completed: false }
        ]
      },
      {
        title: 'Заключение и анализ',
        lessons: [
          { title: 'Миф и легенда как художественный инструмент', duration: '45 мин', completed: false },
          { title: 'Святость в народной культуре', duration: '35 мин', completed: false },
          { title: 'Итоговый проект: анализ персонажа', duration: '60 мин', completed: false }
        ]
      }
    ]
  }
};

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const course = id ? coursesData[id] : null;

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Курс не найден</h1>
          <Link to="/">
            <Button variant="outline">Вернуться к курсам</Button>
          </Link>
        </div>
      </div>
    );
  }

  const completedLessons = course.modules.flatMap((m: any) => m.lessons).filter((l: any) => l.completed).length;
  const totalLessons = course.modules.flatMap((m: any) => m.lessons).length;

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 py-12 px-6 border-b">
        <div className="container max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-6">
            <Icon name="ArrowLeft" size={20} />
            <span className="text-sm font-medium">Все курсы</span>
          </Link>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Badge className="mb-3 bg-primary text-primary-foreground">
                {course.category}
              </Badge>
              <h1 className="text-5xl font-bold text-foreground mb-4 leading-tight">
                {course.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {course.description}
              </p>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="BookOpen" size={18} />
                  <span>{course.lessons} уроков</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={18} />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={18} />
                  <span>152 студента</span>
                </div>
              </div>
            </div>
            
            <Card className="p-6 h-fit border-2">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Прогресс курса</span>
                    <span className="text-lg font-bold text-primary">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-3" />
                  <p className="text-xs text-muted-foreground mt-2">
                    {completedLessons} из {totalLessons} уроков пройдено
                  </p>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-primary to-secondary" size="lg">
                  <Icon name="Play" size={20} className="mr-2" />
                  Продолжить обучение
                </Button>
                
                <Button variant="outline" className="w-full" size="lg">
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать материалы
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      <div className="container max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">О курсе</h2>
              <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed whitespace-pre-line">
                {course.fullDescription}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Программа курса</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {course.modules.map((module: any, idx: number) => (
                  <AccordionItem 
                    key={idx} 
                    value={`module-${idx}`}
                    className="border-2 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">
                          {idx + 1}
                        </div>
                        <span>{module.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pt-4">
                        {module.lessons.map((lesson: any, lessonIdx: number) => (
                          <div 
                            key={lessonIdx}
                            className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                lesson.completed ? 'bg-primary' : 'border-2 border-muted-foreground'
                              }`}>
                                {lesson.completed && (
                                  <Icon name="Check" size={14} className="text-primary-foreground" />
                                )}
                              </div>
                              <span className={lesson.completed ? 'text-muted-foreground line-through' : 'text-foreground'}>
                                {lesson.title}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Icon name="Clock" size={14} />
                              <span>{lesson.duration}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6 border-2">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Icon name="Target" size={24} className="text-primary" />
                Чему вы научитесь
              </h3>
              <ul className="space-y-3">
                {[
                  'Распознавать архетипы в литературе',
                  'Анализировать мифологические структуры',
                  'Понимать фольклорные приёмы',
                  'Видеть глубинные смыслы текстов'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            
            <Card className="p-6 border-2 bg-gradient-to-br from-primary/5 to-secondary/5">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Icon name="Award" size={24} className="text-primary" />
                Сертификат
              </h3>
              <p className="text-foreground/80 mb-4">
                После успешного завершения курса вы получите именной сертификат
              </p>
              <Button variant="outline" className="w-full">
                Подробнее
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
