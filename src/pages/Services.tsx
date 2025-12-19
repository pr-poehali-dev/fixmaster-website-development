import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Services = () => {
  const serviceCategories = [
    {
      title: 'Экспресс-ремонт смартфонов',
      icon: 'Smartphone',
      description: 'Быстрый и качественный ремонт вашего смартфона',
      services: [
        { name: 'Замена дисплея iPhone', price: '3500₽', time: '1-2 часа' },
        { name: 'Замена дисплея Samsung', price: '2800₽', time: '1-2 часа' },
        { name: 'Замена дисплея Xiaomi', price: '2200₽', time: '1-2 часа' },
        { name: 'Замена аккумулятора iPhone', price: '1800₽', time: '30 мин' },
        { name: 'Замена аккумулятора Android', price: '1500₽', time: '30 мин' },
        { name: 'Замена задней крышки', price: '1200₽', time: '1 час' },
        { name: 'Замена камеры', price: '2500₽', time: '1 час' },
        { name: 'Замена разъема зарядки', price: '1600₽', time: '1 час' },
        { name: 'Ремонт после попадания воды', price: 'от 2000₽', time: '2-3 часа' }
      ]
    },
    {
      title: 'Ремонт планшетов',
      icon: 'Tablet',
      description: 'Профессиональный ремонт планшетов любых брендов',
      services: [
        { name: 'Замена дисплея iPad', price: '5500₽', time: '2-3 часа' },
        { name: 'Замена дисплея Samsung Tab', price: '4200₽', time: '2-3 часа' },
        { name: 'Замена аккумулятора', price: '2800₽', time: '1-2 часа' },
        { name: 'Замена стекла (без LCD)', price: '3200₽', time: '2 часа' },
        { name: 'Ремонт кнопок', price: '1800₽', time: '1 час' }
      ]
    },
    {
      title: 'Настройка умного дома',
      icon: 'Home',
      description: 'Комплексная установка и настройка систем умного дома',
      services: [
        { name: 'Базовая настройка (до 5 устройств)', price: '3000₽', time: '2-3 часа' },
        { name: 'Расширенная настройка (до 15 устройств)', price: '6000₽', time: '4-6 часов' },
        { name: 'Создание сценариев автоматизации', price: '1500₽', time: '1 час' },
        { name: 'Установка умных светильников', price: '800₽/шт', time: '30 мин' },
        { name: 'Настройка умных розеток', price: '500₽/шт', time: '20 мин' },
        { name: 'Интеграция с голосовыми ассистентами', price: '2000₽', time: '1-2 часа' },
        { name: 'Настройка системы безопасности', price: '5000₽', time: '3-4 часа' }
      ]
    },
    {
      title: 'Ремонт ноутбуков',
      icon: 'Laptop',
      description: 'Диагностика и ремонт ноутбуков всех производителей',
      services: [
        { name: 'Чистка от пыли с заменой термопасты', price: '1500₽', time: '1-2 часа' },
        { name: 'Замена жесткого диска на SSD', price: 'от 2000₽', time: '1 час' },
        { name: 'Увеличение оперативной памяти', price: 'от 1500₽', time: '30 мин' },
        { name: 'Замена клавиатуры', price: '2500₽', time: '1-2 часа' },
        { name: 'Ремонт системы охлаждения', price: '2000₽', time: '2 часа' },
        { name: 'Замена матрицы', price: 'от 4500₽', time: '2-3 часа' },
        { name: 'Ремонт материнской платы', price: 'от 3000₽', time: '1-3 дня' }
      ]
    },
    {
      title: 'Аксессуары и защита',
      icon: 'ShoppingBag',
      description: 'Широкий выбор качественных аксессуаров',
      services: [
        { name: 'Защитное стекло премиум', price: '500₽', time: 'Установка бесплатно' },
        { name: 'Гидрогелевая пленка', price: '300₽', time: 'Установка бесплатно' },
        { name: 'Чехол силиконовый', price: 'от 300₽', time: '' },
        { name: 'Чехол кожаный', price: 'от 800₽', time: '' },
        { name: 'Беспроводные наушники', price: 'от 1500₽', time: '' },
        { name: 'Зарядные устройства', price: 'от 500₽', time: '' },
        { name: 'Power Bank', price: 'от 1200₽', time: '' }
      ]
    },
    {
      title: 'Дополнительные услуги',
      icon: 'Wrench',
      description: 'Прочие услуги для вашего удобства',
      services: [
        { name: 'Восстановление данных', price: 'от 3000₽', time: '1-3 дня' },
        { name: 'Установка программного обеспечения', price: '800₽', time: '30 мин' },
        { name: 'Удаление вирусов', price: '1000₽', time: '1 час' },
        { name: 'Перенос данных между устройствами', price: '500₽', time: '30 мин' },
        { name: 'Настройка и оптимизация системы', price: '1200₽', time: '1 час' },
        { name: 'Обучение работе с устройством', price: '1000₽/час', time: 'По договоренности' }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-heading font-black mb-4">Услуги и цены</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Детальный прайс-лист на все виды ремонта и услуг.<br />
            Гарантия 6 месяцев на все работы.
          </p>
        </div>

        <div className="grid gap-6 mb-12">
          {serviceCategories.map((category, index) => (
            <Card key={index} className="hover-lift border-2 animate-scale-in overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="h-2 gradient-mixed" />
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name={category.icon} size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-heading mb-1">{category.title}</CardTitle>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                  <Badge className="gradient-secondary text-foreground font-bold text-sm px-4 py-2">
                    {category.services.length} услуг
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="services" className="border-none">
                    <AccordionTrigger className="text-primary font-bold hover:no-underline">
                      Показать все услуги и цены
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid gap-3 pt-2">
                        {category.services.map((service, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                          >
                            <div className="flex items-center gap-3 flex-1">
                              <div className="w-2 h-2 rounded-full gradient-secondary" />
                              <div className="flex-1">
                                <p className="font-semibold">{service.name}</p>
                                {service.time && (
                                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                                    <Icon name="Clock" size={14} />
                                    {service.time}
                                  </p>
                                )}
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-2xl font-heading font-black text-primary">{service.price}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="gradient-mixed text-white border-none">
          <CardContent className="p-8 text-center">
            <Icon name="Info" size={48} className="mx-auto mb-4 opacity-90" />
            <h3 className="text-2xl font-heading font-bold mb-3">Важная информация</h3>
            <div className="max-w-3xl mx-auto space-y-2 text-white/90">
              <p>• Все цены указаны с учетом работы и запчастей (если не указано иное)</p>
              <p>• Бесплатная диагностика при любом ремонте</p>
              <p>• Гарантия 6 месяцев на все виды работ</p>
              <p>• Возможна срочная услуга за +50% к стоимости</p>
              <p>• Скидка 10% на первый ремонт при заказе через сайт</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Services;
