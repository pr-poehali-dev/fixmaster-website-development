import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const contacts = [
    {
      icon: 'MapPin',
      title: 'Адрес',
      content: 'г. Москва, ул. Техническая, д. 15, офис 304',
      link: null
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      content: '+7 (495) 123-45-67',
      link: 'tel:+74951234567'
    },
    {
      icon: 'Mail',
      title: 'Email',
      content: 'info@fixmaster.ru',
      link: 'mailto:info@fixmaster.ru'
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      content: 'Пн-Пт: 10:00-20:00\nСб-Вс: 11:00-18:00',
      link: null
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-heading font-black mb-4">Контакты</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы всегда рады помочь вам!<br />
            Свяжитесь с нами удобным способом
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <Card key={index} className="hover-lift border-2 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={contact.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-heading font-bold mb-2">{contact.title}</h3>
                {contact.link ? (
                  <a
                    href={contact.link}
                    className="text-primary hover:text-primary/80 font-semibold transition-colors whitespace-pre-line"
                  >
                    {contact.content}
                  </a>
                ) : (
                  <p className="text-muted-foreground whitespace-pre-line">{contact.content}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-2 overflow-hidden mb-12 animate-fade-in">
          <div className="h-2 gradient-mixed" />
          <CardContent className="p-0">
            <div className="aspect-video w-full">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A0e8b74f5b4b896f9c4f4f4f4f4f4f4f4&amp;source=constructor"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Карта местоположения"
                className="w-full h-full"
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="gradient-primary text-white border-none">
            <CardContent className="p-8">
              <Icon name="MessageCircle" size={48} className="mb-4 opacity-90" />
              <h3 className="text-2xl font-heading font-bold mb-3">Онлайн-консультация</h3>
              <p className="mb-6 opacity-90">
                Не можете приехать? Мы проконсультируем вас онлайн и поможем решить проблему удаленно.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-all"
                >
                  <Icon name="Send" size={20} />
                  <span className="font-semibold">Telegram</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-all"
                >
                  <Icon name="Phone" size={20} />
                  <span className="font-semibold">WhatsApp</span>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="gradient-secondary border-none">
            <CardContent className="p-8">
              <Icon name="Car" size={48} className="mb-4 text-foreground" />
              <h3 className="text-2xl font-heading font-bold mb-3 text-foreground">Как добраться</h3>
              <div className="space-y-3 text-foreground/80">
                <p className="flex items-start gap-2">
                  <Icon name="Train" size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Метро "Технопарк" — 5 минут пешком</span>
                </p>
                <p className="flex items-start gap-2">
                  <Icon name="Bus" size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Автобусы: 156, 291 — остановка "Техническая улица"</span>
                </p>
                <p className="flex items-start gap-2">
                  <Icon name="ParkingCircle" size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Бесплатная парковка для клиентов</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
