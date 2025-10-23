export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-3xl mx-auto px-6 py-16">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-5xl font-bold text-foreground mb-8">
            Об авторе
          </h1>
          
          <div className="space-y-6 text-foreground/90">
            <p className="text-lg leading-relaxed">
              Добро пожаловать в мой блог. Я исследую темы литературы, 
              философии и культурных архетипов через призму классических 
              и современных произведений.
            </p>
            
            <p className="text-lg leading-relaxed">
              Моя цель — найти глубинные смыслы в текстах, которые мы читаем, 
              и понять, как древние мифы и легенды продолжают влиять на 
              литературу и наше восприятие мира.
            </p>
            
            <p className="text-lg leading-relaxed">
              Здесь вы найдете размышления о русской классике, анализ 
              литературных образов и попытки понять, почему определенные 
              истории продолжают волновать читателей спустя века.
            </p>
            
            <div className="mt-12 pt-8 border-t border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Контакт
              </h2>
              <p className="text-foreground/80">
                Буду рад вашим отзывам и предложениям тем для будущих статей.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
