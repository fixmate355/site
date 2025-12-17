import React from 'react';
import { BlogPost } from '../types';
import { BookOpen, Newspaper, Lightbulb, Users } from 'lucide-react';

const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Какво е изкуствен интелект? Основни понятия за предприемачи',
    excerpt: 'Изкуственият интелект е сбор от технологии, които позволяват на компютрите да изпълняват задачи, наподобяващи човешко мислене. В тази статия ще разгледаме как алгоритмите...',
    imageUrl: 'https://picsum.photos/id/1/400/250',
  },
  {
    id: '2',
    title: 'Първи стъпки с чатботове: по‑добро обслужване на клиенти',
    excerpt: 'Чатботовете не са само за големите корпорации. Научете как лесно да интегрирате автоматичен помощник във вашия сайт или Facebook страница.',
    imageUrl: 'https://picsum.photos/id/201/400/250',
  },
  {
    id: '3',
    title: 'Как да финансирате AI проекта си? Наръчник за българските програми',
    excerpt: 'Преглед на актуалните грантове и програми за дигитализация и иновации в България, подходящи за малкия и среден бизнес.',
    imageUrl: 'https://picsum.photos/id/20/400/250',
  },
  {
    id: '4',
    title: 'История на успех: Как семейна фирма увеличи продажбите си',
    excerpt: 'Разказваме историята на малка производствена фирма от Пловдив, която използва предсказващи анализи за оптимизация на ресурсите.',
    imageUrl: 'https://picsum.photos/id/250/400/250',
  },
];

const BlogPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 lg:flex lg:justify-between lg:items-center">
            <div className="max-w-xl">
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                    Научете повече за изкуствения интелект
                </h1>
                <p className="mt-4 text-xl text-gray-600">
                    Практически статии за българския малък бизнес – ясно, просто, приложимо. Тук публикуваме всичко от основите на ИИ до истории на успеха.
                </p>
            </div>
        </div>
      </div>
      
      {/* Visual Accent - Icons */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex justify-center space-x-8 text-gray-400">
         <BookOpen className="h-8 w-8" />
         <Newspaper className="h-8 w-8" />
         <Lightbulb className="h-8 w-8" />
         <Users className="h-8 w-8" />
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt={post.title} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    Статия
                  </p>
                  <a href="#" className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.excerpt}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                    <button className="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                        Прочетете повече
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;