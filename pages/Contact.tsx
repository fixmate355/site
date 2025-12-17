import React, { FormEvent } from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook, User, FileText } from 'lucide-react';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Благодарим ви за запитването! Ще се свържем с вас скоро.");
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-indigo-50 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">Готови сме да ви помогнем</h1>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          Разкажете ни за вашия бизнес и предизвикателствата, ние ще предложим правилното AI решение.
        </p>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Intro */}
          <div>
            <div className="prose prose-indigo text-gray-500 mb-10">
                <p className="text-lg">
                    Свържете се с нас и открийте как изкуственият интелект може да работи за вас. Нашият екип от експерти е на разположение за безплатна първоначална консултация.
                </p>
            </div>
            
            <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Нашият екип" 
                className="rounded-xl shadow-lg mb-8 w-full h-[400px] object-cover"
            />

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <User className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-3 text-base text-gray-900 font-semibold">
                  Петър Петров
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FileText className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  Ф. номер: 0ЕВ0700100
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>София, България, Студентски град</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  0898652543
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  petarnpetrov24@gmail.com
                </div>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                  <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                      <Linkedin className="h-8 w-8" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Facebook className="h-8 w-8" />
                  </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Изпратете запитване</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Име
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Иван Иванов"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Имейл
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="ivan@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Телефон (по избор)
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="+359..."
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Вашият бизнес и въпрос/предизвикателство
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Имам магазин за дрехи и искам да..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  Изпрати
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;