import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../types';
import { Clock, TrendingUp, Users, ShieldCheck, Target, ArrowRight } from 'lucide-react';

const BenefitsPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-indigo-50 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Практични ползи от изкуствения интелект
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          Разберете как технологиите работят за вас – без жаргон и без сложни термини.
        </p>
        <div className="mt-8">
          <Link
            to={AppRoute.SOLUTIONS}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Вижте примерите
          </Link>
        </div>
      </div>

      {/* Benefits List */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Benefit 1 */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Автоматизация на рутинни задачи</h3>
            <p className="text-lg text-gray-500">
              ИИ може да поема повтаряща се работа като фактуриране, въвеждане на данни и изготвяне на стандартни отчети. Това освобождава ценно време за вас и вашите служители, за да се фокусирате върху стратегическите и творчески дейности, които развиват бизнеса.
            </p>
          </div>
          <div className="mt-10 lg:mt-0 bg-gray-100 p-8 rounded-xl h-64 flex items-center justify-center">
             {/* Placeholder Graphic */}
             <div className="bg-white p-6 shadow-lg rounded w-full max-w-sm">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="h-4 bg-green-200 rounded w-full text-center text-green-800 text-xs font-bold py-1">ЗАДАЧАТА ЗАВЪРШЕНА</div>
             </div>
          </div>
        </div>

        {/* Benefit 2 */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center lg:flex-row-reverse">
           <div className="order-2 lg:order-1 mt-10 lg:mt-0">
             <img src="https://picsum.photos/id/1060/600/400" className="rounded-xl shadow-lg" alt="Data Analysis" />
           </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">По‑информирани решения</h3>
            <p className="text-lg text-gray-500">
              Анализът на данни с ИИ помага да се предвиждат продажби, да се откриват скрити тенденции в потребителското поведение и да се намалят човешките грешки при планирането. Вместо да гадаете, разчитайте на данни.
            </p>
          </div>
        </div>

        {/* Benefit 3 */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
             <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Подобрено обслужване на клиенти</h3>
            <p className="text-lg text-gray-500">
              Използването на интелигентни чатботове и системи за персонализирани препоръки осигурява 24/7 поддръжка. Клиентите получават по-бързи отговори, а вие не пропускате запитвания дори извън работно време.
            </p>
          </div>
          <div className="mt-10 lg:mt-0 flex justify-center">
             <img src="https://picsum.photos/id/3/400/400" className="rounded-full shadow-2xl border-4 border-white" alt="Customer Chat" />
          </div>
        </div>

        {/* Benefit 4 & 5 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Повишена сигурност</h3>
                <p className="text-gray-500">
                  ИИ алгоритмите могат да наблюдават транзакции и трафик в реално време, откривайки опити за измами и защитавайки чувствителните данни на вашия бизнес по-ефективно от всякога.
                </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Оптимизирани кампании и маркетинг</h3>
                <div className="flex items-center mb-4 space-x-2">
                    <span className="text-2xl font-bold text-indigo-600">+35%</span>
                    <span className="text-sm text-gray-500">ROI средно увеличение</span>
                </div>
                <p className="text-gray-500">
                  AI помага да се таргетират по‑точно рекламите към правилната аудитория, да се персонализират посланията и да се разходва бюджетът максимално ефективно.
                </p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default BenefitsPage;
