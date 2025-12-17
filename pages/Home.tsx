import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../types';
import { CheckCircle, TrendingUp, DollarSign, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/id/48/1920/1080"
            alt="Office background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-indigo-900/50 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            Изкуственият интелект – <br className="hidden sm:block" />
            <span className="text-indigo-200">вашият нов партньор за растеж</span>
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Преодоляваме сложността и цената, за да помогнем на малкия бизнес в България да спести време и да взема по‑добри решения.
          </p>
          <div className="mt-10">
            <Link
              to={AppRoute.CONTACT}
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 md:py-4 md:text-lg transition-colors"
            >
              Безплатна консултация
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-indigo-100 rounded-full">
              <TrendingUp className="h-8 w-8 text-indigo-600" />
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Нашата мисия</h2>
          <p className="text-xl text-gray-500">
            Ние предлагаме практична информация и достъпни инструменти, за да подпомогнем внедряването на ИИ в малкия бизнес в България. Вярваме, че технологиите трябва да работят за хората, а не обратното.
          </p>
        </div>
      </section>

      {/* Trust/Stats Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Защо да ни се доверите</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-500">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-10 w-10 text-green-500" />
              </div>
              <p className="text-lg font-semibold text-center text-gray-900">
                54 % от българските МСП вече виждат икономически ползи
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-500">
              <div className="flex justify-center mb-4">
                <TrendingUp className="h-10 w-10 text-blue-500" />
              </div>
              <p className="text-lg font-semibold text-center text-gray-900">
                Много компании ускоряват инвестициите си в технологии благодарение на ИИ
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-500">
              <div className="flex justify-center mb-4">
                <DollarSign className="h-10 w-10 text-yellow-500" />
              </div>
              <p className="text-lg font-semibold text-center text-gray-900">
                Програмите за финансиране предоставят субсидии за дигитализация
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Can Help Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-10 lg:mb-0">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Как можем да помогнем</h2>
              <p className="text-lg text-gray-500 mb-6">
                Предлагаме специализирано образователно съдържание, курирани примери за решения и напълно безплатна първоначална консултация, за да оценим вашите нужди. Ние не просто продаваме софтуер, ние изграждаме стратегия.
              </p>
              <ul className="space-y-4 mb-8">
                 <li className="flex items-start">
                    <div className="flex-shrink-0">
                       <CheckCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-500">Образователни материали на достъпен език</p>
                 </li>
                 <li className="flex items-start">
                    <div className="flex-shrink-0">
                       <CheckCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-500">Индивидуални планове за внедряване</p>
                 </li>
              </ul>
              <Link
                to={AppRoute.SOLUTIONS}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all"
              >
                Разгледайте решенията
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              {/* Abstract decorative element */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-indigo-50 rounded-full opacity-50 blur-3xl"></div>
              <img
                src="https://picsum.photos/id/60/800/600"
                alt="Working together"
                className="relative rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
