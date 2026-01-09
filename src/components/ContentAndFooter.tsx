import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ContentAndFooter = () => {
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
    <>
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
    </>
  );
};

export default ContentAndFooter;
