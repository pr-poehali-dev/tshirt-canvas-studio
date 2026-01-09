import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

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

  const gallery = [
    {
      image: 'https://cdn.poehali.dev/projects/c2d8ac3f-836f-4e7a-a11a-19584f042cf0/files/5dba5f91-962d-4924-96c2-dd51006cbb1d.jpg',
      title: 'Футболка с геометрическим принтом',
      category: 'Футболки'
    },
    {
      image: 'https://cdn.poehali.dev/projects/c2d8ac3f-836f-4e7a-a11a-19584f042cf0/files/59563bfc-faf8-4302-b22a-6a2acf8e3c42.jpg',
      title: 'Абстрактная картина на холсте',
      category: 'Холсты'
    },
    {
      image: 'https://cdn.poehali.dev/projects/c2d8ac3f-836f-4e7a-a11a-19584f042cf0/files/5cb77dbf-02a7-4397-8d1a-ab869add6c0e.jpg',
      title: 'Худи с авторским дизайном',
      category: 'Толстовки'
    }
  ];

  const blogPosts = [
    {
      title: 'Как выбрать правильный размер футболки',
      date: '15 декабря 2023',
      excerpt: 'Подробное руководство по выбору размера для идеальной посадки. Таблицы размеров и советы от профессионалов.'
    },
    {
      title: 'Тренды печати на одежде 2024',
      date: '10 декабря 2023',
      excerpt: 'Какие дизайны будут популярны в новом году? Обзор модных направлений и техник печати.'
    },
    {
      title: 'Уход за печатью: советы по стирке',
      date: '5 декабря 2023',
      excerpt: 'Как сохранить яркость и качество печати надолго. Правила стирки и хранения изделий с принтами.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Palette" className="h-8 w-8 text-primary" />
              <span className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                PrintStudio
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {['home', 'about', 'services', 'price', 'materials', 'gallery', 'blog', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О студии'}
                  {section === 'services' && 'Услуги'}
                  {section === 'price' && 'Прайс'}
                  {section === 'materials' && 'Материалы'}
                  {section === 'gallery' && 'Галерея'}
                  {section === 'blog' && 'Блог'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('contacts')} className="hidden md:flex">
              Заказать
            </Button>
          </div>
        </div>
      </nav>

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

      <section id="gallery" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">Галерея работ</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Примеры наших последних проектов
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {gallery.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <Badge className="mb-2">{item.category}</Badge>
                  <p className="font-heading font-semibold">{item.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">Блог</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Полезные статьи о печати и дизайне
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                  <CardTitle className="font-heading text-xl">{post.title}</CardTitle>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="p-0 h-auto font-semibold text-primary">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Свяжитесь с нами любым удобным способом
          </p>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">info@printstudio.ru</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 10:00 - 20:00<br />Сб-Вс: 11:00 - 18:00</p>
                  </div>
                </div>
              </Card>
            </div>
            <Card className="p-8">
              <h3 className="font-heading font-bold text-2xl mb-6">Оставьте заявку</h3>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Ваше имя" className="h-12" />
                </div>
                <div>
                  <Input type="tel" placeholder="Телефон" className="h-12" />
                </div>
                <div>
                  <Input type="email" placeholder="Email" className="h-12" />
                </div>
                <div>
                  <Textarea placeholder="Опишите ваш заказ" className="min-h-32" />
                </div>
                <Button className="w-full h-12 text-lg" size="lg">
                  <Icon name="Send" className="mr-2 h-5 w-5" />
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Palette" className="h-6 w-6" />
                <span className="text-xl font-heading font-bold">PrintStudio</span>
              </div>
              <p className="text-background/70">
                Студия печати на футболках и картин на холсте премиум-качества
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-background/70">
                <li>Печать на футболках</li>
                <li>Картины на холсте</li>
                <li>Корпоративная одежда</li>
                <li>Дизайн макетов</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-background/70">
                <li>О студии</li>
                <li>Наши работы</li>
                <li>Блог</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Соцсети</h4>
              <div className="flex space-x-3">
                <Button size="icon" variant="ghost" className="hover:bg-background/20">
                  <Icon name="Instagram" className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="hover:bg-background/20">
                  <Icon name="Facebook" className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="hover:bg-background/20">
                  <Icon name="Twitter" className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p>&copy; 2024 PrintStudio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
