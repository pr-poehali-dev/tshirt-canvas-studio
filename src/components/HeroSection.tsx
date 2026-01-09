import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <>
      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 text-sm px-4 py-2" variant="secondary">
              Студия печати премиум-качества
            </Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              Воплощаем ваши идеи
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                на ткани и холсте
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Печать на футболках, толстовках и картины на холсте с гарантией качества. 
              Современное оборудование и профессиональная команда дизайнеров.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('services')} className="text-lg px-8">
                <Icon name="Sparkles" className="mr-2 h-5 w-5" />
                Наши услуги
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('gallery')} className="text-lg px-8">
                <Icon name="Image" className="mr-2 h-5 w-5" />
                Посмотреть работы
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-center">О студии</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Clock" className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-heading">7+ лет</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">На рынке печати и дизайна</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Users" className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="font-heading">5000+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Довольных клиентов</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Award" className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-heading">100%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Гарантия качества</p>
                </CardContent>
              </Card>
            </div>
            <p className="text-lg text-center text-muted-foreground leading-relaxed">
              PrintStudio — это команда профессионалов, которые любят своё дело. Мы специализируемся на качественной печати 
              на текстиле и создании картин на холсте. Используем только проверенные материалы и современное оборудование, 
              что позволяет гарантировать долговечность и яркость каждого изделия.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
