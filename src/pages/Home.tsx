import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Home = () => {
  const features = [
    {
      icon: 'Shield',
      title: 'Гарантия 6 месяцев',
      description: 'На все виды работ и запчасти'
    },
    {
      icon: 'Zap',
      title: 'Экспресс-ремонт',
      description: 'Большинство работ за 1-2 часа'
    },
    {
      icon: 'BadgeCheck',
      title: 'Оригинальные запчасти',
      description: 'Только сертифицированные детали'
    },
    {
      icon: 'Search',
      title: 'Бесплатная диагностика',
      description: 'Узнаете причину за 15 минут'
    }
  ];

  const services = [
    {
      icon: 'Smartphone',
      title: 'Ремонт смартфонов',
      description: 'Замена экрана, батареи, восстановление после воды',
      price: 'от 1500₽'
    },
    {
      icon: 'Home',
      title: 'Умный дом',
      description: 'Настройка и установка умных устройств, сценарии',
      price: 'от 3000₽'
    },
    {
      icon: 'ShoppingBag',
      title: 'Аксессуары',
      description: 'Чехлы, защитные стекла, зарядные устройства',
      price: 'Бесплатная установка'
    }
  ];

  return (
    <div>
      <section className="relative min-h-[600px] gradient-mixed flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-6 leading-tight">
              Ремонт с умом!
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-semibold">
              Профессиональный ремонт гаджетов и настройка умного дома.<br />
              Быстро. Качественно. С гарантией.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/feedback">
                <Button size="lg" className="gradient-secondary text-foreground font-bold text-lg h-14 px-8 hover:shadow-2xl transition-all hover-lift">
                  Оставить заявку
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="bg-white/20 backdrop-blur-sm border-white text-white font-bold text-lg h-14 px-8 hover:bg-white/30">
                  Наши услуги
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-black text-center mb-12 animate-fade-in">
            Почему мы?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift cursor-pointer border-2 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-black text-center mb-4">
            Наши услуги
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Широкий спектр услуг для вашего удобства
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift cursor-pointer border-2 overflow-hidden group">
                <div className="h-2 gradient-mixed group-hover:h-3 transition-all" />
                <CardContent className="p-8">
                  <div className="w-20 h-20 gradient-secondary rounded-2xl flex items-center justify-center mb-6">
                    <Icon name={service.icon} size={40} className="text-foreground" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-2xl font-heading font-black text-primary">{service.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="font-bold text-lg">
                Все услуги и цены
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-heading font-black text-white mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Оставьте заявку прямо сейчас и получите скидку 10% на первый ремонт!
          </p>
          <Link to="/feedback">
            <Button size="lg" className="gradient-secondary text-foreground font-bold text-lg h-14 px-8 hover:shadow-2xl transition-all hover-lift">
              Оставить заявку
              <Icon name="Sparkles" size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
