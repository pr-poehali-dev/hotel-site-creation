import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HotelSections = () => {
  const roomTypes = [
    {
      name: "Стандартный номер",
      price: "от 5 500₽",
      image: "/placeholder.svg",
      features: ["25 м²", "Кондиционер", "Wi-Fi", "Мини-бар"],
    },
    {
      name: "Люкс",
      price: "от 12 000₽",
      image: "/placeholder.svg",
      features: ["45 м²", "Гостиная", "Джакузи", "Панорамный вид"],
    },
    {
      name: "Президентский люкс",
      price: "от 25 000₽",
      image: "/placeholder.svg",
      features: ["80 м²", "Терраса", "Кухня", "Персональный консьерж"],
    },
  ];

  const services = [
    {
      title: "Ресторан",
      description: "Изысканная кухня от шеф-повара",
      icon: "UtensilsCrossed",
    },
    {
      title: "SPA & Wellness",
      description: "Полное расслабление и восстановление",
      icon: "Sparkles",
    },
    {
      title: "Фитнес-центр",
      description: "Современное оборудование 24/7",
      icon: "Dumbbell",
    },
    {
      title: "Бизнес-центр",
      description: "Конференц-залы и переговорные",
      icon: "Briefcase",
    },
    {
      title: "Консьерж-сервис",
      description: "Персональная помощь гостям",
      icon: "Bell",
    },
    {
      title: "Трансфер",
      description: "Доставка в аэропорт и по городу",
      icon: "Car",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Об отеле
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Grand Hotel — это воплощение роскоши и изысканности в самом
                сердце города. Уже более 50 лет мы создаем незабываемые
                впечатления для наших гостей, сочетая классическую элегантность
                с современными удобствами.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Наш отель предлагает 150 номеров и люксов, каждый из которых
                оформлен в уникальном стиле и оснащен всем необходимым для
                комфортного пребывания.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-hotel-gold">150+</div>
                  <div className="text-sm text-gray-600">Номеров</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-hotel-gold">50+</div>
                  <div className="text-sm text-gray-600">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-hotel-gold">24/7</div>
                  <div className="text-sm text-gray-600">Сервис</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Интерьер отеля"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className="fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    4.9/5 • 2,847 отзывов
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Номера и люксы
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Выберите идеальный номер для вашего пребывания. Каждый номер
              оформлен с вниманием к деталям и оснащен современными удобствами.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roomTypes.map((room) => (
              <Card
                key={room.name}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-video relative">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-hotel-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                    {room.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {room.name}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {room.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <Icon
                          name="Check"
                          size={16}
                          className="text-green-500 mr-2"
                        />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-hotel-gold hover:bg-hotel-gold/90 text-white">
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Услуги отеля
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Мы предлагаем широкий спектр услуг для комфортного и незабываемого
              пребывания
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                className="text-center p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-hotel-gold/10 rounded-full flex items-center justify-center">
                    <Icon
                      name={service.icon}
                      size={32}
                      className="text-hotel-gold"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Контакты
                </h2>
                <p className="text-lg text-gray-600">
                  Свяжитесь с нами для бронирования или получения дополнительной
                  информации
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-hotel-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-hotel-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Адрес</h4>
                    <p className="text-gray-600">
                      ул. Тверская, 15, Москва, 125009
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-hotel-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-hotel-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Телефон</h4>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-hotel-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-hotel-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@grandhotel.ru</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-hotel-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={20} className="text-hotel-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Режим работы
                    </h4>
                    <p className="text-gray-600">Круглосуточно</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Отправить сообщение
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Имя
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-gold"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-gold"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-gold"
                    placeholder="Ваше сообщение"
                  />
                </div>
                <Button className="w-full bg-hotel-gold hover:bg-hotel-gold/90 text-white">
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HotelSections;
