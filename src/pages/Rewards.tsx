import React from 'react';
import { Award, Gift, Clock, Tag } from 'lucide-react';

const rewards = [
  {
    id: 1,
    title: 'Premium Membership',
    description: 'One year of premium membership access',
    points: 5000,
    claimed: 45,
    available: 100,
    expiry: '2024-12-31',
    category: 'Membership',
  },
  {
    id: 2,
    title: 'Gift Card',
    description: '$50 Amazon gift card',
    points: 2500,
    claimed: 78,
    available: 150,
    expiry: '2024-06-30',
    category: 'Gift Cards',
  },
];

export function Rewards() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Rewards</h1>
          <p className="mt-1 text-sm text-gray-500">Manage reward offerings and redemptions</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {rewards.map((reward) => (
          <div key={reward.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <Award className="h-6 w-6 text-indigo-600" />
                <h3 className="ml-2 text-lg font-medium text-gray-900">{reward.title}</h3>
              </div>
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                {reward.points} points
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-500">{reward.description}</p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="flex items-center text-sm text-gray-500">
                <Gift className="mr-1.5 h-4 w-4" />
                {reward.claimed} / {reward.available} claimed
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="mr-1.5 h-4 w-4" />
                Expires {reward.expiry}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Tag className="mr-1.5 h-4 w-4" />
                {reward.category}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}