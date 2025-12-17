import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AppRoute, NavItem } from './types';
import { Menu, X, Cpu, Phone, BookOpen, Lightbulb, Home } from 'lucide-react';
import HomePage from './pages/Home';
import BenefitsPage from './pages/Benefits';
import SolutionsPage from './pages/Solutions';
import BlogPage from './pages/Blog';
import ContactPage from './pages/Contact';
import AIAssistant from './components/AIAssistant';

const NAV_ITEMS: NavItem[] = [
  { label: 'Начало', path: AppRoute.HOME },
  { label: 'Как AI помага', path: AppRoute.BENEFITS },
  { label: 'Примери и решения', path: AppRoute.SOLUTIONS },
  { label: 'Блог', path: AppRoute.BLOG },
  { label: 'Контакт', path: AppRoute.CONTACT },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to={AppRoute.HOME} className="flex-shrink-0 flex items-center">
              <Cpu className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">AI Partner BG</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  location.pathname === item.path
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  location.pathname === item.path
                    ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <Cpu className="h-6 w-6 text-indigo-400" />
              <span className="ml-2 text-lg font-bold">AI Partner BG</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">
              Вашият надежден партньор за дигитална трансформация чрез изкуствен интелект.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Връзки</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to={AppRoute.BENEFITS} className="text-base text-gray-300 hover:text-white">Ползи</Link></li>
              <li><Link to={AppRoute.SOLUTIONS} className="text-base text-gray-300 hover:text-white">Решения</Link></li>
              <li><Link to={AppRoute.CONTACT} className="text-base text-gray-300 hover:text-white">Контакт</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Контакт</h3>
            <ul className="mt-4 space-y-4">
              <li className="text-base text-gray-300">София, България, Студентски град</li>
              <li className="text-base text-gray-300">petarnpetrov24@gmail.com</li>
              <li className="text-base text-gray-300">0898652543</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-base text-gray-400">&copy; 2024 AI Partner BG. Всички права запазени.</p>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path={AppRoute.HOME} element={<HomePage />} />
            <Route path={AppRoute.BENEFITS} element={<BenefitsPage />} />
            <Route path={AppRoute.SOLUTIONS} element={<SolutionsPage />} />
            <Route path={AppRoute.BLOG} element={<BlogPage />} />
            <Route path={AppRoute.CONTACT} element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <AIAssistant />
      </div>
    </HashRouter>
  );
};

export default App;