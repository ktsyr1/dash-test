import React from 'react';
import { Gift, Clock, Users, Trophy } from 'lucide-react';

const challenges = [
  {
    id: 1,
    title: 'Earth Day Challenge',
    description: 'Plant a tree and share your story',
    participants: 234,
    deadline: '2024-04-22',
    reward: '$500',
    status: 'Active',
  },
  {
    id: 2,
    title: 'Community Service',
    description: 'Volunteer at local food bank',
    participants: 156,
    deadline: '2024-05-15',
    reward: '$300',
    status: 'Active',
  },
];

export function GiftChallenges() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Gift Challenges</h1>
          <p className="mt-1 text-sm text-gray-500">Manage ongoing and upcoming challenges</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <Gift className="h-6 w-6 text-indigo-600" />
                <h3 className="ml-2 text-lg font-medium text-gray-900">{challenge.title}</h3>
              </div>
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {challenge.status}
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-500">{challenge.description}</p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="flex items-center text-sm text-gray-500">
                <Users className="mr-1.5 h-4 w-4" />
                {challenge.participants} participants
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="mr-1.5 h-4 w-4" />
                Due {challenge.deadline}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Trophy className="mr-1.5 h-4 w-4" />
                Reward: {challenge.reward}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}