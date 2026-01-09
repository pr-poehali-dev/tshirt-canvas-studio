import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const ServicesAndPricing = () => {
  const services = [
    {
      icon: 'Shirt',
      title: 'Печать на футболках',
      description: 'Качественная печать на футболках любых цветов и размеров. Используем современные технологии прямой печати и термопереноса.',
      price: 'от 500₽'
    },
    {
      icon: 'Image',
      title: 'Картины на холсте',
      description: 'Печать изображений на натуральном холсте с натяжкой на подрамник. Идеально для интерьера и подарков.',
      price: 'от 1500₽'
    },
    {
      icon: 'Users',
      title: 'Корпоративная одежда',
      description: 'Брендирование одежды для компаний, команд и мероприятий. Логотипы, слоганы, фирменный стиль.',
      price: 'от 800₽'
    },
    {
      icon: 'Palette',
      title: 'Дизайн макетов',
      description: 'Разработка уникальных дизайнов под ваши идеи. Наши художники создадут то, что вы представляете.',
      price: 'от 1000₽'
    }
  ];

  const materials = [
    {
      category: 'Футболки',
      items: [
        { name: 'Хлопок 100%', sizes: 'XS-5XL', colors: '15 цветов' },
        { name: 'Хлопок Premium', sizes: 'XS-3XL', colors: '8 цветов' },
        { name: 'Поло', sizes: 'S-3XL', colors: '12 цветов' }
      ]
    },
    {
      category: 'Толстовки',
      items: [
        { name: 'Худи', sizes: 'XS-3XL', colors: '10 цветов' },
        { name: 'Свитшот', sizes: 'S-3XL', colors: '8 цветов' }
      ]
    },
    {
      category: 'Холсты',
      items: [
        { name: 'Холст 30x40 см', sizes: '2 см толщина', colors: 'Полноцвет' },
        { name: 'Холст 40x60 см', sizes: '2 см толщина', colors: 'Полноцвет' },
        { name: 'Холст 60x80 см', sizes: '3 см толщина', colors: 'Полноцвет' },
        { name: 'Холст 80x120 см', sizes: '4 см толщина', colors: 'Полноцвет' }
      ]
    }
  ];

  return (
    <>
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Полный спектр услуг печати на ткани и холсте
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-heading font-bold text-primary">{service.price}</span>
                    <Button variant="ghost" size="sm">
                      <Icon name="ArrowRight" className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="price" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">Прайс-лист</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Прозрачные цены без скрытых платежей
          </p>
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="tshirts" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="tshirts" className="font-heading">Футболки</TabsTrigger>
                <TabsTrigger value="hoodies" className="font-heading">Толстовки</TabsTrigger>
                <TabsTrigger value="canvas" className="font-heading">Холсты</TabsTrigger>
              </TabsList>
              <TabsContent value="tshirts">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                        <div>
                          <p className="font-heading font-semibold">Футболка хлопок 100%</p>
                          <p className="text-sm text-muted-foreground">Размеры XS-5XL, 15 цветов</p>
                        </div>
                        <span className="text-xl font-bold text-primary">500₽</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                        <div>
                          <p className="font-heading font-semibold">Футболка Premium</p>
                          <p className="text-sm text-muted-foreground">Плотный хлопок, размеры XS-3XL</p>
                        </div>
                        <span className="text-xl font-bold text-primary">700₽</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                        <div>
                          <p className="font-heading font-semibold">Поло</p>
                          <p className="text-sm text-muted-foreground">С воротником, размеры S-3XL</p>
                        </div>
                        <span className="text-xl font-bold text-primary">800₽</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="hoodies">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                        <div>
                          <p className="font-heading font-semibold">Худи с капюшоном</p>
                          <p className="text-sm text-muted-foreground">Размеры XS-3XL, 10 цветов</p>
                        </div>
                        <span className="text-xl font-bold text-primary">1500₽</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                        <div>
                          <p className="font-heading font-semibold">Свитшот</p>
                          <p className="text-sm text-muted-foreground">Без капюшона, размеры S-3XL</p>
                        </div>
                        <span className="text-xl font-bold text-primary">1200₽</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="canvas">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                        <div>
                          <p className="font-heading font-semibold">Холст 30x40 см</p>
                          <p className="text-sm text-muted-foreground">На подрамнике 2 см</p>
                        </div>
                        <span className="text-xl font-bold text-primary">1500₽</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                        <div>
                          <p className="font-heading font-semibold">Холст 40x60 см</p>
                          <p className="text-sm text-muted-foreground">На подрамнике 2 см</p>
                        </div>
                        <span className="text-xl font-bold text-primary">2500₽</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                        <div>
                          <p className="font-heading font-semibold">Холст 60x80 см</p>
                          <p className="text-sm text-muted-foreground">На подрамнике 3 см</p>
                        </div>
                        <span className="text-xl font-bold text-primary">4000₽</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                        <div>
                          <p className="font-heading font-semibold">Холст 80x120 см</p>
                          <p className="text-sm text-muted-foreground">На подрамнике 4 см</p>
                        </div>
                        <span className="text-xl font-bold text-primary">6500₽</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section id="materials" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">Материалы и размеры</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Подробная информация о доступных материалах, размерах и цветах
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {materials.map((material, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">{material.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {material.items.map((item, idx) => (
                      <div key={idx} className="p-4 bg-muted/50 rounded-lg">
                        <p className="font-heading font-semibold mb-2">{item.name}</p>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Icon name="Ruler" className="h-4 w-4 mr-2 text-primary" />
                            <span>{item.sizes}</span>
                          </div>
                          <div className="flex items-center">
                            <Icon name="Palette" className="h-4 w-4 mr-2 text-secondary" />
                            <span>{item.colors}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesAndPricing;
