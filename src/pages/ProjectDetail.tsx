import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const projectsData: Record<string, any> = {
  'golovan-myth': {
    title: 'Несмертельный Голован',
    subtitle: 'Миф и легенда в русской литературе',
    category: 'Литературный анализ',
    year: '2024',
    author: 'Н.С. Лесков',
    content: `# Черты Мифа в образе Голована

Миф объясняет мир, создает архетипические, фундаментальные образы. Голован во многом соответствует таким архетипам.

## 1. Архетип Культурного Героя-Спасителя

**Спаситель от стихии:** Главный подвиг Голована — спасение людей и скота во время чумы. Он не просто помогает, а возглавляет борьбу с эпидемией, как мифический герой, борющийся с хтоническим чудовищем (чумой, которую все страшно боятся).

**Принесение знания:** Он приносит людям спасительное знание — простые и эффективные методы борьбы с заразой (гигиена, карантин, употребление здоровой пищи). Он «просвещает» темный, охваченный паникой народ.

## 2. Связь с Природными Стихиями и Животными

**Власть над скотом:** Голован — великий знаток и целитель животных. Коровы, которых он лечит, понимают его и подчиняются ему почти как в сказке. Это черта, сближающая его с мифическими пастухами и звероводами (например, Орфей).

**Необыкновенная сила и выносливость:** Его физическая сила кажется сверхъестественной. Он может работать не покладая рук, не спать, переносить тяготы, непосильные для обычного человека. Это признак героя, стоящего между миром людей и миром природных сил.

## 3. Потусторонняя защита («несмертельность»)

Само прозвище «Несмертельный» — ключевая мифологическая черта. Оно рождается из слуха, что его «пуля не берет и смерть ему не писана». Это прямое указание на магический, избранный статус, схожий с статусом эпического богатыря или сказочного персонажа, обладающего неуязвимостью.

---

# Черты Легенды в структуре и повествовании

Легенда — это народное предание о выдающемся событии или человеке, основанное на реальности, но сильно приукрашенное и идеализированное. Именно в этом ключе и построен весь рассказ.

## 1. Устный источник и «ненадежный» рассказчик

Повествование ведется от лица человека, который в детстве слышал истории о Головане. Это классический прием легенды: «люди говорили», «ходили слухи», «я помню, как рассказывали...». Лесков имитирует фольклорный стиль передачи информации из уст в уста.

Факты смешиваются с вымыслом, создавая ореол таинственности. Мы никогда не знаем наверняка, был ли Голован действительно раскольником, почему его не брала пуля.

## 2. Собирательный, идеализированный образ «праведника»

Голован — не конкретный исторический персонаж, а воплощение народного идеала святости. Он сочетает в себе:

- **Христианское смирение и жертвенность:** Он бескорыстно помогает всем, берет на себя грех других (ложится с умирающей от чумы девушкой, чтобы облегчить ее страхи).
- **Языческую мощь и связь с землей:** Его сила, здоровье, любовь к скоту и простой жизни.

Его образ лишен бытовых пороков и слабостей, что характерно для легендарного героя.

## 3. Чудеса и их реалистичное объяснение

Легенда часто содержит чудеса, и они есть здесь. Но Лесков гениально их раскрывает, давая им понятное рациональное объяснение.

**«Несмертельность»:** Пуля не берет его не потому, что он заговоренный, а потому, что стрелявший был пьян и промахнулся, а народная молва превратила это в чудо.

**Спасение от чумы:** Он не обладает магическим иммунитетом. Он просто не боится смерти, соблюдает гигиену (ест много лука и чеснока, пьет квас вместо воды) и обладает феноменальным здоровьем. Его «чудо» — это результат трезвого ума, смелости и знания.

## 4. Трагический и возвышенный финал

Смерть Голована, спасающего скот во время пожара, — это классический финал легенды о герое. Он гибнет, совершая очередной подвиг, и его смерть окружена ореолом святости и жертвенности. Он уходит из жизни не обыденно, а героически.

---

# Вывод

Лесков в «Несмертельном Головане» использует миф и легенду как художественный инструмент. Он не пишет фольклорное произведение, а создает иллюзию фольклорного повествования, чтобы подчеркнуть главную мысль:

**Истинная святость и праведность живут не только в церковных святцах, но и среди простого народа, в самой гуще жизни.** Народная молва, создавая мифы и легенды о таких людях, как Голован, интуитивно чувствует и сохраняет их истинный, духовный масштаб.`
  }
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Работа не найдена</h1>
          <Link to="/">
            <Button variant="outline">Вернуться к портфолио</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-b from-muted/30 to-background py-16 px-6 border-b">
        <div className="container max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <Icon name="ArrowLeft" size={20} />
            <span className="text-sm font-medium">Все работы</span>
          </Link>
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Badge className="bg-primary/10 text-primary">
                {project.category}
              </Badge>
              <Badge variant="outline">
                {project.year}
              </Badge>
            </div>
            
            <div>
              <h1 className="text-5xl md:text-6xl font-semibold text-foreground mb-4 leading-tight">
                {project.title}
              </h1>
              <p className="text-2xl text-muted-foreground font-light">
                {project.subtitle}
              </p>
            </div>
            
            {project.author && (
              <p className="text-foreground/70">
                Автор произведения: <span className="font-medium">{project.author}</span>
              </p>
            )}
          </div>
        </div>
      </div>
      
      <div className="container max-w-4xl mx-auto px-6 py-16">
        <article className="prose prose-lg prose-headings:font-cormorant prose-headings:font-semibold prose-p:text-foreground/90 prose-strong:text-foreground prose-li:text-foreground/90 max-w-none">
          <div className="whitespace-pre-line leading-relaxed space-y-6">
            {project.content.split('\n').map((line: string, idx: number) => {
              if (line.startsWith('# ')) {
                return <h1 key={idx} className="text-4xl font-semibold mt-12 mb-6 first:mt-0">{line.replace('# ', '')}</h1>;
              }
              if (line.startsWith('## ')) {
                return <h2 key={idx} className="text-3xl font-semibold mt-10 mb-4">{line.replace('## ', '')}</h2>;
              }
              if (line.startsWith('**') && line.endsWith('**')) {
                return <p key={idx} className="font-semibold text-foreground mb-3">{line.replace(/\*\*/g, '')}</p>;
              }
              if (line.startsWith('- ')) {
                return <li key={idx} className="ml-6 mb-2">{line.replace('- ', '')}</li>;
              }
              if (line.trim() === '---') {
                return <hr key={idx} className="my-12 border-border" />;
              }
              if (line.trim() === '') {
                return <br key={idx} />;
              }
              return <p key={idx} className="mb-4 leading-relaxed">{line}</p>;
            })}
          </div>
        </article>
        
        <div className="mt-16 pt-12 border-t border-border flex items-center justify-between">
          <Link to="/">
            <Button variant="outline" size="lg">
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Все работы
            </Button>
          </Link>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Icon name="Share2" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Bookmark" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
