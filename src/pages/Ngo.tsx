import React from 'react';
import { Building, Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react';

const ngos = [
  {
    id: 1,
    name: 'Global Education Fund',
    email: 'contact@gef.org',
    phone: '+1 234 567 8901',
    address: '123 Charity Lane, New York, NY',
    status: 'Verified',
    category: 'Education',
    projects: 12,
  },
  {
    id: 2,
    name: 'Clean Water Initiative',
    email: 'info@cleanwater.org',
    phone: '+1 234 567 8902',
    address: '456 Hope Street, Los Angeles, CA',
    status: 'Verified',
    category: 'Environment',
    projects: 8,
  },
];

export function Ngo() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">NGO Partners</h1>
          <p className="mt-1 text-sm text-gray-500">Manage NGO partnerships and verifications</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {ngos.map((ngo) => (
          <div key={ngo.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <Building className="h-6 w-6 text-indigo-600" />
                <h3 className="ml-2 text-lg font-medium text-gray-900">{ngo.name}</h3>
              </div>
              <span className="flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                <CheckCircle2 className="mr-1 h-3 w-3" />
                {ngo.status}
              </span>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm text-gray-500">
                <Mail className="mr-2 h-4 w-4" />
                {ngo.email}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Phone className="mr-2 h-4 w-4" />
                {ngo.phone}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="mr-2 h-4 w-4" />
                {ngo.address}
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <dl className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Category</dt>
                  <dd className="mt-1 text-sm text-gray-900">{ngo.category}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Active Projects</dt>
                  <dd className="mt-1 text-sm text-gray-900">{ngo.projects}</dd>
                </div>
              </dl>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}