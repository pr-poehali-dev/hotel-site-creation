import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Добро пожаловать в
                <span className="text-orange-400 block">Grand Hotel</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                Элегантность и комфорт в самом сердце города. Незабываемый опыт
                для взыскательных гостей.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg"
              >
                <Icon name="Calendar" size={20} className="mr-2" />
                Забронировать номер
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Виртуальный тур
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-300">
              <div className="flex items-center">
                <Icon name="Star" size={16} className="text-yellow-400 mr-1" />
                <span>4.9/5 рейтинг</span>
              </div>
              <div className="flex items-center">
                <Icon
                  name="MapPin"
                  size={16}
                  className="text-orange-400 mr-1"
                />
                <span>Центр города</span>
              </div>
              <div className="flex items-center">
                <Icon name="Award" size={16} className="text-orange-400 mr-1" />
                <span>Премиум класс</span>
              </div>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6 max-w-md w-full">
              <CardContent className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Быстрое бронирование
                  </h3>
                  <p className="text-gray-300">
                    Забронируйте номер за 2 минуты
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="checkin" className="text-white">
                        Заезд
                      </Label>
                      <Input
                        id="checkin"
                        type="date"
                        className="bg-white/10 border-white/20 text-white placeholder-gray-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="checkout" className="text-white">
                        Выезд
                      </Label>
                      <Input
                        id="checkout"
                        type="date"
                        className="bg-white/10 border-white/20 text-white placeholder-gray-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guests" className="text-white">
                      Количество гостей
                    </Label>
                    <Input
                      id="guests"
                      type="number"
                      min="1"
                      max="6"
                      defaultValue="2"
                      className="bg-white/10 border-white/20 text-white placeholder-gray-300"
                    />
                  </div>

                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg">
                    <Icon name="Search" size={20} className="mr-2" />
                    Найти номера
                  </Button>
                </div>

                <div className="text-center text-xs text-gray-400">
                  Бесплатная отмена • Мгновенное подтверждение
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
