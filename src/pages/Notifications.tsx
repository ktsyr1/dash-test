import React from 'react';
import { Bell, Clock, Tag } from 'lucide-react';

const notifications = [
  {
    id: 1,
    title: "New Donation Received",
    message: "$500 donated to Clean Water Initiative",
    type: "donation",
    time: "5 minutes ago",
    read: false,
  },
  {
    id: 2,
    title: "Challenge Completed",
    message: "Earth Day Challenge has ended successfully",
    type: "challenge",
    time: "1 hour ago",
    read: true,
  },
];

export function Notifications() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Notifications</h1>
          <p className="mt-1 text-sm text-gray-500">Manage system notifications</p>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 ${notification.read ? 'bg-white' : 'bg-indigo-50'}`}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <Bell className={`h-6 w-6 ${notification.read ? 'text-gray-400' : 'text-indigo-600'}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">
                    {notification.title}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="mr-1.5 h-4 w-4" />
                    {notification.time}
                  </div>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  {notification.message}
                </p>
                <div className="mt-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                    <Tag className="mr-1.5 h-3 w-3" />
                    {notification.type}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}