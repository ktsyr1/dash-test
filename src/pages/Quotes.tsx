import React from 'react';
import { Quote as QuoteIcon, User, Calendar } from 'lucide-react';

const quotes = [
  {
    id: 1,
    text: "The best way to find yourself is to lose yourself in the service of others.",
    author: "Mahatma Gandhi",
    category: "Service",
    date: "2024-03-15",
  },
  {
    id: 2,
    text: "We make a living by what we get, but we make a life by what we give.",
    author: "Winston Churchill",
    category: "Giving",
    date: "2024-03-14",
  },
];

export function Quotes() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Inspirational Quotes</h1>
          <p className="mt-1 text-sm text-gray-500">Manage motivational quotes</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {quotes.map((quote) => (
          <div key={quote.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start space-x-3">
              <QuoteIcon className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-lg text-gray-900 font-medium italic">"{quote.text}"</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="mr-1.5 h-4 w-4" />
                    {quote.author}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="mr-1.5 h-4 w-4" />
                    {quote.date}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}