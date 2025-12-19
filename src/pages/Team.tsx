import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Team = () => {
  const teamMembers = [
    {
      name: 'Алексей Петров',
      role: 'Главный инженер',
      image: 'https://placehold.co/400x500/3a86ff/ffffff?text=А.Петров',
      experience: '8 лет',
      specialization: 'Ремонт материнских плат',
      skills: ['Микропайка', 'Диагностика', 'iPhone/Samsung'],
      description: 'Эксперт по сложному ремонту электроники. Специализируется на восстановлении после воды и ремонте материнских плат.'
    },
    {
      name: 'Мария Сидорова',
      role: 'Специалист по умному дому',
      image: 'https://placehold.co/400x500/ffbe0b/333333?text=М.Сидорова',
      experience: '4 года',
      specialization: 'Настройка умного дома',
      skills: ['Apple HomeKit', 'Яндекс Алиса', 'Xiaomi Smart Home'],
      description: 'Сертифицированный специалист по системам автоматизации. Создаст идеальную экосистему для вашего дома.'
    },
    {
      name: 'Дмитрий Иванов',
      role: 'Консультант по аксессуарам',
      image: 'https://placehold.co/400x500/3a86ff/ffffff?text=Д.Иванов',
      experience: '3 года',
      specialization: 'Подбор аксессуаров',
      skills: ['Защитные покрытия', 'Аудиотехника', 'Power Bank'],
      description: 'Поможет подобрать идеальные аксессуары для вашего устройства. Эксперт по защитным покрытиям.'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-heading font-black mb-4">Наша команда</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Профессионалы с многолетним опытом,<br />
            готовые решить любую задачу
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover-lift border-2 overflow-hidden group animate-scale-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="h-2 gradient-mixed group-hover:h-3 transition-all" />
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-heading font-bold mb-1">{member.name}</h3>
                  <p className="text-sm opacity-90">{member.role}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4 pb-4 border-b">
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={18} className="text-primary" />
                    <span className="font-semibold">{member.experience}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Award" size={18} className="text-secondary" />
                    <span className="font-semibold text-sm">{member.specialization}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {member.description}
                </p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold flex items-center gap-2">
                    <Icon name="Star" size={16} className="text-secondary" />
                    Специализация:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="font-semibold">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-2 hover-lift">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-heading font-black text-primary mb-2">500+</h3>
              <p className="text-muted-foreground font-semibold">Довольных клиентов</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover-lift">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Wrench" size={32} className="text-foreground" />
              </div>
              <h3 className="text-3xl font-heading font-black text-primary mb-2">3000+</h3>
              <p className="text-muted-foreground font-semibold">Выполненных ремонтов</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover-lift">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-heading font-black text-primary mb-2">9 лет</h3>
              <p className="text-muted-foreground font-semibold">На рынке</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Team;
