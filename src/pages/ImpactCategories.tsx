import React from 'react';
import { BarChart3, Users, Heart, Globe } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Education',
    description: 'Supporting educational initiatives and resources',
    totalDonations: '$125,000',
    beneficiaries: 2500,
    icon: Users,
  },
  {
    id: 2,
    name: 'Healthcare',
    description: 'Providing medical assistance and healthcare support',
    totalDonations: '$250,000',
    beneficiaries: 5000,
    icon: Heart,
  },
  {
    id: 3,
    name: 'Environment',
    description: 'Supporting environmental conservation efforts',
    totalDonations: '$180,000',
    beneficiaries: 3500,
    icon: Globe,
  },
];

export function ImpactCategories() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Impact Categories</h1>
          <p className="mt-1 text-sm text-gray-500">Manage donation categories and their impact</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.id} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="ml-2 text-lg font-medium text-gray-900">{category.name}</h3>
              </div>
              <p className="mt-2 text-sm text-gray-500">{category.description}</p>
              <dl className="mt-4 grid grid-cols-1 gap-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Total Donations</dt>
                  <dd className="mt-1 text-lg font-semibold text-gray-900">{category.totalDonations}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Beneficiaries</dt>
                  <dd className="mt-1 text-lg font-semibold text-gray-900">{category.beneficiaries}</dd>
                </div>
              </dl>
            </div>
          );
        })}
      </div>
    </div>
  );
}