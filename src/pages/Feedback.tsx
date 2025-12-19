import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    deviceType: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время!');
    setFormData({
      name: '',
      phone: '',
      email: '',
      deviceType: '',
      description: ''
    });
  };

  const benefits = [
    {
      icon: 'Zap',
      title: 'Быстрый ответ',
      description: 'Перезвоним в течение 15 минут'
    },
    {
      icon: 'Percent',
      title: 'Скидка 10%',
      description: 'На первый ремонт через сайт'
    },
    {
      icon: 'Shield',
      title: 'Гарантия',
      description: '6 месяцев на все работы'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-heading font-black mb-4">Оставьте заявку</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Заполните форму, и мы свяжемся с вами<br />
            для уточнения деталей и записи на удобное время
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2 hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Icon name={benefit.icon} size={28} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-2 animate-fade-in">
            <div className="h-2 gradient-mixed" />
            <CardHeader>
              <CardTitle className="text-2xl font-heading flex items-center gap-2">
                <Icon name="FileText" size={28} className="text-primary" />
                Форма заявки
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-semibold">
                    Ваше имя <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Иван Иванов"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-semibold">
                    Телефон <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-semibold">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deviceType" className="text-base font-semibold">
                    Тип устройства
                  </Label>
                  <Select value={formData.deviceType} onValueChange={(value) => setFormData({ ...formData, deviceType: value })}>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Выберите тип устройства" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="smartphone">Смартфон</SelectItem>
                      <SelectItem value="laptop">Ноутбук</SelectItem>
                      <SelectItem value="tablet">Планшет</SelectItem>
                      <SelectItem value="smart-home">Умный дом</SelectItem>
                      <SelectItem value="other">Другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-base font-semibold">
                    Описание проблемы
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Опишите, что случилось с вашим устройством..."
                    rows={5}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="text-base resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gradient-secondary text-foreground font-bold text-lg h-14 hover:shadow-xl transition-all">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>

          <Card className="gradient-primary text-white border-none mt-6">
            <CardContent className="p-6 text-center">
              <Icon name="Headphones" size={40} className="mx-auto mb-3 opacity-90" />
              <p className="text-lg font-semibold mb-2">Или позвоните нам прямо сейчас</p>
              <a href="tel:+74951234567" className="text-3xl font-heading font-black hover:opacity-80 transition-opacity">
                +7 (495) 123-45-67
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
