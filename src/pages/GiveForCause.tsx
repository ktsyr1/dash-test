import React from 'react';
import { Heart, Users, Calendar, Target } from 'lucide-react';

const causes = [
  {
    id: 1,
    title: 'Clean Water Initiative',
    description: 'Providing clean water access to rural communities',
    goal: '$50,000',
    raised: '$32,450',
    supporters: 156,
    deadline: '2024-06-30',
    status: 'Active',
  },
  {
    id: 2,
    title: 'Education for All',
    description: 'Supporting underprivileged students with education resources',
    goal: '$25,000',
    raised: '$18,750',
    supporters: 89,
    deadline: '2024-05-15',
    status: 'Active',
  },
];

export function GiveForCause() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Give for Cause</h1>
          <p className="mt-1 text-sm text-gray-500">Manage charitable causes and campaigns</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {causes.map((cause) => (
          <div key={cause.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <Heart className="h-6 w-6 text-red-500" />
                <h3 className="ml-2 text-lg font-medium text-gray-900">{cause.title}</h3>
              </div>
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {cause.status}
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-500">{cause.description}</p>
            <div className="mt-4">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-indigo-600">
                      Progress
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-indigo-600">
                      {cause.raised} / {cause.goal}
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                  <div
                    style={{ width: '65%' }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
                  ></div>
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="flex items-center text-sm text-gray-500">
                <Users className="mr-1.5 h-4 w-4" />
                {cause.supporters} supporters
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="mr-1.5 h-4 w-4" />
                Due {cause.deadline}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}