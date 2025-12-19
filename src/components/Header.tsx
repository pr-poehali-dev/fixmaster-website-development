import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/services', label: 'Услуги' },
    { path: '/team', label: 'Команда' },
    { path: '/contacts', label: 'Контакты' },
    { path: '/feedback', label: 'Обратная связь' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center group">
            <img 
              src="https://cdn.poehali.dev/files/logoza_ru (2)-no-bg-preview (carve.photos).png" 
              alt="FixMaster Logo" 
              className="h-70 w-auto transition-transform group-hover:scale-105 px-0 rounded-0 py-0 my-0 mx-0"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={location.pathname === item.path ? 'default' : 'ghost'}
                  className="font-semibold"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          <Link to="/feedback" className="hidden md:block">
            <Button className="gradient-secondary text-foreground font-bold hover:shadow-lg transition-all">
              Оставить заявку
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </Link>

          <button className="md:hidden">
            <Icon name="Menu" size={28} className="text-primary" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;