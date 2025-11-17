import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);

  const injuryZones = [
    { id: 'shoulders', name: 'Плечи', icon: 'Waves', injuries: 5, exercises: 12 },
    { id: 'back', name: 'Спина', icon: 'Activity', injuries: 7, exercises: 15 },
    { id: 'hands', name: 'Руки и запястья', icon: 'Hand', injuries: 4, exercises: 10 },
    { id: 'legs', name: 'Ноги', icon: 'Move', injuries: 6, exercises: 14 },
    { id: 'core', name: 'Корпус', icon: 'User', injuries: 3, exercises: 8 },
    { id: 'neck', name: 'Шея', icon: 'Circle', injuries: 2, exercises: 6 },
  ];

  const videoLibrary = [
    { id: 1, title: 'Разминка плечевого пояса', duration: '8 мин', category: 'Профилактика', zone: 'Плечи' },
    { id: 2, title: 'Восстановление после растяжения', duration: '12 мин', category: 'Реабилитация', zone: 'Руки' },
    { id: 3, title: 'Укрепление кора для гимнастов', duration: '15 мин', category: 'Профилактика', zone: 'Корпус' },
    { id: 4, title: 'Реабилитация спины после травмы', duration: '20 мин', category: 'Реабилитация', zone: 'Спина' },
    { id: 5, title: 'Мобильность запястий', duration: '10 мин', category: 'Профилактика', zone: 'Руки' },
    { id: 6, title: 'Восстановление коленных суставов', duration: '18 мин', category: 'Реабилитация', zone: 'Ноги' },
  ];

  const teamMembers = [
    { name: 'Анна Петрова', role: 'Спортивный врач', experience: '12 лет' },
    { name: 'Михаил Соколов', role: 'Тренер по воздушной гимнастике', experience: '8 лет' },
    { name: 'Елена Волкова', role: 'Физиотерапевт', experience: '10 лет' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Zap" className="text-primary" size={32} />
              <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                AeroHealth
              </h1>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#catalog" className="text-sm hover:text-primary transition-colors">Каталог травм</a>
              <a href="#videos" className="text-sm hover:text-primary transition-colors">Видеобиблиотека</a>
              <a href="#consultation" className="text-sm hover:text-primary transition-colors">Консультации</a>
              <a href="#about" className="text-sm hover:text-primary transition-colors">О платформе</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Профилактика травм и
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"> быстрое восстановление</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Специализированная платформа для спортсменов и тренеров по воздушной гимнастике. 
                Профессиональные методики реабилитации и профилактики травм.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all">
                  <Icon name="Play" size={20} className="mr-2" />
                  Начать тренировку
                </Button>
                <Button size="lg" variant="outline" className="border-2 hover:border-primary">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться к врачу
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary">150+</div>
                  <div className="text-sm text-muted-foreground">Упражнений</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-secondary">27</div>
                  <div className="text-sm text-muted-foreground">Зон тела</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-accent">24/7</div>
                  <div className="text-sm text-muted-foreground">Доступ</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/e5180170-53f2-458b-a3ec-d7fb63d64226/files/6fbd15f8-173b-4e12-9d80-481aec13c02a.jpg"
                alt="Профессиональная реабилитация"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                    <Icon name="CheckCircle" className="text-green-600" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Сертифицированные специалисты</div>
                    <div className="text-sm text-muted-foreground">Врачи с опытом 10+ лет</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Каталог травм по анатомическим зонам</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Систематизированная информация о наиболее распространенных травмах в воздушной гимнастике
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {injuryZones.map((zone, index) => (
              <Card 
                key={zone.id} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedZone(zone.id)}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl">
                      <Icon name={zone.icon as any} className="text-white" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{zone.name}</CardTitle>
                      <CardDescription>{zone.injuries} типов травм</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">
                      <Icon name="Video" size={16} className="inline mr-1" />
                      {zone.exercises} упражнений
                    </div>
                    <Icon name="ArrowRight" className="text-primary" size={20} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="videos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Видеобиблиотека упражнений</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Профессиональные видео с упражнениями для профилактики и реабилитации
            </p>
          </div>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="prevention">Профилактика</TabsTrigger>
              <TabsTrigger value="rehabilitation">Реабилитация</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoLibrary.map((video) => (
                  <Card key={video.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-t-lg relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button size="lg" className="rounded-full w-16 h-16 bg-white/90 hover:bg-white">
                          <Icon name="Play" className="text-primary" size={24} />
                        </Button>
                      </div>
                      <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                        {video.duration}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{video.title}</CardTitle>
                      <CardDescription>
                        <span className="inline-flex items-center gap-1">
                          <Icon name="Tag" size={14} />
                          {video.category}
                        </span>
                        <span className="mx-2">•</span>
                        <span className="inline-flex items-center gap-1">
                          <Icon name="MapPin" size={14} />
                          {video.zone}
                        </span>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="prevention" className="space-y-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoLibrary.filter(v => v.category === 'Профилактика').map((video) => (
                  <Card key={video.id} className="hover:shadow-xl transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-lg relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button size="lg" className="rounded-full w-16 h-16 bg-white/90 hover:bg-white">
                          <Icon name="Play" className="text-primary" size={24} />
                        </Button>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{video.title}</CardTitle>
                      <CardDescription>{video.zone} • {video.duration}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="rehabilitation" className="space-y-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoLibrary.filter(v => v.category === 'Реабилитация').map((video) => (
                  <Card key={video.id} className="hover:shadow-xl transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/20 rounded-t-lg relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button size="lg" className="rounded-full w-16 h-16 bg-white/90 hover:bg-white">
                          <Icon name="Play" className="text-secondary" size={24} />
                        </Button>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{video.title}</CardTitle>
                      <CardDescription>{video.zone} • {video.duration}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="consultation" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Онлайн-консультации спортивного врача</h2>
              <p className="text-muted-foreground mb-8">
                Получите квалифицированную помощь от опытных специалистов. Записывайтесь на приём без очередей и ожидания.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg mt-1">
                    <Icon name="Video" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Видеоконсультации</h3>
                    <p className="text-sm text-muted-foreground">Онлайн-приёмы в удобное для вас время</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-secondary/10 rounded-lg mt-1">
                    <Icon name="MessageSquare" className="text-secondary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Быстрые ответы</h3>
                    <p className="text-sm text-muted-foreground">Получите ответ в течение 24 часов</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg mt-1">
                    <Icon name="Calendar" className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Удобная запись</h3>
                    <p className="text-sm text-muted-foreground">Запись к специалисту без очередей</p>
                  </div>
                </div>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Записаться на консультацию
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Запись на консультацию</DialogTitle>
                    <DialogDescription>
                      Заполните форму, и мы свяжемся с вами в ближайшее время
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Ваше имя</label>
                      <Input placeholder="Введите имя" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Телефон</label>
                      <Input type="tel" placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Описание проблемы</label>
                      <Textarea placeholder="Опишите вашу проблему" rows={4} />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Отправить заявку
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/e5180170-53f2-458b-a3ec-d7fb63d64226/files/9996a23e-74b8-4f11-9bd6-265357144c27.jpg"
                alt="Команда тренеров"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">О платформе и команде</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы — команда профессионалов, объединенных целью сделать воздушную гимнастику безопаснее
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-primary via-secondary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" className="text-white" size={40} />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Опыт: {member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-heading font-bold mb-4">Наша миссия</h3>
                <p className="text-muted-foreground mb-4">
                  Создать централизованный источник информации о методах восстановления после травм в воздушной гимнастике, 
                  который поможет спортсменам минимизировать перерыв в тренировочном процессе.
                </p>
                <p className="text-muted-foreground">
                  Платформа разработана для тренеров и спортсменов старше 14 лет. Юные гимнасты могут использовать 
                  ресурс под контролем тренера.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon name="Target" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Профилактика</h4>
                      <p className="text-sm text-muted-foreground">Предотвращение травм</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <Icon name="Heart" className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Реабилитация</h4>
                      <p className="text-sm text-muted-foreground">Быстрое восстановление</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Icon name="Users" className="text-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Поддержка</h4>
                      <p className="text-sm text-muted-foreground">Экспертная помощь 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Zap" className="text-primary" size={28} />
                <h3 className="text-xl font-heading font-bold">AeroHealth</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Платформа для профилактики травм и реабилитации в воздушной гимнастике
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#catalog" className="hover:text-primary transition-colors">Каталог травм</a></li>
                <li><a href="#videos" className="hover:text-primary transition-colors">Видеобиблиотека</a></li>
                <li><a href="#consultation" className="hover:text-primary transition-colors">Консультации</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@aerohealth.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, 1
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Следите за нами</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="rounded-full border-gray-700 hover:border-primary">
                  <Icon name="Facebook" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full border-gray-700 hover:border-primary">
                  <Icon name="Instagram" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full border-gray-700 hover:border-primary">
                  <Icon name="Youtube" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 AeroHealth. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
