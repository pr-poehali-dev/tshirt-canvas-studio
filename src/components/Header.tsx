import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ activeSection, scrollToSection }: HeaderProps) => {
  return (
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
  );
};

export default Header;
