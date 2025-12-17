import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, UseCase } from '../types';
import { MessageCircle, Box, Megaphone, AlertTriangle, Calendar } from 'lucide-react';

const solutions: UseCase[] = [
  {
    id: '1',
    title: 'Бавни отговори на клиентски запитвания',
    problem: 'Клиентските въпроси се натрупват и служителите не успяват да отговорят навреме.',
    solution: 'Интегриране на чатбот, който отговаря на стандартни въпроси 24/7.',
    result: 'По‑бърза поддръжка, по‑удовлетворени клиенти и освобождаване на персонала за по‑сложни задачи.',
    icon: <MessageCircle className="h-6 w-6" />
  },
  {
    id: '2',
    title: 'Неточни прогнози за наличности',
    problem: 'Сезонният характер на продажбите води до излишъци или липси на стоки.',
    solution: 'Модел за прогнозиране, който анализира предишни продажби и сезонност.',
    result: 'Оптимално планиране на доставките и намаляване на разходите за складиране.',
    icon: <Box className="h-6 w-6" />
  },
  {
    id: '3',
    title: 'Ниска ефективност на маркетинговите кампании',
    problem: 'Рекламните послания не достигат правилната аудитория, а бюджетът се губи.',
    solution: 'Използване на AI инструменти за сегментация и автоматично персонализиране на имейли и реклами.',
    result: 'По‑висока ангажираност и по‑добра възвръщаемост на инвестициите.',
    icon: <Megaphone className="h-6 w-6" />
  },
  {
    id: '4',
    title: 'Риск от финансови измами',
    problem: 'Неочаквани подозрителни транзакции и възможни загуби.',
    solution: 'Система за откриване на аномалии, която следи за необичайна активност.',
    result: 'Ранно откриване на измами и защита на финансовите средства.',
    icon: <AlertTriangle className="h-6 w-6" />
  },
  {
    id: '5',
    title: 'Трудности при управление на работния график',
    problem: 'Комуникация между служителите и ръководството за смени е хаотична.',
    solution: 'AI‑базиран софтуер за оптимизиране на работния график според натовареност и предпочитания.',
    result: 'По‑доволни служители и по‑ефективно използване на ресурси.',
    icon: <Calendar className="h-6 w-6" />
  },
];

const SolutionsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="relative bg-gray-900 py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/id/318/1920/1080"
            alt="Office consultation"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gray-900/60" />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-6">
            Реални проблеми, практични AI решения
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Вижте как изкуственият интелект се превръща в инструмент за успех на малкия бизнес.
          </p>
          <Link
            to={AppRoute.CONTACT}
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition-colors"
          >
            Свържете се с нас
          </Link>
        </div>
      </div>

      {/* Use Cases Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {solutions.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    {item.icon}
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-gray-900">{item.title}</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-md">
                    <span className="block text-sm font-bold text-red-800 uppercase tracking-wide">Проблем</span>
                    <p className="mt-1 text-gray-700">{item.problem}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-md">
                    <span className="block text-sm font-bold text-blue-800 uppercase tracking-wide">AI Решение</span>
                    <p className="mt-1 text-gray-700">{item.solution}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-md">
                    <span className="block text-sm font-bold text-green-800 uppercase tracking-wide">Резултат</span>
                    <p className="mt-1 text-gray-700">{item.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional Visual Accent */}
      <div className="bg-indigo-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <blockquote className="text-2xl font-medium text-white italic">
            "Внедряването на AI решение за склада ни намали загубите с 20% още първия месец."
            </blockquote>
            <p className="mt-4 text-indigo-200 font-bold">— Иван Петров, собственик на онлайн магазин</p>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;
