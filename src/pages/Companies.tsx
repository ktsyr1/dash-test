import React from 'react';
import { Building2, Mail, MapPin, Link as LinkIcon } from 'lucide-react';

const companies = [
  {
    id: 1,
    name: 'Tech Corp',
    email: 'contact@techcorp.com',
    location: 'San Francisco, CA',
    website: 'https://techcorp.com',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Green Solutions',
    email: 'info@greensolutions.com',
    location: 'Seattle, WA',
    website: 'https://greensolutions.com',
    status: 'Active',
  },
];

export function Companies() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Partner Companies</h1>
          <p className="mt-1 text-sm text-gray-500">Manage company partnerships</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {companies.map((company) => (
          <div key={company.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <Building2 className="h-6 w-6 text-indigo-600" />
                <h3 className="ml-2 text-lg font-medium text-gray-900">{company.name}</h3>
              </div>
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {company.status}
              </span>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm text-gray-500">
                <Mail className="mr-2 h-4 w-4" />
                {company.email}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="mr-2 h-4 w-4" />
                {company.location}
              </div>
              <div className="flex items-center text-sm text-indigo-600">
                <LinkIcon className="mr-2 h-4 w-4" />
                <a href={company.website} target="_blank" rel="noopener noreferrer">
                  {company.website}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}