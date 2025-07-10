import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const propertyTypes = [
    {
      title: "Жилая недвижимость",
      description: "Квартиры и дома для комфортной жизни",
      icon: "Home",
      image: "/img/20821e3a-436d-4577-942e-0e9fa18b4921.jpg",
    },
    {
      title: "Коммерческая недвижимость",
      description: "Офисы и торговые помещения",
      icon: "Building",
      image: "/img/697caac3-d1a4-46ae-aaba-13503b361b2b.jpg",
    },
    {
      title: "Элитная недвижимость",
      description: "Премиальные объекты класса люкс",
      icon: "Crown",
      image: "/img/5c7ce75f-70cf-4009-a281-8556e1a00ee1.jpg",
    },
    {
      title: "Загородная недвижимость",
      description: "Дачи, коттеджи и земельные участки",
      icon: "TreePine",
      image: "/img/5c7ce75f-70cf-4009-a281-8556e1a00ee1.jpg",
    },
  ];

  const services = [
    {
      title: "Купить",
      icon: "ShoppingCart",
      description: "Найти идеальный объект",
    },
    {
      title: "Продать",
      icon: "TrendingUp",
      description: "Выгодная продажа недвижимости",
    },
    { title: "Арендовать", icon: "Key", description: "Сдать или снять жилье" },
    {
      title: "Услуги",
      icon: "Users",
      description: "Консультации и сопровождение",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-dark via-navy-light to-gold-light">
      {/* Header */}
      <header className="bg-navy/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Building2" size={32} className="text-gold-light" />
              <h1 className="text-2xl font-bold text-white">
                PREMIUM REAL ESTATE
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              {services.map((service, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="text-white hover:text-gold-light hover:bg-white/10"
                >
                  {service.title}
                </Button>
              ))}
            </nav>
            <Button className="bg-gold-light text-navy hover:bg-gold-dark">
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Элегантные решения в недвижимости
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Профессиональные услуги в сфере премиальной недвижимости. Мы
              поможем найти, купить, продать или арендовать объект вашей мечты.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gold-light text-navy hover:bg-gold-dark text-lg px-8 py-3"
              >
                <Icon name="Search" size={20} className="mr-2" />
                Найти недвижимость
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-navy text-lg px-8 py-3"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Наши услуги
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white/95 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-navy rounded-full flex items-center justify-center">
                    <Icon
                      name={service.icon}
                      size={24}
                      className="text-gold-light"
                    />
                  </div>
                  <CardTitle className="text-navy">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-navy hover:bg-navy-light text-white">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-16 px-6 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Типы недвижимости
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {propertyTypes.map((type, index) => (
              <Card
                key={index}
                className="bg-white/95 backdrop-blur-sm overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-48">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-navy/30 flex items-center justify-center">
                    <Icon name={type.icon} size={48} className="text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-navy">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gold-light text-navy hover:bg-gold-dark">
                    Смотреть объекты
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-6">
              Готовы найти идеальную недвижимость?
            </h3>
            <p className="text-xl text-white/90 mb-8">
              Оставьте заявку и получите персональную консультацию от наших
              экспертов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gold-light text-navy hover:bg-gold-dark text-lg px-8 py-3"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Оставить заявку
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-navy text-lg px-8 py-3"
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-dark py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building2" size={24} className="text-gold-light" />
                <h4 className="text-lg font-bold text-white">
                  PREMIUM REAL ESTATE
                </h4>
              </div>
              <p className="text-white/70">
                Элегантные решения в мире недвижимости. Ваш надежный партнер в
                сфере премиальной недвижимости.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-white mb-4">Услуги</h5>
              <ul className="space-y-2 text-white/70">
                <li>Покупка недвижимости</li>
                <li>Продажа недвижимости</li>
                <li>Аренда недвижимости</li>
                <li>Консультации</li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-white mb-4">
                Недвижимость
              </h5>
              <ul className="space-y-2 text-white/70">
                <li>Жилая недвижимость</li>
                <li>Коммерческая недвижимость</li>
                <li>Элитная недвижимость</li>
                <li>Загородная недвижимость</li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-white mb-4">
                Контакты
              </h5>
              <div className="space-y-2 text-white/70">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@premium-estate.ru
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Москва, ул. Примерная, 1
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>&copy; 2024 Premium Real Estate. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
