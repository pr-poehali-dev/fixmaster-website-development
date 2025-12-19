import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://cdn.poehali.dev/files/logoza.ru.png" 
                alt="FixMaster Logo" 
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-xl font-heading font-bold">FixMaster</h3>
                <p className="text-xs opacity-90">Ремонт с умом!</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Профессиональный ремонт гаджетов и настройка умного дома с 2015 года.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Навигация</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Главная
              </Link>
              <Link to="/services" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Услуги
              </Link>
              <Link to="/team" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Команда
              </Link>
              <Link to="/contacts" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Контакты
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Контакты</h4>
            <div className="flex flex-col gap-2 text-sm opacity-80">
              <p>+7 (495) 123-45-67</p>
              <p>info@fixmaster.ru</p>
              <p>г. Москва, ул. Техническая, 15</p>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Социальные сети</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-foreground transition-all"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-foreground transition-all"
              >
                <Icon name="Send" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-foreground transition-all"
              >
                <Icon name="Phone" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm opacity-70">
          <p>© 2024 FixMaster. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;